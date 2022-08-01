import React from "react";
import Layout from "../../components/Layout/Layout";

interface ITasksPage {}

const TasksPage: React.FC<ITasksPage> = React.memo(() => {
  return <Layout>TasksPage</Layout>;
});

export default TasksPage;
