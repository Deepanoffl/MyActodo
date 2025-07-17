import { useState } from "react";

const AddTodoForm = ({ activityArr, setActivityArr }) => {
  const [newactivity, setNewactivity] = useState("");

  function addActivity() {
    if (newactivity.trim()) {
      setActivityArr([
        ...activityArr,
        { id: activityArr.length + 1, activity: newactivity.trim() },
      ]);
      setNewactivity("");
    } else {
      alert("Please enter an activity!");
    }
  }

  return (
    <div className="flex flex-col gap-3 flex-1">
      <h2 className="text-xl font-medium text-white">➕ Add Activity</h2>
      <input
        value={newactivity}
        onChange={(e) => setNewactivity(e.target.value)}
        type="text"
        placeholder="What's next?"
        className="p-2 border border-gray-300 text-white rounded"
      />
      <button
        onClick={addActivity}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodoForm;
