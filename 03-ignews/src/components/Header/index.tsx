import styles from "./styles.module.scss";
import Image from "next/image";
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width={110} height={32} />

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
