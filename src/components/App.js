import { useEffect, useState } from "react";
import { booksApi } from "../apis/booksApi";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import SearchPage from "../pages/Search";
import NotFound from "../pages/NotFound";
import { Nav } from "./Nav";
import { Layout } from "./Layout";

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
		<Layout>
			<Nav />
			<div className="flex-1 bg-red-100">
				<Routes>
					<Route Component={Main} path="/" />
					<Route path="/main" element={<Main />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</div>
		</Layout>
	);
}

export default App;
