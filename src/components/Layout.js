import PropTypes from "prop-types";

export const Layout = ({ children }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				height: "100vh",
				maxWidth: "1600px",
				width: "100%",
				margin: "0 auto",
			}}>
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.array.isRequired,
};
