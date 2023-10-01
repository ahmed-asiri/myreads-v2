import { Player } from "@lottiefiles/react-lottie-player";

const SearchIcon = () => {
	return (
		<Player
			autoplay
			loop
			src="https://cdn.lordicon.com/wxnxiano.json"
			style={{
				color: "#3080e8",
				accentColor: "#121331",
				height: "70px",
				width: "70px",
			}}></Player>
	);
};

export default SearchIcon;
