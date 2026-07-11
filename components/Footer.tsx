import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-10 py-8">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name}. Built from scratch.
        </p>
        <p className="font-mono text-xs">Designed &amp; developed in India.</p>
      </div>
    </footer>
  );
}
