import { useState } from "react";
import styles from "./Header.module.css";
import MenuOverlay from "./MenuOverlay.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
          <span className={styles.brand}>Neutron</span>
        </div>

        <button className={styles.menuBtn} onClick={() => setOpen(true)}>
          <span>Menu</span>
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <MenuOverlay open={open} setOpen={setOpen} />
    </>
  );
}