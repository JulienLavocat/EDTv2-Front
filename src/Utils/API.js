export default class API {

	static getTimetableEvents() {
		return fetch("/group-F41.json").then(r => r.json());
	}

}