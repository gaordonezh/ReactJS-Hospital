import React from "react";

import { CssBaseline } from "@mui/material";

// routing
import routes from "./routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoute from "./layout/AppRoute";

// defaultTheme
import ThemeConfig from "./theme";

//-----------------------|| APP ||-----------------------//

const App = () => {
  return (
    <ThemeConfig>
      <CssBaseline />
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              exact={route.exact}
              key={route.path}
              path={route.path}
              listRoles={route.listRoles}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </ThemeConfig>
  );
};

export default App;
