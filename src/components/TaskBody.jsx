import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Tag from "./Tag";
export default function TaskBody(task) {
  const tags = task.tags;
  const { setEditTask, setModal, dispatch } = useContext(TaskContext);
  return (
    <tbody>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td
          className="cursor-pointer"
          onClick={() => {
            dispatch({ type: "toggle_fav", taskId: task.id });
          }}
        >
          {task.isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-star"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="yellow"
              fill="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-star"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          )}
        </td>
        <td>{task.title}</td>
        <td>
          <div>{task.description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag}></Tag>
            ))}
          </ul>
        </td>
        <td className="text-center">{task.priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="text-red-500"
              onClick={() => {
                const isConfirm = window.confirm(
                  `Are you sure you want to delete the task ' "${task.title}" `
                );
                if (isConfirm) {
                  dispatch({
                    type: "delete_once",
                    taskId: task.id,
                  });
                  toast.success("Task Deleted Successfully!");
                }
              }}
            >
              Delete
            </button>
            <button
              className="text-blue-500"
              onClick={() => {
                setEditTask(task);
                setModal(true);
              }}
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
