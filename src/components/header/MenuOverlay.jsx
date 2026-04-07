import styles from "./MenuOverlay.module.css";

export default function MenuOverlay({ open, setOpen }) {
  return (
    <div className={`${styles.overlay} ${open ? styles.show : ""}`}>
      
      {/* Close button */}
      <button className={styles.close} onClick={() => setOpen(false)}>
        ✕
      </button>

      <div className={styles.content}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          {["Home", "About", "Gallery", "Team", "Analytics", "Contact"].map(
            (item, i) => (
              <div key={i} className={styles.navItem}>
                <span className={styles.number}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h1>{item}</h1>
              </div>
            )
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div>
            <h3>Connect</h3>
            <div className={styles.icons}>
              <span>IG</span>
              <span>X</span>
              <span>YT</span>
              <span>IN</span>
            </div>
          </div>

          <div className={styles.contact}>
            <h3>Get in Touch</h3>
            <p>neutronfest@nst.rishihood.edu.in</p>
          </div>

          <button className={styles.cta}>Contact Us →</button>
        </div>
      </div>
    </div>
  );
}