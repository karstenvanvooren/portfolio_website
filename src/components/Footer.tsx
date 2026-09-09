export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Karsten Van Vooren. Built from scratch.</p>
        <div className="flex gap-5">
          {/* Replace with your real links */}
          <a href="mailto:you@example.com" className="hover:text-foreground">
            Email
          </a>
          <a href="https://github.com/karstenvanvooren" className="hover:text-foreground" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
