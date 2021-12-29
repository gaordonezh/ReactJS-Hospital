import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardLayout from "./MainLayout";
import user from "utils/userDetails";
import Page401 from "pages/Errors/Page401";

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
          <Redirect to={{ pathname: "/login" }} />
        ) : isPrivate ? (
          listRoles.includes(user.rol) ? (
            <DashboardLayout>
              <Component {...props} />
            </DashboardLayout>
          ) : (
            <Page401 />
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
