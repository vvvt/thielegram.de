import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
