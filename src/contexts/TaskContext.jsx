import { createContext, useReducer, useState } from "react";
import taskReducer from "../reducers/taskReducer";
export const TaskContext = createContext(null);
const initialState = [];

export default function TasksProvider({ children }) {
  // Task Reducer
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  // Application All State Manage Here
  const [searchValue, setSearchValue] = useState(""); // for getting search input filed value
  const [modal, setModal] = useState(false); // for toggle modal
  const [editTask, setEditTask] = useState(null); // for edit task

  const taskManagement = {
    tasks,
    dispatch,
    searchValue,
    setSearchValue,
    modal,
    setModal,
    editTask,
    setEditTask,
  };
  return (
    <TaskContext.Provider value={taskManagement}>
      {children}
    </TaskContext.Provider>
  );
}
