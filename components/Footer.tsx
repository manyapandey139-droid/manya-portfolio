import { Github, Linkedin, Mail } from "lucide-react";
import { profile, emailHref } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: emailHref, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-10 md:px-10">
      <div className="mx-auto max-w-content">
        <hr className="rule" />

        <div className="flex flex-col items-center justify-between gap-6 pt-9 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="#hero"
              className="font-display text-lg font-semibold tracking-tight text-ink"
            >
              Manya<span className="text-accent">.</span>
            </a>
            <p className="mt-1.5 text-xs text-secondary">
              {profile.roles.join(" · ")}
            </p>
          </div>

          <ul className="flex items-center gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} — ${profile.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/70 text-body transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs text-secondary sm:text-right">
            © {new Date().getFullYear()} {profile.name}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> · </span>
            Designed &amp; built in {profile.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
