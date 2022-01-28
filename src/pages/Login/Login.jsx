import React, { useState } from "react";
// material
import { styled } from "@mui/material/styles";
import {
  Card,
  Container,
  Typography,
  Grid,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SESSION_NAME from "config/session";
import StorageService from "auth/StorageService";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthenticationService from "auth/AuthenticationService";
import { notification, Spin } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { USER_TOKEN, USER_DATA } from "redux/actions";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

const Login = () => {
  // const dispatch = useDispatch();
  const [show, showPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const { token, data } = useSelector((state) => state.userDetails);

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const obj = {
        user: data.username,
        password: data.password,
      };
      const res = await AuthenticationService.login(obj);
      StorageService.set(SESSION_NAME, res);
      window.location.href = "/";
      // dispatch({ type: USER_DATA, data: res.data });
      // dispatch({ type: USER_TOKEN, token: res.token });
    } catch (error) {
      notification["warning"]({ message: "Usuario o contraseña incorrecta" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootStyle>
      <Container maxWidth="sm">
        <Grid
          container
          sx={{ minHeight: "calc((100vh) - 35px)" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Container maxWidth="sm">
              <Stack sx={{ mb: 5, textAlign: "center" }}>
                <Avatar
                  src="/static/hospital.png"
                  alt="LOGO"
                  sx={{ height: 150, width: 150, m: "0 auto 25px auto" }}
                />
                <Typography variant="h4" gutterBottom>
                  SISTEMA INTEGRADO DE HOSPITALES
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Ingrese sus credenciales...
                </Typography>
              </Stack>
              <Spin spinning={loading}>
                <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Usuario"
                      error={Boolean(errors?.username ?? false)}
                      {...register("username", { required: true })}
                    />
                    <TextField
                      fullWidth
                      type={show ? "text" : "password"}
                      label="Contraseña"
                      error={Boolean(errors?.password ?? false)}
                      {...register("password", { required: true })}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => showPass(!show)}>
                              {show ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      INGRESAR
                    </Button>
                  </Stack>
                </form>
              </Spin>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default Login;
