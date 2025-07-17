import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

const TodoItem = (props) => {
  const activityArr = props.activityArr;
  const setActivityArr = props.setActivityArr;

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.activity);

  function handleDelete(deleteid) {
    var temparr = activityArr.filter(function (item) {
      return item.id !== deleteid;
    });
    setActivityArr(temparr);
  }

  const handleUpdate = () => {
    if (editedText.trim() === "") {
      alert("Activity can't be empty");
      return;
    }
    const updatedArr = activityArr.map((item) =>
      item.id === props.id ? { ...item, activity: editedText } : item
    );
    setActivityArr(updatedArr);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-indigo-50 shadow-sm rounded-md p-3 mb-2 hover:shadow-md transition duration-300">
      {isEditing ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
          autoFocus
          className="flex-grow border border-gray-300 px-2 py-1 rounded text-gray-800 font-medium outline-none"
        />
      ) : (
        <p className="text-gray-800 font-medium capitalize">
          {props.index + 1}. {props.activity}
        </p>
      )}

      <div className="flex gap-3">
        <button
          className="text-blue-600 hover:text-white bg-blue-100 hover:bg-blue-600 p-1 rounded-md transition duration-300 shadow-sm"
          aria-label="Edit"
          onClick={() => setIsEditing(true)}
        >
          <MdEdit />
        </button>
        <button
          className="text-red-500 hover:text-red-700 transition duration-200"
          onClick={() => handleDelete(props.id)}
        >
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
