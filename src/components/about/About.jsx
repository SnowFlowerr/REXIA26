import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

const offerings = [
  {
    id: "01",
    tag: "TITANS CUP",
    title: "TITANS CUP",
    desc: "High-intensity build sprints where ideas collide with execution. Ship fast, think faster.",
  },
  {
    id: "02",
    tag: "EUPHORIA CUP",
    title: "EUPHORIA CUP",
    desc: "Guided deep-dives into advanced architectures, led by industry architects and pioneers.",
  },
  {
    id: "03",
    tag: "TECHNOA CUP",
    title: "TECHNOA CUP",
    desc: "Battle-tested arenas for elite engineers to prove dominance and claim recognition.",
  },

];

export default function About() {
  const [activeCard, setActiveCard] = useState(1);
  const sectionRef = useRef(null);

  // Auto-cycle cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % offerings.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.page}>
      {/* <div className={styles.dotMatrix}> */}

      {/* ── HERO SECTION ── */}
      <section className={styles.hero}>
        <div className={styles.heroBgText} aria-hidden="true">
          REXIA26
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>/ ABOUT US</p>
          <h1 className={styles.heroHeading}>
            <span className={styles.heroLine1}>ARCHITECTING</span>
            <span className={styles.heroLine2}>INNOVATION</span>
            <span className={styles.heroLine3}>TOGETHER</span>
          </h1>
          <div className={styles.heroBody}>
            <div className={styles.heroLeft}>
              <p>
                REXIA26 is a catalyst. We bridge the gap between academic
                theory and industrial impact through intense engineering.
              </p>
            </div>
            <div className={styles.heroRight}>
              <p>
                We foster an environment where elite developers and technical
                architects converge to deconstruct and rebuild the global
                digital infrastructure.
              </p>
              <div className={styles.heroDivider} />
            </div>
          </div>
        </div>
      </section>
      {/* <div/> */}

      {/* ── OFFERINGS SECTION ── */}
      <section className={styles.offerings} ref={sectionRef}>
        <div className={styles.offeringsBgText} aria-hidden="true">
          REDEFINING <br />BOUNDARIES
        </div>

        <div className={styles.offeringsLayout}>
          {/* Left column */}
          <div className={styles.offeringsLeft}>
            <p className={styles.sectionEyebrow}>/ WHAT WE DO</p>
            <h2 className={styles.offeringsHeading}>
              <span>MULTIPLE</span>
              <span>TYPES</span>
              <span className={styles.dimText}>OF</span>
              <span className={styles.dimText}>OFFERINGS</span>
            </h2>
            <p className={styles.offeringsSubtext}>
              Speed up your innovation with these tools for elite generation.
            </p>
          </div>

          {/* Cards stack */}
          <div className={styles.cardsWrap}>
            {offerings.map((item, i) => {
              const offset = i - activeCard;
              return (
                <div
                  key={item.id}
                  className={`${styles.card} ${i === activeCard ? styles.cardActive : ""}`}
                  style={{
                    "--offset": offset,
                    zIndex: offerings.length - Math.abs(offset),
                    transform: `translateX(${offset * 48}px) translateY(${Math.abs(offset) * 12}px) scale(${1 - Math.abs(offset) * 0.06})`,
                    opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.3,
                  }}
                  onClick={() => setActiveCard(i)}
                >
                  <span className={styles.cardNum}>/ {item.id}</span>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {offerings.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeCard ? styles.dotActive : ""}`}
              onClick={() => setActiveCard(i)}
              aria-label={`Offering ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      {/* <section className={styles.stats}>
        <div className={styles.statsBgText} aria-hidden="true">IMPACT</div>
        <div className={styles.statsGrid}>
          {[
            { num: "200+", label: "Engineers Trained" },
            { num: "40+", label: "Projects Shipped" },
            { num: "12", label: "Industry Partners" },
            { num: "3X", label: "Avg Career Growth" },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section> */}


    </div>
  );
}