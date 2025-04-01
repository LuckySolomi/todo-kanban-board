import { useDrag } from "react-dnd";
import styles from "./TaskCard.module.css";

function TaskCard({ id, title, created_at, user, comments, number, column }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id, column },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  function formatDate(created_at) {
    const createdDate = new Date(created_at);
    const now = new Date();

    const diffInMs = now - createdDate;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) return "just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    return `${diffInDays} days ago`;
  }

  const username = user?.login || "Guest";

  return (
    <div
      ref={drag}
      className={styles.taskCard}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <h2>{title || "Untitled Task"}</h2>
      <div className={styles.amountFrequencyContainer}>
        <span className={styles.numberContainer}>#{number}</span>
        <p>opened{formatDate(created_at)} days ago</p>
      </div>
      <p>
        {username} | Comments: {comments || "0"}
      </p>
    </div>
  );
}

export default TaskCard;
