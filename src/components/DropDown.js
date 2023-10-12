import { useRef, useState } from "react";
import { UisAngleDown } from "@iconscout/react-unicons-solid";

const Dropdown = ({ placeholder, value, options, onChange, disabled }) => {
	const [toggler, setToggler] = useState(false);
	const ref = useRef(null);
	const onOptionClick = (value) => {
		onChange(value);
		setToggler(false);
	};

	const onOutsideClickHandler = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setToggler(false);
		}
	};

	document.addEventListener("click", onOutsideClickHandler);

	return (
		<div className="relative" ref={ref}>
			<button
				onClick={() => (!disabled ? setToggler(!toggler) : setToggler(false))}
				className={`text-gray-600 flex flex-row 
                align-middle  justify-between px-2 py-1 
                w-full text-xl rounded-md border-gray-200 border-2
                ${disabled ? "bg-gray-300" : "bg-white"}`}>
				<p className="text-[1.2rem] self-center">
					{value
						? options.find((option) => option.value === value).label
						: placeholder}
				</p>{" "}
				<UisAngleDown />
			</button>
			<div
				className={`${
					toggler ? "visible" : "hidden"
				} absolute top-10 left-0 right-0 shadow-md z-10 bg-white`}>
				<ul className="text-lg">
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => onOptionClick(option.value)}
							className="p-1 border-b-2 hover:bg-gray-200 cursor-pointer">
							{option.label}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
