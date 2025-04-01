import { useDispatch } from "react-redux";
import { useState } from "react";
import { useDrag } from "react-dnd";
import styles from "./TaskCard.module.css";

function TaskCard({ id, cardTitle, column }) {
  const dispatch = useDispatch();
  const [starred, setStarred] = useState(false);
  const [stars, setStars] = useState(0);

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
