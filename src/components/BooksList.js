import BookCard from "./BookCard";

const BooksList = ({ books, title, onBookStatusChanged }) => {
	return (
		<div className="flex flex-col gap-5">
			{title && <h3 className="text-[1.9rem] text-gray-800">{title}</h3>}
			<div className="flex flex-wrap flex-row gap-8 justify-start ">
				{books.map((book) => (
					<BookCard
						onBookStatusChanged={onBookStatusChanged}
						key={book.id}
						book={book}
					/>
				))}
			</div>
		</div>
	);
};

export default BooksList;
