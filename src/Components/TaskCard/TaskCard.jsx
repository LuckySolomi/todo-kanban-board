import styles from "./TaskCard.module.css";

function TaskCard() {
  return (
    <div className={styles.card}>
      <h2>title</h2>
      <div className={styles.amountFrequencyContainer}>
        <p>#1</p>
        <p>opened 3 days ago</p>
      </div>

      <p>admin | Coments: 3</p>
    </div>
  );
}

export default TaskCard;
