import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main";
import SearchPage from "../pages/Search";
import NotFound from "../pages/NotFound";
import { Nav } from "./Nav";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { booksApi } from "../apis/booksApi";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const res = await booksApi.get("/books", {
				params: {
					maxResults: 100,
				},
			});
			setBooks(res.data.books);
		};
		getBooks();
	}, []);

	const onBookStatusChanged = (updatedBook, status) => {
		const tempBooks = [...books];
		const book = tempBooks.find((book) => book.id === updatedBook.id);
		if (book) {
			book.shelf = status;
			setBooks([...tempBooks]);
		} else {
			const newBook = { ...updatedBook, shelf: status };
			setBooks([...tempBooks, newBook]);
		}
	};

	return (
		<Layout>
			<Nav />
			<div className="flex-1">
				<Routes>
					<Route
						path="/"
						element={
							<Main books={books} onBookStatusChanged={onBookStatusChanged} />
						}
					/>
					<Route
						path="/main"
						element={
							<Main books={books} onBookStatusChanged={onBookStatusChanged} />
						}
					/>
					<Route
						path="/search"
						element={
							<SearchPage
								shelfBooks={books}
								onBookStatusChanged={onBookStatusChanged}
							/>
						}
					/>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</div>
		</Layout>
	);
}

export default App;
