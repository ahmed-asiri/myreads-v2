import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav style={{ width: "20%" }}>
			<ul style={{ listStyle: "none" }}>
				<li>
					<Link>Home</Link>
				</li>
			</ul>
		</nav>
	);
};
