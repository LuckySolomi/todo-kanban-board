import Button from "../../Shared/Components/Button/Button";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.contentContainer}>
        <input
          className={styles.headerInput}
          placeholder="Enter repo URL"
        ></input>
        <Button variant="primary" className={styles.headerButton}>
          Load issues
        </Button>
      </div>
    </div>
  );
}

export default Header;
