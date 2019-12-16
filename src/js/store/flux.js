const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact() {
				const url = "https://assets.breatheco.de/apis/fake/contact/agenda/downtown_xii";
				fetch(url)
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
