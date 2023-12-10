import { createContext, useContext, useState } from "react";
import Mysnackbar from "../components/Mysnackbar";

export let Tostcontext = createContext();

export const Tostprovider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [msandkin, setmsandkin] = useState({ ms: "", kind: "" });

  function showtost(ms, kind) {
    const tost = { ms, kind };
    setmsandkin(tost);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1500);
  }
  return (
    <Tostcontext.Provider value={{ showtost }}>
      <Mysnackbar open={open} tost={msandkin} />
      {children}
    </Tostcontext.Provider>
  );
};
export const useTost = () => {
  return useContext(Tostcontext);
};
