import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<nav className="w-1/5 flex flex-col bg-slate-500 text-white">
			<h1 className="">LOGO</h1>
			<ul className="list-none px-2">
				<li className="my-2 border-b-2">
					<Link to={"/main"}>Home</Link>
				</li>
				<li>
					<Link to={"/search"}>Search</Link>
				</li>
			</ul>
		</nav>
	);
};
