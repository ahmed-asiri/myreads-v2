import arrowPointer from "../icons/arrow_01.svg";

const SearchPointer = () => {
	return (
		<div className="relative ">
			<img
				style={{
					transform: "rotateX(180deg)",
					width: "100px",
					color: "darkcyan",
					opacity: 0.5,
				}}
				src={arrowPointer}
				alt="hand drawin arrow"
			/>
			<span
				className="absolute bottom-0 translate-y-1/4 text-gray-500"
				style={{ left: "100px", fontFamily: "'handlee', serif" }}>
				Type your search here
			</span>
		</div>
	);
};

export default SearchPointer;
