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

const Code: React.FC<PageProps<DataProps>> = ({ data, path }) => (
	<Layout color={Colors.sectionColorA}>
		<SEO title="Code" />
		<Link to="/">
			<ArrowLeft size="48" />
		</Link>
		<h1>Code</h1>
		<section>
			<header>
				<h2>GraphTiles</h2>
				<p role="doc-subtitle">Cross Device Graph Comparison</p>
			</header>
      <p>Content</p>
		</section>
		<section>
			<header>
				<h2>foodi</h2>
				<p role="doc-subtitle">Novel Canteen Navigator</p>
			</header>
      <p>Content</p>
		</section>
		<section>
			<header>
				<h2>SleepWell</h2>
				<p role="doc-subtitle">Sleep Data Visualizer</p>
			</header>
      <p>Content</p>
		</section>
		<section>
			<header>
				<h2>loomorec</h2>
				<p role="doc-subtitle">Speaker Recognition for Loomo</p>
			</header>
      <p>Content</p>
		</section>
		<section>
			<header>
				<h2>HyperFlat App</h2>
				<p role="doc-subtitle"></p>
			</header>
      <p>Content</p>
		</section>
	</Layout>
);

export default Code;

export const query = graphql`
	{
		site {
			buildTime(formatString: "YYYY-MM-DD hh:mm a z")
		}
	}
`;
