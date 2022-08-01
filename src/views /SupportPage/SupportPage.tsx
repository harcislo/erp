import React from "react";
import Layout from "../../components/Layout/Layout";

interface ISupportPage {}

const SupportPage: React.FC<ISupportPage> = React.memo(() => {
  return <Layout>SupportPage</Layout>;
});

export default SupportPage;
