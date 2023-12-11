import { createContext, useReducer, useContext } from "react";
import TodosReducers from "../reducers/Todolistderusers";

const todocontex = createContext([]);
const TodosProvider = ({ children }) => {
  const [to, dispatch] = useReducer(TodosReducers, []);
  return (
    <todocontex.Provider value={{ to, dispatch }}>
      {children}
    </todocontex.Provider>
  );
};
export let Listcontex = createContext([]);
export default TodosProvider;
export const Todosconred = () => {
  return useContext(todocontex);
};
