import { useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const titleRef = useRef(null);

  // Blinking cursor effect
  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <div className={styles.dotMatrix} />


      {/* Hero heading */}
      <div className={styles.heroWrap}>
        <h1 className={styles.hero} ref={titleRef}>
          Interested in talking,
          <br />
          let's do it.
          <span className={`${styles.cursor} ${cursorVisible ? styles.cursorOn : ""}`}>|</span>
        </h1>
      </div>

      {/* Main content */}
      <div className={styles.contentGrid}>
        {/* Left — form */}
        <div className={styles.formCol}>
          {submitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>✓</div>
              <p className={styles.successText}>Message sent! We'll get back to you soon.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldWrap}>
                <input
                  className={styles.field}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.fieldWrap}>
                <input
                  className={styles.field}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.fieldWrap}>
                <input
                  className={styles.field}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldWrap}>
                <textarea
                  className={`${styles.field} ${styles.textarea}`}
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message
                <span className={styles.btnArrow}>→</span>
              </button>
            </form>
          )}
        </div>

        {/* Right — info cards */}
        <div className={styles.infoCol}>
          {/* Email card */}
          <div className={styles.infoCard}>
            <p className={styles.cardLabel}>EMAIL</p>
            <a
              href="mailto:bhudeokrit@gmail.com"
              className={styles.emailLink}
            >
              bhudeokrit@gmail.com
            </a>
          </div>

          {/* Connect card */}
          <div className={styles.infoCard}>
            <p className={styles.cardLabel}>CONNECT</p>
            <div className={styles.socialRow}>
              <a href="https://instagram.com" className={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
                </svg>
                Instagram
              </a>
              <a href="https://instagram.com" className={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.738-8.835L1.254 2.25H8.08l4.252 5.622L18.244 2.25z" fill="white"/>
                </svg>
                X
              </a>
              <a href="https://instagram.com" className={styles.socialBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="white" strokeWidth="2" fill="none"/>
                  <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Availability card */}
          <div className={styles.infoCard}>
            <p className={styles.availRow}>
              <span className={styles.availDot} />
              <strong>Available for collaborations</strong>
            </p>
            <p className={styles.availDesc}>
              Open to partnerships, sponsorships, and exciting tech event opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}