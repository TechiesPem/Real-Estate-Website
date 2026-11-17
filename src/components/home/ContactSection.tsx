import { Icon } from "@/components/ui/Icon";
import { contact } from "@/lib/routes";

const channels = [
  { icon: "chat", label: "WhatsApp", value: "Message us", href: contact.whatsapp },
  { icon: "phone", label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref },
  { icon: "mail", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: "pin", label: "Office", value: contact.office, href: contact.mapsHref },
] as const;

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="contact" id="contact">
      <div className="container contact-inner">
        <div>
          <h2 id="contact-title">Seen something you like?</h2>
          <p>
            Tell us which property, or what you&apos;re looking for, and we&apos;ll arrange an
            inspection in person or by video.
          </p>
        </div>
        <ul className="contact-channels">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a href={channel.href}>
                <Icon name={channel.icon} size={20} />
                <span>
                  <small>{channel.label}</small>
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
