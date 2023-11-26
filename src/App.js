import * as React from "react";
import Container from "@mui/material/Container";
import Lists from "./Lists";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [openl, setOpenl] = React.useState(false);
  const [hight, sethighight] = React.useState("100px");
  const [swich, setswish] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickl = () => {
    setOpenl(!openl);
  };

  return (
    <Container>
      <Lists handleClick={handleClick} open={open}>
        <p>nor ibrahim</p>
      </Lists>
      <Lists handleClick={handleClickl} open={openl}>
        <FormControlLabel
          control={
            <Switch
              checked={swich}
              onChange={() => {
                setswish(!swich);
                !swich ? sethighight("400px") : sethighight("100px");
              }}
            />
          }
        />
      </Lists>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "orange",
          height: `${hight}`,
        }}
      >
        <h3>hellow world</h3>
      </div>
    </Container>
  );
}
