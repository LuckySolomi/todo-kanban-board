import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIssues, fetchRepoDetails } from "../../store/taskSlice";
import Button from "../../Shared/Components/Button/Button";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./Header.module.css";

function Header() {
  const [repoUrl, setRepoUrl] = useState("");
  const dispatch = useDispatch();
  const stars = useSelector((state) => state.tasks.stars);

  const handleLoad = () => {
    if (!repoUrl.startsWith("https://github.com/")) {
      alert("Invalid GitHub repository URL!");
      return;
    }
    const repoPath = repoUrl
      .replace("https://github.com/", "")
      .split("/")
      .slice(0, 2)
      .join("/");

    dispatch(fetchIssues(repoPath));
    dispatch(fetchRepoDetails(repoPath));
    setRepoUrl("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLoad();
    }
  };

  const [history, setHistory] = useState(["Facebook", "React"]);

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
        <div className={styles.starContainer}>
          <StarIcon
            style={{
              width: "16px",
              height: "16px",
              marginRight: "5px",
              color: "orange",
            }}
          />
          <span className={styles.starContainer}>
            {stars.toLocaleString()} stars
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
