import { useState } from "react";
import styles from "./Header.module.css";
import MenuOverlay from "./MenuOverlay";
import logo from "../../assets/whiteLogo.png";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.logo}><img src={logo} alt="Logo" width={"120px"}/></div>
                </div>

                <button className={styles.menuBtn} onClick={() => open?setOpen(false):setOpen(true)}>
                    {open?"Close":"Menu"}
                    <span className={styles.icon}>{open?"✕":"≡"}</span>
                </button>

            </header>

            <MenuOverlay open={open} setOpen={setOpen} />
        </>
    );
}