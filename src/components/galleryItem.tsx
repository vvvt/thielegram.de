import React from "react";

const GalleryItem = () => (
	<figure
		style={{
			display: "flex",
            flexDirection: "column",
			alignContent: "stretch",
			textAlign: "center",
            gap: "4%",
		}}>
		<img src="https://www.fillmurray.com/220/300" />
		<figcaption
			style={{
				padding: "8px 4px",
				marginBottom: "24px",
				background: "aliceblue",
			}}>
			Test
		</figcaption>
	</figure>
);

export default GalleryItem;
