import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchIssues } from "../../store/taskSlice";
import Button from "../../Shared/Components/Button/Button";
import styles from "./Header.module.css";

function Header() {
  const [repoUrl, setRepoUrl] = useState("");
  const dispatch = useDispatch();

  const handleLoad = () => {
    if (!repoUrl.startsWith("https://github.com/")) {
      alert("Invalid GitHub repository URL!");
      return;
    }
    const repoPath = repoUrl.replace("https://github.com/", "");

    dispatch(fetchIssues(repoPath));
    setRepoUrl("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLoad();
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.contentContainer}>
        <input
          className={styles.headerInput}
          placeholder="Enter repo URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <Button
          variant="primary"
          className={styles.headerButton}
          onClick={handleLoad}
        >
          Load issues
        </Button>
      </div>
    </div>
  );
}

export default Header;
