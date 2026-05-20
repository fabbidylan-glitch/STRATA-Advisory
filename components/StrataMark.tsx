export function StrataMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-label="STRATA"
    >
      <path d="M6 12 L18 4 L30 12 L26 12 L18 6 L10 12 Z" fill="#C79A5A" />
      <path d="M6 20 L18 12 L30 20 L26 20 L18 14 L10 20 Z" fill="#5D7F71" />
      <path d="M6 28 L18 20 L30 28 L26 28 L18 22 L10 28 Z" fill="#DCCAB1" />
    </svg>
  );
}
