import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../contexts/TaskContext";
import { randomId } from "../utils/randomId";

export default function Modal() {
  const { setModal, editTask, setEditTask } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState(
    editTask || {
      id: randomId(),
      title: "",
      description: "",
      tags: [],
      priority: "",
    }
  );

  const { dispatch } = useContext(TaskContext);
  // Handle Change Input Value
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTaskInput({
      ...taskInput,
      [name]: value,
    });
  }
  // create new task
  function createTask() {
    if (
      taskInput.title === "" ||
      taskInput.description === "" ||
      taskInput.tags.length === 0 ||
      taskInput.priority === ""
    ) {
      toast.error("All Field Are Required!");
    } else {
      // create new task
      dispatch({
        type: "create_new_task",
        taskItem: taskInput,
      });
      setModal(false);
      toast.success("New Task Created Successfully!");
    }
  }
  // update task
  function updateTask() {
    if (
      taskInput.title === "" ||
      taskInput.description === "" ||
      taskInput.tags.length === 0 ||
      taskInput.priority === ""
    ) {
      toast.error("All Field Are Required!");
    } else {
      // update taks
      dispatch({
        type: "update_task",
        taskItem: taskInput,
      });
      setModal(false);
      toast.success("Task Updated Successfully!");
      setEditTask(null);
    }
  }

  return (
    <>
      <div className="bg-[rgba(0,0,0,0.5)] flex  justify-center items-center top-0 left-0 fixed w-full z-50 h-screen">
        <div className=" bg-[#191D26] rounded-xl border border-[#FEFBFB]/[36%]  p-9 max-md:px-4 w-full max-w-[600px] lg:p-11 ">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {editTask ? "Update Task " : "Add New Task"}
          </h2>

          {/* inputs */}
          <div className="space-y-9 text-white lg:space-y-3">
            {/* title  */}
            <div className="space-y-2 lg:space-y-2">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                required
                value={taskInput.title}
                onChange={handleChange}
              />
            </div>
            {/* description  */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                value={taskInput.description}
                required
                onChange={handleChange}
              ></textarea>
            </div>
            {/* input group  */}
            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              {/* tags  */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  value={taskInput.tags}
                  required
                  onChange={handleChange}
                />
              </div>
              {/* piority  */}
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  value={taskInput.priority}
                  required
                  onChange={handleChange}
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          {/* Input ends  */}
          <div className="mt-16 flex justify-center lg:mt-5 gap-5">
            <button
              type="button"
              className="rounded bg-[crimson] px-4 py-2 text-white transition-all hover:opacity-80"
              onClick={() => {
                setModal(false);
                setEditTask(null);
              }}
            >
              Close
            </button>
            {editTask ? (
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                onClick={updateTask}
              >
                Update Task
              </button>
            ) : (
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                onClick={createTask}
              >
                Create New Task
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
