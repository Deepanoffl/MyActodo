import { createContext } from "react";
import { useState } from "react";

export const MyTodoContext = createContext();
const TodoContext = ({ children }) => {
  const [users, setUsers] = useState([{ username: "deepan", password: "123" }]);
  const [userName, setUserName] = useState(() => {
    const loadUserName = localStorage.getItem("userName");
    return loadUserName ? loadUserName : "";
  });
  return (
    <MyTodoContext.Provider value={{ users, setUsers, userName, setUserName }}>
      {children}
    </MyTodoContext.Provider>
  );
};

export default TodoContext;
