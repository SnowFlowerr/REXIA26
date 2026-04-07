import styles from "./Home.module.css";
import bg from "../../assets/bg.jpg";

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay}></div>

      <h1 className={styles.title}>REXIA26</h1>
      <p className={styles.subtitle}>ARCHITECTING INNOVATION</p>
    </div>
  );
}