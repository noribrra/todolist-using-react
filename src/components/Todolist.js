import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useState, useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import { Button, Divider, Grid } from "@mui/material";
import Todo from "./Todo";
import { v4 as idtodo } from "uuid";
import { Listcontex } from "../context/Listcontext";

export default function Todolist() {
  const { to, setto } = useContext(Listcontex);
  const [typec, settypec] = useState("all");
  const [titleinput, settiltleinput] = useState("");

  // filter for iscomplit and not complit
  const iscomplit = to.filter((tt) => {
    return tt.iscompleted;
  });

  const notcomplet = to.filter((tt) => {
    return !tt.iscompleted;
  });
  let toberender = to;
  if (typec === "complet") {
    toberender = iscomplit;
  } else if (typec === "notcomplet") {
    toberender = notcomplet;
  } else {
    toberender = to;
  }

  const todos = toberender.map((t) => {
    return <Todo t={t} key={t.id}></Todo>;
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
  }
  function changtype(e) {
    settypec(e.target.value);
  }

  // return
  return (
    <>
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
                  disabled={titleinput.length == 0}
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
