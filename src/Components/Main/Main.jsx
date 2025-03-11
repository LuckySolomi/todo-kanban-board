import Column from "../Column/Column";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.columnContainer}>
        <Column title="ToDo" />
        <Column title="In Progress" />
        <Column title="Done" />
      </div>
    </div>
  );
}

export default Main;
