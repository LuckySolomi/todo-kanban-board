import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchIssues } from "../../store/taskSlice";
import Button from "../../Shared/Components/Button/Button";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
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

  const [history, setHistory] = useState(["facebook", "react"]);

  const handleNavigate = (target) => {
    const updatedHistory = history.includes(target)
      ? history.slice(0, history.indexOf(target) + 1)
      : [...history, target];
    setHistory(updatedHistory);
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
      <div className={styles.breadcrumbContainer}>
        <Breadcrumbs
          owner={history[0]}
          repo={history[1]}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}

export default Header;
