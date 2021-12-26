import { lazy } from "react";
import Loadable from "./Loadable";

const Dashboard = Loadable(lazy(() => import("pages/Private/Dashboard")));
const Home = Loadable(lazy(() => import("pages/Public/Home")));
const Login = Loadable(lazy(() => import("pages/Public/Login")));

const routes = [
  {
    path: "/home",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: Home,
    isPrivate: false,
    name: "app",
  },
  {
    path: "/login",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: Login,
    isPrivate: false,
    name: "app",
  },
  {
    path: "/",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: Dashboard,
    isPrivate: true,
    name: "app",
  },
];

export default routes;
