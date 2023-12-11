import { v4 as idtodo } from "uuid";

export default function TodosReducers(curent, action) {
  switch (action.type) {
    case "added": {
      const newtodo = {
        id: idtodo(),
        title: action.p.title,
        body: "",
        iscompleted: false,
      };
      let add = [...curent, newtodo];
      localStorage.setItem("todos", JSON.stringify(add));
      return add;
    }
    case "useeffect": {
      let todolis = JSON.parse(localStorage.getItem("todos")) ?? [];
      return todolis;
    }
    case "deleted": {
      const newarry = curent.filter((tt) => {
        return tt.id !== action.p.v.id;
      });
      localStorage.setItem("todos", JSON.stringify(newarry));
      return newarry;
    }
    case "updata": {
      let newupdate = curent.map((tt) => {
        if (tt.id === action.p.v.id) {
          return { ...tt, title: action.p.v.title, body: action.p.v.body };
        }
        return tt;
      });
      localStorage.setItem("todos", JSON.stringify(newupdate));
      return newupdate;
    }
    case "commplite": {
      const newa = curent.map((tt) => {
        if (action.p.id === tt.id) {
          let up = { ...tt, iscompleted: !tt.iscompleted };
          return up;
        }
        return tt;
      });

      localStorage.setItem("todos", JSON.stringify(newa));
      return newa;
    }
    default: {
      throw Error("unknown action " + action.type);
    }
  }
}
