import Divider from "./Divider";
import NavItem from "./NavItem";

export const Nav = () => {
	return (
		<nav className="w-1/5 flex flex-col gap-16 text-white">
			<h1 className="text-5xl" style={{ color: "#836349" }}>
				ReadMore
			</h1>
			<ul className="list-none px-2 flex flex-col gap-0">
				<NavItem title="Home" to="/main" />
				<Divider />
				<NavItem title="Search" to="/search" />
			</ul>
		</nav>
	);
};
