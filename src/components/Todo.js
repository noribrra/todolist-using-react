import { Grid, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Listcontex } from "../context/Listcontext";
import { useTost } from "../context/Tostcontext";
// icons
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo({ t, opendelit, openedit }) {
  const { to, setto } = useContext(Listcontex);
  const { showtost } = useTost();

  // functions
  function click() {
    const newa = to.map((tt) => {
      if (t.id === tt.id) {
        t.iscompleted = !t.iscompleted;
      }
      return tt;
    });
    setto(newa);
    showtost(" تم تعديل بنجاح ", "info");
    localStorage.setItem("todos", JSON.stringify(newa));
  }

  function handleClickOpen() {
    opendelit(t);
  }
  function handleClickOpenup() {
    openedit(t);
  }

  // return
  return (
    <>
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
