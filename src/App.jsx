import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";
import TasksProvider from "./contexts/TaskContext";

export default function App() {
  return (
    <>
      <TasksProvider>
        <ToastContainer />
        <div className="bg-[#191D26] font-[Inter] text-white ">
          <Navbar />
          <Hero />
          <TaskBoard />
          <Footer />
        </div>
      </TasksProvider>
    </>
  );
}
