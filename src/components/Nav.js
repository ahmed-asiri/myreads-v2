import { Link } from "react-router-dom";
import Divider from "./Divider";

export const Nav = () => {
	return (
		<nav className="w-1/5 flex flex-col gap-8 text-white">
			<h1 className="text-5xl" style={{ color: "#836349" }}>
				ReadMore
			</h1>
			<ul className="list-none px-2 flex flex-col gap-0">
				<li className="">
					<Link style={{ color: "#555" }} to={"/main"}>
						Home
					</Link>
				</li>
				<Divider />
				<li>
					<Link style={{ color: "#555" }} to={"/search"}>
						Search
					</Link>
				</li>
			</ul>
		</nav>
	);
};
