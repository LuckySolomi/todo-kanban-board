import TaskCard from "../TaskCard/TaskCard";
import styles from "./Column.module.css";

function Column({ title }) {
  return (
    <div className={styles.column}>
      <h1>{title}</h1>
      <div className={styles.columnContainer}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
}

export default Column;
