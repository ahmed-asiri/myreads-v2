import { useState } from "react";
import Input from "../components/Input";

const SearchPage = () => {
	const [query, setQuery] = useState("");

	const onQueryChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="p-10">
			<Input state={query} setState={onQueryChange} />
			<div className="bg-gray-100 h-1 my-5" />
		</div>
	);
};

export default SearchPage;
