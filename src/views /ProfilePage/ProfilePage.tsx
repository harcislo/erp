import React from "react";
import Layout from "../../components/Layout/Layout";

interface IProfilePage {}

const ProfilePage: React.FC<IProfilePage> = React.memo(() => {
  return <Layout>ProfilePage</Layout>;
});

export default ProfilePage;
