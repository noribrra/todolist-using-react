import { Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { Listcontex } from "../context/Listcontext";

// dialog
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
// icons
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo({ t }) {
  const { to, setto } = useContext(Listcontex);
  const [open, setOpen] = useState(false);
  const [openup, setOpenup] = useState(false);
  const [valueupdate, setvalueupdate] = useState({
    title: t.title,
    body: t.body,
  });
  // functions
  function click() {
    const newa = to.map((tt) => {
      if (t.id == tt.id) {
        t.iscompleted = !t.iscompleted;
      }
      return tt;
    });
    setto(newa);
    localStorage.setItem("todos", JSON.stringify(newa));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // update
  const handleClickOpenup = () => {
    setOpenup(true);
  };

  const handleCloseup = () => {
    setOpenup(false);
  };

  function handledleteconferm() {
    const newarry = to.filter((tt) => {
      return tt.id != t.id;
    });
    setto(newarry);
    localStorage.setItem("todos", JSON.stringify(newarry));
  }

  function handalupdateconfirm() {
    let newupdate = to.map((tt) => {
      if (tt.id == t.id) {
        return { ...tt, title: valueupdate.title, body: valueupdate.body };
      }
      return tt;
    });
    setto(newupdate);
    localStorage.setItem("todos", JSON.stringify(newupdate));

    handleCloseup();
  }

  // return
  return (
    <>
      {/* update dialog */}
      <>
        <Dialog
          style={{ direction: "rtl" }}
          open={openup}
          onClose={handleCloseup}
        >
          <DialogTitle>تعديل هذه المهمة</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="عنوان"
              type="text"
              fullWidth
              variant="standard"
              value={valueupdate.title}
              onChange={(e) => {
                setvalueupdate({ ...valueupdate, title: e.target.value });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="تفاصيل"
              type="text"
              fullWidth
              variant="standard"
              value={valueupdate.body}
              onChange={(e) => {
                setvalueupdate({ ...valueupdate, body: e.target.value });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseup}>اغلاق</Button>
            <Button onClick={handalupdateconfirm}>تاكيد تعديل</Button>
          </DialogActions>
        </Dialog>

        {/* update dialog=========== */}
        {/* dialog delete */}

        <Dialog
          style={{ direction: "rtl" }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle style={{ color: "black" }} id="alert-dialog-title">
            {"  هل انت متاكد من حذف هذه المهمة ؟"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ color: "gray", fontWeight: "300" }}
              id="alert-dialog-description"
            >
              لا يمكن استرجاعه بعد حذف
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>اغلاق</Button>
            <Button onClick={handledleteconferm} autoFocus>
              تاكيد,الحذف
            </Button>
          </DialogActions>
        </Dialog>
        {/* =====dialog==== */}
      </>
      <Card
        className="todocard"
        sx={{
          minWidth: 275,
          color: "#fff",
          backgroundColor: "#245",
          marginTop: "20px",
        }}
      >
        <CardContent>
          <Grid container>
            <Grid marginTop="5px" xs={8}>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "right",
                  textDecoration: t.iscompleted ? "line-through" : "none",
                }}
              >
                {t.title}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  textAlign: "right",
                  fontWeight: "100",
                  marginRight: "20px",
                }}
              >
                {t.body}
              </Typography>
            </Grid>
            <Grid
              marginTop="10px"
              display={"flex"}
              alignItems="center"
              justifyContent="space-around"
              xs={4}
            >
              {/* action button */}

              {/* check button */}
              <IconButton
                sx={{
                  color: t.iscompleted ? "#fff" : "#8bc34a",
                  backgroundColor: t.iscompleted ? "#8bc34a" : "#fff",
                  border: "solid 3px  #8bc34a ",
                }}
                onClick={click}
              >
                <CheckIcon />
              </IconButton>
              {/*=== check button==== */}

              <IconButton
                sx={{
                  color: "#03a9f4",
                  backgroundColor: "#fff",
                  border: "solid 3px #03a9f4 ",
                }}
                onClick={handleClickOpenup}
              >
                <EditIcon />
              </IconButton>

              {/* delete button */}
              <IconButton
                sx={{
                  color: "#ff1744",
                  backgroundColor: "#fff",
                  border: "solid 3px #ff1744 ",
                }}
                onClick={handleClickOpen}
              >
                <DeleteIcon />
              </IconButton>
              {/* ====delete button==== */}

              {/* end action button */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
