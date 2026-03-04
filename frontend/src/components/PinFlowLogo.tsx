interface PinFlowLogoProps {
  className?: string;
  size?: number;
}

export function PinFlowLogo({ className = "", size = 24 }: PinFlowLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle with gradient */}
      <circle cx="12" cy="12" r="10" fill="url(#pinGradient)" />
      
      {/* Pin shape */}
      <path
        d="M12 6C10.343 6 9 7.343 9 9C9 10.3 9.84 11.4 11 11.82V16L12 18L13 16V11.82C14.16 11.4 15 10.3 15 9C15 7.343 13.657 6 12 6Z"
        fill="white"
      />
      
      {/* Flow lines - representing automation */}
      <path
        d="M6 10C6 10 7 9.5 8 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M16 10C16 10 17 9.5 18 10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="pinGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E60023" />
          <stop offset="100%" stopColor="#FF6B9D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
