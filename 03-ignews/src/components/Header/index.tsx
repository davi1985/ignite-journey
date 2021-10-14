import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Post</a>
        </nav>
      </div>
    </header>
  );
};
