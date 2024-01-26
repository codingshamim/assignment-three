import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskBody from "./TaskBody";
import TaskHead from "./TaskHead";

export default function TaskList() {
  const { tasks, searchValue: searchTerm } = useContext(TaskContext);
  // filter the tasks
  const filteredResult = tasks.filter((result) =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // initial tasklist
  let taskList = "";
  // if no task availible
  if (tasks.length === 0) {
    taskList = (
      <div className="text-3xl text-center font-bold ">Task List is empty!</div>
    );
  } else if (filteredResult.length === 0) {
    // if no task found when search something
    taskList = (
      <div className="text-4xl text-center font-bold ">No Match Found!</div>
    );
  } else {
    taskList = (
      <table className="table-fixed overflow-auto xl:w-full">
        <TaskHead />
        {filteredResult.map((task) => (
          <TaskBody key={task.id} {...task} />
        ))}
      </table>
    );
  }
  return <>{taskList}</>;
}
