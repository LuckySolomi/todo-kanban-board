import { useDrag } from "react-dnd";
import styles from "./TaskCard.module.css";

function TaskCard({ id, cardTitle }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id },
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
      <h2>{cardTitle}</h2>
      <div className={styles.amountFrequencyContainer}>
        <p>#1</p>
        <p>opened 3 days ago</p>
      </div>

      <p>admin | Coments: 3</p>
    </div>
  );
}

export default TaskCard;
