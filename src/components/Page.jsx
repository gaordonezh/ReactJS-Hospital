import React from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
  Typography,
  Paper,
  Box,
  Divider,
  Grid,
} from "@mui/material";

const Page = (props) => {
  const { title, helper, itemComponent, children, ...rest } = props;
  return (
    <Box p={1}>
      <Paper {...rest}>
        <Box p={2}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom component="div">
                <FormHelperText component="div">{helper}</FormHelperText>
              </Typography>
              <Typography variant="h5">
                <b>{title}</b>
              </Typography>
            </Grid>
            <Grid item>{itemComponent}</Grid>
          </Grid>
          <Divider />
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
