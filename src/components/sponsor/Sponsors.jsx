import { useState, useEffect, useCallback } from "react";
import styles from "./Sponsors.module.css";

const SPONSORS = [
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    dark: true,
    svg: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="55" stroke="white" strokeWidth="4" fill="none"/>
        <ellipse cx="60" cy="42" rx="28" ry="14" fill="white"/>
        <path d="M32 55 Q60 80 88 55" stroke="white" strokeWidth="3" fill="none"/>
        <text x="50%" y="78" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontWeight="bold">Pizza</text>
        <text x="50%" y="92" textAnchor="middle" fill="white" fontSize="11" fontFamily="serif" fontWeight="bold">Hut</text>
        <text x="50%" y="104" textAnchor="middle" fill="white" fontSize="7">™️</text>
      </svg>
    ),
  },
  {
    id: "stockgro",
    name: "StockGro",
    dark: true,
    svg: (
      <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,10 55,35 30,35" fill="#FF6B00"/>
        <polygon points="10,35 35,10 35,35" fill="#FF6B00"/>
        <polygon points="20,35 45,60 20,60" fill="#cc4400"/>
        <text x="65" y="45" fill="white" fontSize="26" fontFamily="sans-serif" fontWeight="bold">StockGro</text>
      </svg>
    ),
  },
  {
    id: "ramada",
    name: "Ramada by Wyndham",
    dark: true,
    svg: (
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="38" textAnchor="middle" fill="white" fontSize="28" fontFamily="Georgia, serif" letterSpacing="4">RAMADA</text>
        <text x="50%" y="58" textAnchor="middle" fill="white" fontSize="11" fontFamily="Georgia, serif" letterSpacing="2">BY WYNDHAM</text>
      </svg>
    ),
  },
  {
    id: "kronus",
    name: "Kronus",
    dark: true,
    svg: (
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="42" textAnchor="middle" fill="white" fontSize="32" fontFamily="Arial Black, sans-serif" letterSpacing="6">KRONUS</text>
        <line x1="10" y1="52" x2="210" y2="52" stroke="white" strokeWidth="1"/>
        <text x="50%" y="64" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" letterSpacing="1">INFRATECH &amp; CONSULTANTS FLTD</text>
      </svg>
    ),
  },
  {
    id: "blue-turtle",
    name: "Blue Turtle Entertainment",
    dark: false,
    svg: (
      <svg viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="90" fill="white"/>
        <ellipse cx="50" cy="45" rx="30" ry="22" fill="none" stroke="#1a1a2e" strokeWidth="3"/>
        <ellipse cx="50" cy="45" rx="18" ry="14" fill="#1a1a2e"/>
        <polygon points="30,30 20,20 25,32" fill="#1a1a2e"/>
        <polygon points="70,30 80,20 75,32" fill="#1a1a2e"/>
        <text x="92" y="38" fill="#1a1a2e" fontSize="15" fontFamily="Arial Black" fontWeight="900">BLUE</text>
        <text x="92" y="56" fill="#1a1a2e" fontSize="15" fontFamily="Arial Black" fontWeight="900">TURTLE</text>
        <text x="92" y="70" fill="#1a1a2e" fontSize="9" fontFamily="sans-serif">ENTERTAINMENT</text>
      </svg>
    ),
  },
  {
    id: "realme",
    name: "realme",
    dark: true,
    svg: (
      <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="48" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="36" fontFamily="Arial, sans-serif" fontWeight="300" letterSpacing="2">realme</text>
      </svg>
    ),
  },
  {
    id: "nestle",
    name: "Nestlé",
    dark: true,
    svg: (
      <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 20 C35 15 25 18 25 28 C25 36 33 38 40 35 C47 38 55 36 55 28 C55 18 45 15 40 20Z" fill="white"/>
        <circle cx="32" cy="22" r="3" fill="white"/>
        <circle cx="40" cy="18" r="3" fill="white"/>
        <circle cx="48" cy="22" r="3" fill="white"/>
        <text x="70" y="48" fill="white" fontSize="28" fontFamily="Georgia, serif" fontStyle="italic">Nestlé</text>
      </svg>
    ),
  },
  {
    id: "fastup",
    name: "Fast&Up",
    dark: true,
    svg: (
      <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="48" textAnchor="middle" fill="white" fontSize="34" fontFamily="Arial Black, sans-serif" fontWeight="900" fontStyle="italic" letterSpacing="1">FAST&amp;UP</text>
      </svg>
    ),
  },
  {
    id: "jimmys",
    name: "Jimmy's",
    dark: true,
    svg: (
      <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="44" textAnchor="middle" fill="white" fontSize="32" fontFamily="Arial Black, sans-serif" fontWeight="900" letterSpacing="2">JIMMY'S®️</text>
        <text x="50%" y="62" textAnchor="middle" fill="white" fontSize="12" fontFamily="Georgia, serif" fontStyle="italic">Finely Crafted</text>
      </svg>
    ),
  },
  {
    id: "snacks",
    name: "Snacks Junction Murthal",
    dark: false,
    svg: (
      <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="140" fill="white"/>
        <polygon points="70,5 135,35 135,105 70,135 5,105 5,35" fill="none" stroke="#003087" strokeWidth="4"/>
        <circle cx="70" cy="70" r="48" fill="#CC0000"/>
        <circle cx="70" cy="70" r="42" fill="none" stroke="white" strokeWidth="2"/>
        <text x="50%" y="55" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">मुरथल</text>
        <text x="50%" y="70" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold">SNACKS</text>
        <text x="50%" y="84" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="bold">JUNCTION</text>
        <text x="50%" y="98" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">MURTHAL</text>
      </svg>
    ),
  },
];

export default function SponsorsPage() {
  const [order, setOrder] = useState(SPONSORS.map((s) => s.id));
  const [swapping, setSwapping] = useState([]);
  const [locked, setLocked] = useState(false);

  const doSwap = useCallback(() => {
    if (locked) return;
    setLocked(true);

    // Pick two distinct random indices
    const idx1 = Math.floor(Math.random() * order.length);
    let idx2 = Math.floor(Math.random() * order.length);
    while (idx2 === idx1) idx2 = Math.floor(Math.random() * order.length);

    const id1 = order[idx1];
    const id2 = order[idx2];

    // Flash both cards
    setSwapping([id1, id2]);

    setTimeout(() => {
      // Actually swap positions
      setOrder((prev) => {
        const next = [...prev];
        const i = next.indexOf(id1);
        const j = next.indexOf(id2);
        [next[i], next[j]] = [next[j], next[i]];
        return next;
      });
      setSwapping([]);
      setLocked(false);
    }, 600);
  }, [order, locked]);

  useEffect(() => {
    const interval = setInterval(doSwap, 2200);
    return () => clearInterval(interval);
  }, [doSwap]);

  const sponsorMap = Object.fromEntries(SPONSORS.map((s) => [s.id, s]));

  return (
    <div className={styles.page}>
      <div className={styles.dotMatrix} />


      <h1 className={styles.title}>OUR SPONSORS</h1>

      <div className={styles.grid}>
        {order.map((id) => {
          const sponsor = sponsorMap[id];
          const isSwapping = swapping.includes(id);
          return (
            <div
              key={id}
              className={[
                styles.card,
                sponsor.dark === false ? styles.lightCard : "",
                isSwapping ? styles.swapping : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.innerFloat}>
                <div className={styles.logoWrapper}>{sponsor.svg}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}