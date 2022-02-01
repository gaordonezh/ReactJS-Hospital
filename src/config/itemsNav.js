import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DomainIcon from "@mui/icons-material/Domain";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import { Map, AccountTree } from "@mui/icons-material";

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

const itemsNav = [
  {
    id: "menu",
    type: "group",
    title: "GENERAL",
    roles: ["superadmin", "admin", "logistica", "doctor"],
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: DashboardIcon,
        url: "/",
        roles: ["superadmin", "admin", "logistica", "doctor"],
      },
      {
        id: "company",
        title: "Empresas",
        type: "item",
        icon: ApartmentIcon,
        url: "/company",
        roles: ["superadmin"],
      },
      {
        id: "patient",
        title: "Pacientes",
        type: "item",
        icon: PersonOutlineIcon,
        url: "/patient",
        roles: ["superadmin", "admin", "doctor"],
      },
      {
        id: "people",
        title: "Usuarios",
        type: "collapse",
        icon: PeopleAltIcon,
        roles: ["superadmin", "admin"],
        children: [
          {
            id: "admin",
            title: "Director Ejecutivo",
            type: "item",
            url: "/admin",
            roles: ["superadmin", "admin"],
          },
          {
            id: "rrhh",
            title: "Servicios Generales",
            type: "item",
            url: "/rrhh",
            roles: ["superadmin", "admin"],
          },
          {
            id: "logistica",
            title: "Logística",
            type: "item",
            url: "/logistica",
            roles: ["superadmin", "admin"],
          },
          {
            id: "doctor",
            title: "Personal Médico",
            type: "item",
            url: "/doctor",
            roles: ["superadmin", "admin"],
          },
        ],
      },
      {
        id: "schedule",
        title: "Horarios",
        type: "item",
        icon: CalendarTodayIcon,
        url: "/schedule",
        roles: ["superadmin", "admin", "rrhh"],
      },
      {
        id: "quotes",
        title: "Citas",
        type: "item",
        icon: ViewDayIcon,
        url: "/quotes",
        roles: ["superadmin", "admin", "doctor"],
      },
      {
        id: "histories",
        title: "Historias Clínicas",
        type: "item",
        icon: ReceiptIcon,
        url: "/histories",
        roles: ["superadmin", "admin", "doctor"],
      },
    ],
  },
  {
    id: "equipos",
    type: "group",
    title: "EQUIPOS",
    roles: ["superadmin", "admin", "rrhh"],
    children: [
      {
        id: "equipment",
        title: "Equipos",
        type: "item",
        icon: CarpenterIcon,
        url: "/equipment",
        roles: ["superadmin", "admin", "logistica"],
      },
      {
        id: "maintenance",
        title: "Mantenimientos",
        type: "item",
        icon: PermDataSettingIcon,
        url: "/equipment/maintenance",
        roles: ["superadmin", "admin", "rrhh"],
      },
    ],
  },
  {
    id: "insumos",
    type: "group",
    title: "INSUMOS",
    roles: ["superadmin", "admin", "logistica"],
    children: [
      {
        id: "insumos",
        title: "Insumos",
        type: "item",
        icon: AllInboxIcon,
        url: "/insumos",
        roles: ["superadmin", "admin", "logistica"],
      },
    ],
  },
  {
    id: "config",
    type: "group",
    title: "CONFIGURACIÓN",
    roles: ["superadmin", "admin"],
    children: [
      {
        id: "map",
        title: "Resumen",
        type: "item",
        icon: Map,
        url: "/resume",
        roles: ["superadmin", "admin"],
      },
      {
        id: "building",
        title: "Edificios",
        type: "item",
        icon: DomainIcon,
        url: "/building",
        roles: ["superadmin", "admin"],
      },
      {
        id: "level",
        title: "Niveles",
        type: "item",
        icon: AlignHorizontalLeftIcon,
        url: "/level",
        roles: ["superadmin", "admin"],
      },
      {
        id: "upss",
        title: "UPSS",
        type: "item",
        icon: AccountTree,
        url: "/upss",
        roles: ["superadmin", "admin"],
      },
      {
        id: "room",
        title: "Ambientes",
        type: "item",
        icon: DoorSlidingIcon,
        url: "/room",
        roles: ["superadmin", "admin"],
      },
      {
        id: "assignment",
        title: "Asignación",
        type: "item",
        icon: AutoAwesomeMosaicIcon,
        url: "/assignment",
        roles: ["superadmin", "admin"],
      },
    ],
  },
];

export default itemsNav;
