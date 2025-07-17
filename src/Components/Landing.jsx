import Header from "./Todos/Header";
import Card from "./Todos/Card";
import TodoContainer from "./Todos/TodoContainer";
import { useEffect, useState } from "react";

const Landing = () => {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
  const monthName = new Date().toLocaleString("default", { month: "long" });
  const dateOnly = new Date().getDate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto dark:bg-gray-700 text-white shadow-xl rounded-xl p-8">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card title={dateOnly} subtitle="CHENNAI" />
          <Card title={monthName} subtitle={timeNow} />
          <Card title="Built Using" subtitle=" REACT" />
        </div>
        <div className="mt-10">
          <TodoContainer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
