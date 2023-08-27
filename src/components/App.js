import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { booksApi } from "../apis/booksApi";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const setBooksFromApi = async () => {
			const result = (await booksApi.get("/books")).data;
			setBooks(result);
		};
		setBooksFromApi();
	}, []);

	return (
		<div>
			<NavLink to={"/main"}>Click here</NavLink>
			<Outlet context={{ booksData: books }}>Hi there</Outlet>
		</div>
	);
}

export default App;
