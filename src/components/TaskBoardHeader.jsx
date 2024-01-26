import { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../contexts/TaskContext";

export default function TaskBoardHeader() {
  const { tasks, setModal, dispatch, searchValue, setSearchValue } =
    useContext(TaskContext);

  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex">
              <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                <input
                  type="search"
                  className={`${
                    tasks.length === 0 ? "bg-gray-300" : "bg-gray-800"
                  } z-20 block w-full  px-4 py-2 pr-10 focus:outline-none`}
                  placeholder="Search Task"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  disabled={tasks.length === 0}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                >
                  <svg
                    className="h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={() => setModal(true)}
          >
            Add Task
          </button>
          <button
            className={`rounded-md ${
              tasks.length === 0 ? "bg-gray-400" : "bg-red-500"
            } px-3.5 py-2.5 text-sm font-semibold`}
            onClick={() => {
              const isDelete = window.confirm(
                "Are You Sure To Delete All Task ?"
              );
              if (isDelete) {
                dispatch({
                  type: "delete_all_task",
                });
                toast.success("All Task Deleted Successfully!");
              }
            }}
            disabled={tasks.length === 0}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
}
