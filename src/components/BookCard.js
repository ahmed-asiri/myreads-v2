import PropTypes from "prop-types";
import Dropdown from "./DropDown";
import { useState } from "react";
import { booksApi } from "../apis/booksApi";

const BookCard = ({ book, onBookStatusChanged }) => {
	const [state, setState] = useState(book.shelf);
	const [isLoading, setisLoading] = useState(false);
	return (
		<div
			key={book.id}
			className="relative flex flex-row bg-white gap-3 p-5 border rounded-md shadow-md"
			style={{ width: "31%" }}>
			<div
				className="image flex-auto w-1/2 border shadow"
				style={{
					height: "17rem",
					width: "8rem",
				}}>
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
				<Dropdown
					placeholder={"Choose Category"}
					options={BOOK_STATE_OPTIONS}
					value={state}
					disabled={isLoading}
					onChange={async (value) => {
						if (value !== state) {
							setisLoading(true);
							await booksApi.put(`/books/${book.id}`, {
								shelf: value,
							});
							if (onBookStatusChanged) onBookStatusChanged(book, value);
							setisLoading(false);
							setState(value);
						}
					}}
				/>
			</div>
		</div>
	);
};

const BOOK_STATE_OPTIONS = [
	{
		label: "Currently Reading",
		value: "currentlyReading",
	},
	{
		label: "Want to read",
		value: "wantToRead",
	},
	{
		label: "Read",
		value: "read",
	},
];

BookCard.propTypes = {
	book: PropTypes.object.isRequired,
};

export default BookCard;
