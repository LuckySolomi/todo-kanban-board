import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
