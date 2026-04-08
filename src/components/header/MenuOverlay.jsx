import styles from "./MenuOverlay.module.css";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import x from "../../assets/x.png";

export default function MenuOverlay({ open, setOpen }) {
  return (
    <div className={`${styles.overlay} ${open ? styles.show : ""}`}>
        <div className={styles.dotMatrix}>
      

      {/* MAIN CONTENT */}
      <div className={styles.content}>
        
        {/* LEFT MENU */}
        <div className={styles.menu}>
          {["Home","About","Gallery","Team","Analytics","Contact"].map((item,i)=>(
            <div key={i} className={styles.item}>
              <span className={styles.num}>
                {String(i+1).padStart(2,"0")}
              </span>
              <div className={styles.itemText}>{item}</div>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className={styles.right}>
          <div>
            <h4>Connect</h4>
            <div className={styles.icons}>
              <span><img src={instagram} alt="Instagram" /></span>
              <span><img src={x} alt="X" /></span>
              <span><img src={youtube} alt="YouTube" /></span>
              <span><img src={linkedin} alt="LinkedIn" /></span>
            </div>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <p>bhudeokrit@gmail.com</p>
          </div>

          <button className={styles.cta}>Contact Us →</button>
        </div>

      </div>
      </div>
    </div>
  );
}