import { createContext, useReducer, useState } from "react";
import taskReducer from "../reducers/taskReducer";
export const TaskContext = createContext(null);
const initialState = [
  {
    id: 1,
    title: "Complete Project Proposal",
    description:
      "Write and finalize the project proposal document for upcoming client meeting.",
    tags: ["work", "deadline", "client"],
    priority: "high",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Grocery Shopping",
    description:
      "Buy groceries for the week including fruits, vegetables, and household items.",
    tags: ["personal", "groceries"],
    priority: "medium",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Exercise Routine",
    description:
      "Follow the daily exercise routine, including cardio and strength training.",
    tags: ["personal", "health"],
    priority: "low",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Read Book Chapter",
    description:
      "Read and summarize the next chapter of the book for the book club discussion.",
    tags: ["personal", "reading", "book club"],
    priority: "medium",
    isFavorite: false,
  },
];

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
