import { useEffect, useState } from "react";
import Input from "../components/Input";
import { booksApi } from "../apis/booksApi";
import SearchIcon from "../components/SearchIcon";
import Divider from "../components/Divider";
import SearchPointer from "../components/SearchPointer";
import BooksList from "../components/BooksList";
import NotFound from "./NotFound";

const SearchPage = ({ shelfBooks, onBookStatusChanged }) => {
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (query) {
			setIsLoading(true);
			const intervalId = setTimeout(() => booksHandler(), 2000);
			return () => {
				clearTimeout(intervalId);
			};
		} else {
			setBooks([]);
		}
	}, [query]);

	const booksHandler = async () => {
		const result = (
			await booksApi.post("/search", {
				query,
				maxResults: 100,
			})
		).data;

		// response error/empty handling
		if (!result.books.error) {
			const mappedBooks = result.books.map((book) => {
				// find the book from shelf
				const onShelfBook = shelfBooks.find(
					(shelfBook) => book.id === shelfBook.id
				);
				return onShelfBook ? { ...onShelfBook } : book;
			});
			setBooks(mappedBooks);
		} else {
			setBooks([]);
		}
		setIsLoading(false);
	};

	return (
		<div className="relative h-full flex flex-col">
			<Input value={query} onChange={(e) => setQuery(e.target.value)} />
			<Divider />
			{!query && <SearchPointer />}
			{!isLoading && query && <NotFound title={"No Book Found"} />}
			<div className="relative flex-1 overflow-y-scroll ">
				{isLoading ? (
					<div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<SearchIcon />
					</div>
				) : null}
				<BooksList onBookStatusChanged={onBookStatusChanged} books={books} />
			</div>
		</div>
	);
};

export default SearchPage;
