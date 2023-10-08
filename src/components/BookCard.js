import PropTypes from "prop-types";

const BookCard = ({ book }) => {
	return (
		<div
			key={book.id}
			className="flex flex-col gap-3 border rounded-md p-5"
			style={{ width: "23.43%" }}>
			<div className="image">
				<img
					className="w-full h-80"
					src={book.imageLinks.thumbnail}
					alt={book.title}
				/>
			</div>
			<div>
				<button className="rounded-md bg-cyan-500 text-white px-5 py-2">
					Preview
				</button>
			</div>
		</div>
	);
};

BookCard.PropTypes = {
	book: PropTypes.object.iaRequired,
};

export default BookCard;
