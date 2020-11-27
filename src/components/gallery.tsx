import React from "react";

const Gallery = ({ children }) => (
	<div
		style={{
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
            justifyContent: "space-between",
		}}>
		{children}
	</div>
);

export default Gallery;
