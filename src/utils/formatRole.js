const formatRole = (role) => {
  switch (role) {
    case "superadmin":
      return "Superadmin";
    case "admin":
      return "Administrador";
    case "supervisor":
      return "Supervisor";
    case "cocinero":
      return "Cocinero";
    case "mozo":
      return "Mozo";
    case "caja":
      return "Caja";
    case "envios":
      return "Envios";
    case "almacen":
      return "Almacén";
    default:
      return "Usuario";
  }
};
export default formatRole;
