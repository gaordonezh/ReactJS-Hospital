import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardLayout from "./MainLayout";
import user from "utils/userDetails";

const AppRoutes = ({
  component: Component,
  path,
  listRoles,
  isPrivate,
  exact,
  ...rest
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isPrivate && (!user || !Boolean(user.token) || !user.rol) ? (
          <Redirect to={{ pathname: "/home" }} />
        ) : isPrivate ? (
          listRoles.includes(user.rol) ? (
            <DashboardLayout>
              <Component {...props} />
            </DashboardLayout>
          ) : (
            "NO ESTÁS AUTORIZADO"
          )
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export default AppRoutes;
