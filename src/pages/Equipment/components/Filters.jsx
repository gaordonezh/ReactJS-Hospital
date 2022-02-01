import { listTypes } from "components/selects/SelectTypeEquipment";
import { Grid, ButtonGroup, Button } from "@mui/material";

const Filters = ({ type, setType }) => {
  return (
    <ButtonGroup component={Grid} container>
      {[...["TODOS"], ...listTypes].map((e, i) => (
        <Button
          Grid
          item
          key={i}
          sx={{ fontSize: 12 }}
          variant={type === e ? "contained" : "outlined"}
          size="small"
          onClick={() => setType(e)}
        >
          {e}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Filters;
