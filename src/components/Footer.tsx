export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} Karsten van Vooren</p>
        <div className="flex gap-5">
          <a href="mailto:karstenvanvooren@gmail.com" className="link-underline hover:text-foreground">
            Email
          </a>
          <a href="https://github.com/karstenvanvooren" className="link-underline hover:text-foreground" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/karstenvanvooren/" className="link-underline hover:text-foreground" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
