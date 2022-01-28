import { lazy } from "react";
import Loadable from "./Loadable";

const Login = Loadable(lazy(() => import("pages/Login")));
// ====================================================================
const Page404 = Loadable(lazy(() => import("pages/Errors/Page404")));
// ====================================================================
const Dashboard = Loadable(lazy(() => import("pages/Dashboard")));
const Company = Loadable(lazy(() => import("pages/Company")));
const Patients = Loadable(lazy(() => import("pages/Patients")));
const Admin = Loadable(lazy(() => import("pages/Users/Admin")));
const RRHH = Loadable(lazy(() => import("pages/Users/RRHH")));
const Logistica = Loadable(lazy(() => import("pages/Users/Logistica")));
const Doctor = Loadable(lazy(() => import("pages/Users/Doctor")));
const Schedule = Loadable(lazy(() => import("pages/ScheduleAssignment")));
const Quotes = Loadable(lazy(() => import("pages/Quotes")));
const Histories = Loadable(lazy(() => import("pages/Histories")));
const Equipment = Loadable(lazy(() => import("pages/Equipment")));
const Building = Loadable(lazy(() => import("pages/Building")));
const Level = Loadable(lazy(() => import("pages/Level")));
const Room = Loadable(lazy(() => import("pages/Room")));
const Bed = Loadable(lazy(() => import("pages/Bed")));
const Assignment = Loadable(lazy(() => import("pages/Assignment")));
const Insumos = Loadable(lazy(() => import("pages/Insumos")));
const Maintenance = Loadable(
  lazy(() => import("pages/Equipment/components/Maintenance"))
);
const ListMaintenance = Loadable(
  lazy(() => import("pages/Equipment/components/ListMaintenance"))
);
const Resumen = Loadable(lazy(() => import("pages/Resumen")));
const General = Loadable(
  lazy(() => import("pages/Resumen/components/General"))
);
const BuildingMap = Loadable(
  lazy(() => import("pages/Resumen/components/Building"))
);
const Levels = Loadable(lazy(() => import("pages/Resumen/components/Levels")));
const UPSS = Loadable(lazy(() => import("pages/Resumen/components/UPSS")));

const routes = [
  {
    path: "/login",
    exact: true,
    listRoles: [],
    component: Login,
    isPrivate: false,
    name: "login",
  },
  {
    path: "/",
    exact: true,
    listRoles: ["superadmin", "admin", "rrhh", "logistica", "doctor"],
    component: Dashboard,
    isPrivate: true,
    name: "app",
  },
  {
    path: "/company",
    exact: true,
    listRoles: ["superadmin"],
    component: Company,
    isPrivate: true,
    name: "company",
  },
  {
    path: "/patient",
    exact: true,
    listRoles: ["superadmin", "admin", "rrhh", "doctor"],
    component: Patients,
    isPrivate: true,
    name: "patient",
  },
  {
    path: "/admin",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: Admin,
    isPrivate: true,
    name: "admin",
  },
  {
    path: "/rrhh",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: RRHH,
    isPrivate: true,
    name: "rrhh",
  },
  {
    path: "/logistica",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: Logistica,
    isPrivate: true,
    name: "logistica",
  },
  {
    path: "/doctor",
    exact: true,
    listRoles: ["superadmin", "admin"],
    component: Doctor,
    isPrivate: true,
    name: "doctor",
  },
  {
    path: "/schedule",
    exact: true,
    listRoles: ["superadmin", "admin", "rrhh"],
    component: Schedule,
    isPrivate: true,
    name: "schedule",
  },
  {
    path: "/quotes",
    exact: true,
    listRoles: ["superadmin", "admin", "doctor"],
    component: Quotes,
    isPrivate: true,
    name: "quotes",
  },
  {
    path: "/histories",
    exact: true,
    listRoles: ["superadmin", "admin", "doctor"],
    component: Histories,
    isPrivate: true,
    name: "histories",
  },
  {
    path: "/equipment",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Equipment,
    isPrivate: true,
    name: "equipment",
  },
  {
    path: "/equipment/maintenance/:idequipment",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Maintenance,
    isPrivate: true,
    name: "equipment",
  },
  {
    path: "/equipment/maintenance",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: ListMaintenance,
    isPrivate: true,
    name: "equipment",
  },
  {
    path: "/insumos",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Insumos,
    isPrivate: true,
    name: "insumos",
  },
  {
    path: "/resume",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Resumen,
    isPrivate: true,
    name: "resume",
  },
  {
    path: "/resume/general",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: General,
    isPrivate: true,
    name: "resume",
  },
  {
    path: "/resume/buildings",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: BuildingMap,
    isPrivate: true,
    name: "resume",
  },
  {
    path: "/resume/levels",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Levels,
    isPrivate: true,
    name: "resume",
  },
  {
    path: "/resume/upss",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: UPSS,
    isPrivate: true,
    name: "resume",
  },
  {
    path: "/building",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Building,
    isPrivate: true,
    name: "building",
  },
  {
    path: "/level",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Level,
    isPrivate: true,
    name: "level",
  },
  {
    path: "/room",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Room,
    isPrivate: true,
    name: "room",
  },
  {
    path: "/bed",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Bed,
    isPrivate: true,
    name: "bed",
  },
  {
    path: "/assignment",
    exact: true,
    listRoles: ["superadmin", "admin", "logistica"],
    component: Assignment,
    isPrivate: true,
    name: "assignment",
  },
  {
    path: "*",
    exact: true,
    listRoles: [],
    component: Page404,
    isPrivate: false,
    name: "404",
  },
];

export default routes;
