import { useDrag } from "react-dnd";
import styles from "./TaskCard.module.css";

function TaskCard({ id, column }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={styles.taskCard}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h2>issue.title</h2>
      <div className={styles.amountFrequencyContainer}>
        <span>#1</span>
        <p>opened 3 days ago</p>
      </div>

      <p>admin | Coments: 3</p>
    </div>
  );
}

export default TaskCard;
