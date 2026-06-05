export function HeroSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="AI Arbitrage иллюстрация"
    >
      <rect width="600" height="400" fill="transparent" />
      <g stroke="#1F2833" strokeWidth="1" opacity="0.6">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60 + 40} x2="600" y2={i * 60 + 40} />
        ))}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 55 + 30} y1="0" x2={i * 55 + 30} y2="400" />
        ))}
      </g>

      <g transform="translate(180, 100)">
        <rect x="0" y="0" width="240" height="200" rx="16" fill="#1F2833" stroke="#45A29E" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="8" rx="4" fill="#66FCF1" opacity="0.8" />
        <rect x="20" y="40" width="160" height="6" rx="3" fill="#45A29E" opacity="0.5" />
        <rect x="20" y="55" width="140" height="6" rx="3" fill="#45A29E" opacity="0.4" />
        <rect x="20" y="70" width="180" height="6" rx="3" fill="#45A29E" opacity="0.3" />
        <rect x="20" y="100" width="80" height="28" rx="8" fill="#66FCF1" />
        <circle cx="200" cy="115" r="16" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
        <path d="M194 115L198 119L206 111" stroke="#66FCF1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <g transform="translate(240, 30)">
          <path d="M0 0 L20 10 L0 20 Z" fill="#66FCF1" />
          <line x1="20" y1="10" x2="60" y2="10" stroke="#66FCF1" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="70" cy="10" r="12" fill="#1F2833" stroke="#66FCF1" strokeWidth="2" />
          <path d="M64 10L68 14L76 6" stroke="#66FCF1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      <g transform="translate(420, 260)">
        <circle cx="0" cy="0" r="30" fill="none" stroke="#66FCF1" strokeWidth="2" />
        <circle cx="0" cy="0" r="20" fill="none" stroke="#45A29E" strokeWidth="1" />
        <circle cx="0" cy="0" r="10" fill="#66FCF1" opacity="0.3" />
      </g>

      <g transform="translate(100, 280)">
        <rect x="0" y="0" width="48" height="48" rx="8" fill="#1F2833" stroke="#45A29E" strokeWidth="1.5" />
        <rect x="12" y="16" width="24" height="4" rx="2" fill="#66FCF1" />
        <rect x="12" y="26" width="16" height="4" rx="2" fill="#45A29E" />
      </g>
    </svg>
  );
}
