import styles from "./Breadcrumbs.module.css";

function Breadcrumbs({ owner, repo, onNavigate }) {
  return (
    <nav className={styles.breadcrumbs}>
      <span className={styles.breadcrumbPart} onClick={() => onNavigate(owner)}>
        {owner}
      </span>{" "}
      {" > "}
      <span className={styles.breadcrumbPart} onClick={() => onNavigate(repo)}>
        {repo}
      </span>
    </nav>
  );
}

export default Breadcrumbs;
