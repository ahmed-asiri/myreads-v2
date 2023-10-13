const NotFound = ({ title, icon }) => {
	return (
		<div className="grid place-items-center content-center h-3/4">
			<p className="text-[4rem] text-gray-500 opacity-60 font-[handlee]">
				{title}
			</p>
			<span>{icon}</span>
		</div>
	);
};

export default NotFound;
