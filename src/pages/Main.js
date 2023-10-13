import BooksList from "../components/BooksList";

export const Main = ({ onBookStatusChanged, books }) => {
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
