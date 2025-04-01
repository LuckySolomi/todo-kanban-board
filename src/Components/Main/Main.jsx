import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../Column/Column";
import styles from "./Main.module.css";

function Main() {
  const tasks = useSelector((state) => state.tasks.items);

  function handleDropTask(taskId, newColumn) {
    dispatch(updateTaskPosition({ id: taskId, column: newColumn }));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.main}>
        <div className={styles.columnContainer}>
          {["ToDo", "In Progress", "Done"].map((title) => (
            <Column
              key={title}
              title={title}
              tasks={tasks.filter((task) => task.column === title)}
              onDropTask={handleDropTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}

export default Main;
