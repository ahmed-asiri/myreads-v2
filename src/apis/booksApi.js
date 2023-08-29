import axios from "axios";

function manageAuthToken() {
	let apiToken = localStorage.getItem("myreads-api-token");

	if (!apiToken) {
		const idToken = Math.random() * 1000;
		localStorage.setItem("myreads-api-token", idToken);
	}
	apiToken = localStorage.getItem("myreads-api-token");

	return apiToken;
}

export const booksApi = axios.create({
	baseURL: "https://reactnd-books-api.udacity.com",
	timeout: 5000,
	headers: {
		Authorization: manageAuthToken(),
	},
});
