import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Modal from "./Modal";
import TaskBoardHeader from "./TaskBoardHeader";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const { modal } = useContext(TaskContext);

  return (
    <>
      <section className="mb-20">
        {modal && <Modal />}
        <div className="container mx-auto">
          {/* Search Box End */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* task board header start  */}
            <TaskBoardHeader />
            {/* task board header end  */}
            <div className="overflow-auto">
              {/* Task list start  */}
              <TaskList />
              {/* Task list end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
