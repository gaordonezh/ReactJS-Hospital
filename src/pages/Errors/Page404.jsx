import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Button, Typography, Grid } from "@mui/material";
// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <Grid minHeight="100vh" container>
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <Typography variant="h3" paragraph>
          Página no encontrada
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Lo sentimos, no pudimos encontrar la página que busca. ¿Quizás ha
          escrito mal la URL? Asegúrese de revisar su ortografía.
        </Typography>
        <Box component="img" src="/htm.jpg" sx={{ maxWidth: "100%" }} />
        <Button to="/" size="large" variant="contained" component={RouterLink}>
          LLÉVAME A CASA
        </Button>
      </Box>
    </Grid>
  );
}
