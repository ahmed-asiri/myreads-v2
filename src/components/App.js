import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main";

function App() {
	return (
		<div>
			<Routes>
				{/* <Route path="/" element={<Navigate to={"/home"} />} /> */}
				<Route path="/" element={<Main />} />
				<Route path="/home" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
