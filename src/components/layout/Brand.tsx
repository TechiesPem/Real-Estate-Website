import Link from "next/link";
import { routes } from "@/lib/routes";

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      aria-label="TONIA Evergreen Properties, home"
      className={inverted ? "brand brand-inverted" : "brand"}
      href={routes.home}
    >
      <svg aria-hidden="true" className="brand-mark" height="34" viewBox="0 0 34 34" width="34">
        <rect fill="currentColor" height="34" rx="3" width="34" />
        <path d="M8 17 17 9l9 8M11 15v10h12V15" fill="none" stroke="var(--brand-mark-line)" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M15 25v-5h4v5" fill="none" stroke="var(--brand-mark-line)" strokeWidth="1.8" />
      </svg>
      <span className="brand-copy">
        <strong>TONIA Evergreen</strong>
        <small>Properties</small>
      </span>
    </Link>
  );
}
