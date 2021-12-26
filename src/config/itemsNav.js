import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleIcon from "@mui/icons-material/People";
import NotesIcon from "@mui/icons-material/Notes";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AcUnitIcon from "@mui/icons-material/AcUnit";

//-----------------------|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||-----------------------//

const itemsNav = [
  {
    id: "menu",
    type: "group",
    title: "GENERAL",
    roles: ["superadmin", "admin", "teacher", "student"],
    children: [
      {
        id: "inicio",
        title: "Inicio",
        type: "item",
        url: "/",
        roles: ["superadmin", "admin", "teacher", "student"],
        icon: DashboardIcon,
      },
      {
        id: "schools",
        title: "Colegios",
        type: "item",
        url: "/schools",
        roles: ["superadmin"],
        icon: HomeWorkIcon,
      },
      {
        id: "rooms",
        title: "Aulas",
        type: "item",
        url: "/rooms",
        roles: ["superadmin", "admin"],
        icon: MeetingRoomIcon,
      },
      {
        id: "courses",
        title: "Cursos",
        type: "item",
        url: "/courses",
        roles: ["superadmin", "admin"],
        icon: LibraryBooksIcon,
      },
      {
        id: "postulations",
        title: "Postulaciones",
        type: "item",
        url: "/postulations",
        roles: ["superadmin", "admin"],
        icon: PersonAddIcon,
      },
    ],
  },
  {
    id: "academicgestion",
    type: "group",
    title: "GESTIÓN ACADÉMICA",
    roles: ["superadmin", "admin", "teacher", "student"],
    children: [
      {
        id: "calendar",
        title: "Calendario",
        type: "item",
        url: "/calendar",
        icon: CalendarTodayIcon,
        roles: ["superadmin", "admin", "teacher"],
      },
      {
        id: "mycoursesteacher",
        title: "Mis Cursos",
        type: "item",
        url: "/teacher/courses",
        icon: LibraryBooksIcon,
        roles: ["superadmin", "admin", "teacher"],
      },
      {
        id: "mycoursesstudent",
        title: "Mis Cursos",
        type: "item",
        url: "/student/courses",
        icon: LibraryBooksIcon,
        roles: ["student"],
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
        id: "assigment",
        title: "Asignación",
        type: "item",
        url: "/assigment",
        roles: ["superadmin", "admin"],
        icon: AltRouteIcon,
      },
      {
        id: "periods",
        title: "Periodos",
        type: "item",
        url: "/periods",
        roles: ["superadmin", "admin"],
        icon: DateRangeIcon,
      },
      {
        id: "units",
        title: "Unidades",
        type: "item",
        url: "/units",
        roles: ["superadmin", "admin"],
        icon: AcUnitIcon,
      },
      {
        id: "noterange",
        title: "Rango de Notas",
        type: "item",
        url: "/noterange",
        roles: ["superadmin", "admin"],
        icon: NotesIcon,
      },
    ],
  },
  {
    id: "social",
    type: "group",
    title: "SOCIAL",
    roles: ["superadmin", "admin", "teacher"],
    children: [
      {
        id: "notices",
        title: "Noticias",
        type: "item",
        url: "/notices",
        roles: ["superadmin", "admin", "teacher"],
        icon: RecordVoiceOverIcon,
      },
      {
        id: "messages",
        title: "Mensajes",
        type: "item",
        url: "/messages",
        roles: ["superadmin", "admin", "teacher"],
        icon: ChatIcon,
      },
    ],
  },
  {
    id: "users",
    type: "group",
    title: "USUARIOS",
    roles: ["superadmin", "admin"],
    children: [
      {
        id: "people",
        title: "Usuarios",
        type: "collapse",
        roles: ["superadmin", "admin"],
        icon: PeopleIcon,
        children: [
          {
            id: "admin",
            title: "Administrador",
            type: "item",
            url: "/users/admin",
            roles: ["superadmin"],
            icon: PersonIcon,
          },
          {
            id: "teacher",
            title: "Profesor",
            type: "item",
            url: "/users/teacher",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "family",
            title: "Familia",
            type: "item",
            url: "/users/family",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "student",
            title: "Alumnos",
            type: "item",
            url: "/users/student",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "director",
            title: "Director",
            type: "item",
            url: "/users/director",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "psicologa",
            title: "Psicologo",
            type: "item",
            url: "/users/psicologa",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "coordinator",
            title: "Coordinador",
            type: "item",
            url: "/users/coordinator",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "librarian",
            title: "Bibliotecario",
            type: "item",
            url: "/users/librarian",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
          {
            id: "nurse",
            title: "Enfermera",
            type: "item",
            url: "/users/nurse",
            roles: ["superadmin", "admin"],
            icon: PersonIcon,
          },
        ],
      },
    ],
  },
];

export default itemsNav;
