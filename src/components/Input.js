import PropTypes from "prop-types";

const Input = ({ state, setState }) => {
	return (
		<input
			placeholder="Search"
			className="text-2xl selection:bg-gray-500 selection:text-white text-gray-600 w-2/5 border border-gray-300 px-2 py-2 rounded-lg inline-block outline-transparent focus:outline-blue-300 transition-all duration-200 ease-in placeholder:italic"
			value={state}
			onChange={setState}
		/>
	);
};

Input.propTypes = {
	state: PropTypes.string.isRequired,
	setState: PropTypes.func.isRequired,
};

export default Input;
