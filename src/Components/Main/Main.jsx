import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../Column/Column";
import styles from "./Main.module.css";

const initialTasks = [
  { id: 1, cardTitle: "Task 1", column: "ToDo" },
  { id: 2, cardTitle: "Task 2", column: "ToDo" },
  { id: 3, cardTitle: "Task 3", column: "In Progress" },
];

function Main() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDropTask = (taskId, newColumn) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, column: newColumn } : task
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.main}>
        <div className={styles.columnContainer}>
          {["ToDo", "In Progress", "Done"].map((columnTitle) => (
            <Column
              key={columnTitle}
              title={columnTitle}
              tasks={tasks.filter((task) => task.column === columnTitle)}
              onDropTask={handleDropTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default Main;
