import * as React from "react";

import Snackbar from "@mui/material/Snackbar";

import { Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Mysnackbar({ open, tost }) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} message="Note archived">
        <Alert severity={tost.kind} sx={{ width: "100%" }}>
          {tost.ms}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
