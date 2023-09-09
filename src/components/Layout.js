import PropTypes from "prop-types";

export const Layout = (props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
			}}>
			{props.children}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.array.isRequired,
};
