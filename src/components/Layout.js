import PropTypes from "prop-types";

export const Layout = ({ children }) => {
	return (
		<div className="flex flex-row h-screen max-w-screen-xl w-full mx-auto py-10 gap-10">
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.array.isRequired,
};
