import React from "react";
import { useOutletContext } from "react-router-dom";

export const Main = (prop) => {
	const context = useOutletContext();
	console.log(context);
	return <div>{prop.children}</div>;
};
