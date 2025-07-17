import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoContainer = () => {
  const [activityArr, setActivityArr] = useState([
    { id: 1, activity: "Go for a walk" },
    { id: 2, activity: "Have Breakfast" },
    { id: 3, activity: "Take a shower" },
  ]);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
      <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
    </div>
  );
};

export default TodoContainer;
