import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useState, useContext, useEffect, useMemo } from "react";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import { Button, Divider, Grid } from "@mui/material";
import Todo from "./Todo";
import { v4 as idtodo } from "uuid";
import { Listcontex } from "../context/Listcontext";
import { useTost } from "../context/Tostcontext";

// dialog

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
export default function Todolist() {
  const { showtost } = useTost();
  const { to, setto } = useContext(Listcontex);
  const [typec, settypec] = useState("all");
  const [titleinput, settiltleinput] = useState("");

  // dialog state
  const [open, setOpen] = useState(false);
  const [openup, setOpenup] = useState(false);

  const [valueupdate, setvalueupdate] = useState({});

  // function dialog

  const handleClickOpen = (t) => {
    setvalueupdate(t);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handledleteconferm() {
    const newarry = to.filter((tt) => {
      return tt.id !== valueupdate.id;
    });
    setto(newarry);
    localStorage.setItem("todos", JSON.stringify(newarry));
    setOpen(false);
    showtost("تم حذف بنجاح", "error");
  }

  const handleClickOpenup = (t) => {
    setOpenup(true);

    setvalueupdate(t);
  };

  const handleCloseup = () => {
    setOpenup(false);
  };

  function handalupdateconfirm() {
    let newupdate = to.map((tt) => {
      if (tt.id === valueupdate.id) {
        return { ...tt, title: valueupdate.title, body: valueupdate.body };
      }
      return tt;
    });
    setto(newupdate);
    localStorage.setItem("todos", JSON.stringify(newupdate));
    handleCloseup();
    showtost("تم تعديل بنجاح", "success");
  }

  // filter for iscomplit and not complit

  const iscomplit = useMemo(() => {
    return to.filter((tt) => {
      return tt.iscompleted;
    });
  }, [to]);

  const notcomplet = useMemo(() => {
    return to.filter((tt) => {
      return !tt.iscompleted;
    });
  }, [to]);
  let toberender = to;
  if (typec === "complet") {
    toberender = iscomplit;
  } else if (typec === "notcomplet") {
    toberender = notcomplet;
  } else {
    toberender = to;
  }

  const todos = toberender.map((t) => {
    return (
      <Todo
        t={t}
        key={t.id}
        opendelit={handleClickOpen}
        openedit={handleClickOpenup}
      ></Todo>
    );
  });

  useEffect(() => {
    let todolis = JSON.parse(localStorage.getItem("todos")) ?? [];
    setto(todolis);
  }, []);

  // functions

  function handelclickbutton() {
    const newtodo = {
      id: idtodo(),
      title: titleinput,
      body: "",
      iscompleted: false,
    };
    let add = [...to, newtodo];
    setto(add);
    settiltleinput("");
    localStorage.setItem("todos", JSON.stringify(add));
    showtost("تم الاضافة بنجاح", "success");
  }
  function changtype(e) {
    settypec(e.target.value);
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

      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }} variant="h2">
              مهامي
            </Typography>
            <Divider />
            {/* buttons */}
            <ToggleButtonGroup
              style={{ direction: "ltr", marginTop: "30px" }}
              color="primary"
              exclusive
              aria-label="Platform"
              value={typec}
              onChange={changtype}
            >
              <ToggleButton value="notcomplet">غير المنجز</ToggleButton>
              <ToggleButton value="complet">المنجز</ToggleButton>
              <ToggleButton value="all">الكل</ToggleButton>
            </ToggleButtonGroup>
            {/* end buttons */}

            {/* todos */}
            <div
              style={{
                maxHeight: "400px",
                overflowY: "auto",
              }}
            >
              {todos}
            </div>

            {/* end todos */}

            {/* add button */}
            <Grid marginTop="17px" container>
              <Grid xs={8}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="عنوان مهمة"
                  variant="outlined"
                  value={titleinput}
                  onChange={(e) => {
                    settiltleinput(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                xs={4}
              >
                <Button
                  style={{ width: "83%", height: "100%" }}
                  variant="contained"
                  onClick={handelclickbutton}
                  disabled={titleinput.length === 0}
                >
                  اضافة
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
