import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyTodoContext } from "../../Context/TodoContext";
import { useContext } from "react";

const Header = () => {
  const { userName } = useContext(MyTodoContext);

  return (
 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 w-full text-white">
  <div>
    <h1 className="text-2xl md:text-3xl capitalize font-semibold ">
      Hello {userName} 👋
    </h1>
    <p className="">Manage your day with clarity and focus</p>
  </div>
  <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end">
    <Link
      to="/"
      className="flex items-center gap-2  px-4 py-2 rounded-md shadow border transition duration-300 text-sm font-medium"
    >
      <FaSignOutAlt /> Log Out
    </Link>
  </div>
</div>


  );
};

export default Header;
