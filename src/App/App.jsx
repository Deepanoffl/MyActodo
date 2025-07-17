import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoContext from "../Context/TodoContext";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import ForgetPassword from "../Components/ForgetPassword";
import Landing from "../Components/Landing";

const App = () => {
  return (
    <TodoContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </TodoContext>
  );
};

export default App;
