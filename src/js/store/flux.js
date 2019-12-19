const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact() {
				fetch(url + "agenda/downtown_xii")
					.then(response => response.json())
					.then(result => {
						console.log("result", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
			},
			addContact(name, phone, email, address) {
				fetch(url, {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "downtown_xii"
					})
				}).then(() => {
					fetch(url + "agenda/downtown_xii")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			editContact(id, name, phone, email, address) {
				fetch(url + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "downtown_xii"
					})
				}).then(() => {
					fetch(url + "agenda/downtown_xii")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			deleteContact(id) {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "delete"
				})
					.then(response => response.json())
					.then(result => {
						console.log("result", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
