import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Button, Typography, Grid } from "@mui/material";
// ----------------------------------------------------------------------

export default function Page401() {
  return (
    <Grid minHeight="100vh" container>
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <Typography variant="h3" paragraph>
          No tienes permiso para esta vista
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Lo sentimos, no tienes acceso a esta vista. ¿Quizás ha escrito mal la
          URL? Asegúrese de volver y usar la navegación.
        </Typography>
        <Box component="img" src="/htm.jpg" sx={{ maxWidth: "100%" }} />
        <Button to="/" size="large" variant="contained" component={RouterLink}>
          LLÉVAME A CASA
        </Button>
      </Box>
    </Grid>
  );
}
