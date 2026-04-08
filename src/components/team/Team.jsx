import React from "react";
import styles from "./Team.module.css";

// Placeholder student cards — replace src with real photo URLs
const STUDENTS = [
  { id: 1, name: "Arjun Sharma", role: "Lead Organiser", src: "" },
  { id: 2, name: "Rohan Mehta", role: "Tech Head", src: "" },
  { id: 3, name: "Karan Singh", role: "Design Lead", src: "" },
  { id: 4, name: "Aditya Verma", role: "Logistics", src: "" },
  { id: 5, name: "Priya Nair", role: "Marketing", src: "" },
  { id: 6, name: "Sahil Gupta", role: "Sponsorship", src: "" },
  { id: 7, name: "Neha Joshi", role: "Content Head", src: "" },
  { id: 8, name: "Vikram Das", role: "Operations", src: "" },
];

// Duplicate for seamless infinite loop
const TRACK = [...STUDENTS, ...STUDENTS];

function StudentCard({ student }) {
  return (
    <div className={styles.card}>
      <div className={styles.photoWrap}>
        {student.src ? (
          <img src={student.src} alt={student.name} className={styles.photo} />
        ) : (
          <div className={styles.photoPlaceholder}>
            <svg viewBox="0 0 80 80" fill="none" className={styles.placeholderSvg}>
              <circle cx="40" cy="30" r="18" fill="rgba(255,255,255,0.15)" />
              <ellipse cx="40" cy="72" rx="28" ry="18" fill="rgba(255,255,255,0.1)" />
            </svg>
            <span className={styles.placeholderInitial}>
              {student.name.charAt(0)}
            </span>
          </div>
        )}
        <div className={styles.overlay}>
          <p className={styles.cardName}>{student.name}</p>
          <p className={styles.cardRole}>{student.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className={styles.page}>
      <div className={styles.dotMatrix} />


      {/* Hero text */}
      <div className={styles.heroWrap}>
        <h1 className={styles.hero}>
          Students who made it
          <br />
          possible
        </h1>
        <p className={styles.sub}>
          All the tech events were imagined, organised, and led entirely by PST students
        </p>
        <div className={styles.accentDot} />
      </div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        {/* Edge fades */}
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />

        <div className={styles.track}>
          {TRACK.map((student, i) => (
            <StudentCard key={`${student.id}-${i}`} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}