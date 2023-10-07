import { useEffect, useState } from "react";
import Input from "../components/Input";
import { booksApi } from "../apis/booksApi";
import SearchIcon from "../components/SearchIcon";
import BookCard from "../components/BookCard";

const SearchPage = () => {
	const [query, setQuery] = useState("");
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isDirty, setIsDirty] = useState(false);

	useEffect(() => {
		if (query) {
			setIsLoading(true);
			const intervalId = setTimeout(() => booksHandler(), 2000);
			return () => {
				clearTimeout(intervalId);
			};
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
			setBooks(result.books);
		} else {
			setBooks([]);
		}
		setIsLoading(false);
	};

	return (
		<div className="p-10 relative h-full flex flex-col">
			<Input value={query} onChange={(e) => setQuery(e.target.value)} />
			<div className="bg-gray-100 h-1 my-5" />
			<div className="relative flex-1 overflow-y-scroll">
				{isLoading ? (
					<div className="absolute top-1/4 left-1/2 translate-x-1/2 -translate-y-1/2">
						<SearchIcon />
					</div>
				) : null}
				<div className="flex flex-wrap flex-row gap-16 justify-start">
					{books.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
