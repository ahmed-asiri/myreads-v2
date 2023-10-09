import PropTypes from "prop-types";

const BookCard = ({ book }) => {
	return (
		<div
			key={book.id}
			className="relative flex flex-row bg-white gap-3 p-5 border rounded-md shadow-md"
			style={{ width: "31%" }}>
			<div className="image flex-auto w-1/2 border shadow">
				<img
					className="h-full w-full"
					src={book.imageLinks.thumbnail}
					alt={book.title}
				/>
			</div>
			<div className=" w-1/2 flex flex-col justify-between">
				<div>
					<p className="text-[1.4rem] text-ellipsis line-clamp-2 mb-3">
						{book.title}
					</p>
					<p className="text-[1.15rem] opacity-50 italic text-ellipsis line-clamp-1">
						{typeof book.authors !== "undefined" &&
							"By " + book.authors.join(", ")}
					</p>
				</div>
				{/* <p className="text-clip text-[1.2rem] opacity-60 overflow-hidden line-clamp-5 w-full">
					{book.description}
				</p> */}
			</div>
		</div>
	);
};

BookCard.PropTypes = {
	book: PropTypes.object.iaRequired,
};

export default BookCard;
