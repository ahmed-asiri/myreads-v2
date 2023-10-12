import { useEffect, useState } from "react";
import { booksApi } from "../apis/booksApi";
import BooksList from "../components/BooksList";

export const Main = () => {
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

	const onBookStatusChanged = (bookId, status) => {
		const tempBooks = [...books];
		const book = tempBooks.find((book) => book.id === bookId);
		if (book) {
			book.shelf = status;
			setBooks([...tempBooks]);
		}
	};

	const currentlyReadingList = books.filter(
		(book) => book.shelf === "currentlyReading"
	);
	const readList = books.filter((book) => book.shelf === "read");
	const wantToReadList = books.filter((book) => book.shelf === "wantToRead");

	return (
		<div className="flex flex-col gap-10">
			<BooksList
				onBookStatusChanged={onBookStatusChanged}
				title={"Currently Reading"}
				books={currentlyReadingList}
			/>
			<BooksList
				onBookStatusChanged={onBookStatusChanged}
				title={"Want To Read"}
				books={wantToReadList}
			/>
			<BooksList
				onBookStatusChanged={onBookStatusChanged}
				title={"Read"}
				books={readList}
			/>
		</div>
	);
};
