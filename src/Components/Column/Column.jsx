import { useDispatch } from "react-redux";
import { updateTaskPosition } from "../../store/taskSlice";
import { useDrop } from "react-dnd";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./Column.module.css";

function Column({ title, tasks }) {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item) =>
      dispatch(updateTaskPosition({ id: item.id, column: title })),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={styles.column}>
      <h1>{title}</h1>
      <div
        className={styles.columnContainer}
        style={{ backgroundColor: isOver ? "#e7eaed" : "#d8dbdd" }}
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} id={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
