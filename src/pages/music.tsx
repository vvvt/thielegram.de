import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import { ArrowLeft } from "react-feather";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Colors from "../classes/colors";

type DataProps = {
	site: {
		buildTime: string;
	};
};

const Music: React.FC<PageProps<DataProps>> = ({ data, path }) => (
	<Layout color={Colors.sectionColorB} home>
		<SEO title="Music" />
		<Link to="/">
			<ArrowLeft size="48" color={Colors.dark} />
		</Link>
		<h1>Music</h1>
		<h2></h2>
	</Layout>
);

export default Music;

export const query = graphql`
	{
		site {
			buildTime(formatString: "YYYY-MM-DD hh:mm a z")
		}
	}
`;
