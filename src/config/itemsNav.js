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
import BedIcon from "@mui/icons-material/Bed";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

const itemsNav = [
  {
    id: "menu",
    type: "group",
    title: "GENERAL",
    roles: ["superadmin", "admin", "rrhh", "logistica", "doctor"],
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: DashboardIcon,
        url: "/",
        roles: ["superadmin", "admin", "rrhh", "logistica", "doctor"],
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
        roles: ["superadmin", "admin", "rrhh", "doctor"],
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
    roles: ["superadmin", "admin", "logistica"],
    children: [
      {
        id: "equipment",
        title: "Equipos",
        type: "item",
        icon: CarpenterIcon,
        url: "/equipment",
        roles: ["superadmin", "admin", "logistica"],
      },
    ],
  },
  {
    id: "config",
    type: "group",
    title: "CONFIGURACIÓN",
    roles: ["superadmin", "admin", "logistica"],
    children: [
      {
        id: "building",
        title: "Edificios",
        type: "item",
        icon: DomainIcon,
        url: "/building",
        roles: ["superadmin", "admin", "logistica"],
      },
      {
        id: "level",
        title: "Niveles",
        type: "item",
        icon: AlignHorizontalLeftIcon,
        url: "/level",
        roles: ["superadmin", "admin", "logistica"],
      },
      {
        id: "room",
        title: "Habitaciones",
        type: "item",
        icon: DoorSlidingIcon,
        url: "/room",
        roles: ["superadmin", "admin", "logistica"],
      },
      {
        id: "bed",
        title: "Camas",
        type: "item",
        icon: BedIcon,
        url: "/bed",
        roles: ["superadmin", "admin", "logistica"],
      },
      {
        id: "assignment",
        title: "Asignación",
        type: "item",
        icon: AutoAwesomeMosaicIcon,
        url: "/assignment",
        roles: ["superadmin", "admin", "logistica"],
      },
    ],
  },
];

export default itemsNav;
