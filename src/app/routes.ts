import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ProjectsDashboard } from "./components/ProjectsDashboard";
import { ProjectView } from "./components/ProjectView";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ProjectsDashboard,
  },
  {
    path: "/project",
    Component: Layout,
    children: [
      { path: ":projectId", Component: ProjectView },
      { path: ":projectId/:artifactId", Component: ProjectView },
    ],
  },
]);
