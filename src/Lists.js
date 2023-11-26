import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Lists({ children, handleClick, open }) {
  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          style={{ display: "flex", justifyContent: "center" }}
        >
          {children}
        </List>
      </Collapse>
      <Divider style={{ boxShadow: "0px 7px 10px rgba(0,0,0,0.3)" }} />
    </List>
  );
}
