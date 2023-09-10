import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="w-1/5">
			<ul className="list-none">
				<li>
					<Link to={"/main"}>Home</Link>
				</li>
				<li>
					<Link to={"/search"}>Search</Link>
				</li>
			</ul>
		</nav>
	);
};
