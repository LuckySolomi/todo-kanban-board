import { useDrop } from "react-dnd";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./Column.module.css";

function Column({ title, tasks, onDropTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => onDropTask(item.id, title),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={styles.column}>
      <h1>{title}</h1>
      <div
        className={styles.columnContainer}
        style={{ backgroundColor: isOver ? "#e7eaed" : "#d8dbdd" }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} id={task.id} cardTitle={task.cardTitle} />
        ))}
      </div>
    </div>
  );
}

export default Column;
