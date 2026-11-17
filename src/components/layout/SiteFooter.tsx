import Link from "next/link";
import { contact, routes } from "@/lib/routes";
import { Brand } from "./Brand";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Properties", href: routes.properties },
      { label: "How it works", href: routes.process },
      { label: "Services", href: routes.services },
      { label: "About", href: routes.about },
      { label: "FAQ", href: routes.faq },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "YouTube", href: "https://youtube.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Brand inverted />
          <p>
            Verified homes, land and property management across Abuja, Lagos and the South East.
          </p>
        </div>
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-column">
          <h2>Contact</h2>
          <ul>
            <li><a href={contact.phoneHref}>{contact.phoneDisplay}</a></li>
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={contact.mapsHref}>{contact.office}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 TONIA Evergreen Properties Enterprise</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
