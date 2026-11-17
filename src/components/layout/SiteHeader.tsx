import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { contact, routes } from "@/lib/routes";
import type { NavItem } from "@/types/site";
import { Brand } from "./Brand";

const navigation: NavItem[] = [
  { label: "Properties", href: routes.properties },
  { label: "How it works", href: routes.process },
  { label: "Services", href: routes.services },
  { label: "About", href: routes.about },
  { label: "FAQ", href: routes.faq },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav aria-label="Main" className="main-nav">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={contact.phoneHref}>
            <Icon name="phone" size={16} />
            {contact.phoneDisplay}
          </a>
          <a className="button button-primary button-small" href={contact.whatsapp}>
            Book an inspection
          </a>
        </div>
      </div>
    </header>
  );
}
