import TodoItem from "./TodoItem";

const TodoList = ({ activityArr, setActivityArr }) => {
  return (
    <div className="bg-white rounded-xl p-5 flex-1 max-h-[350px] overflow-y-auto shadow-inner">
      <h2 className="text-xl font-semibold mb-3 text-indigo-800">
        📋 Your Tasks
      </h2>
      {activityArr.length === 0 ? (
        <p className="text-gray-600">No activities yet!</p>
      ) : (
        activityArr.map((item, index) => (
          <TodoItem
            key={item.id}
            id={item.id}
            index={index}
            activity={item.activity}
            activityArr={activityArr}
            setActivityArr={setActivityArr}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
