export default class API {

	static getTimetableEvents() {
		return fetch("/groups/F41.json").then(r => r.json());
	}

}