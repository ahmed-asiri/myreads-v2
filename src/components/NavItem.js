import { NavLink } from "react-router-dom";

const NavItem = ({ to, title }) => {
	return (
		<li>
			<NavLink
				className={({ isActive }) =>
					isActive ? "text-stone-900" : "text-black"
				}
				to={to}>
				{title}
			</NavLink>
		</li>
	);
};

export default NavItem;
