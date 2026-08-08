import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 py-12 text-zinc-400">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-zinc-50 mb-2">ABTalks</h3>
            <p className="text-sm">
              60-Day Coding Challenge for Indian College Students •{" "}
              Build. Learn. Grow.
            </p>
            <p className="text-xs">
              © {currentYear} ABTalks. All rights reserved.
            </p>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-col space-y-1">
              <span className="text-xs font-semibold text-zinc-50">Resources</span>
              <nav className="flex flex-col space-y-0.5">
                <a href="#why" className="text-xs hover:text-zinc-50 transition-colors">
                  Why Join
                </a>
                <a href="#how" className="text-xs hover:text-zinc-50 transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="text-xs hover:text-zinc-50 transition-colors">
                  Testimonials
                </a>
              </nav>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="text-xs font-semibold text-zinc-50">Community</span>
              <nav className="flex flex-col space-y-0.5">
                <a href="https://discord.gg/abtalks" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-zinc-50 transition-colors">
                  Discord
                </a>
                <a href="https://linkedin.com/company/abtalks" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-zinc-50 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/abtalks-community" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-zinc-50 transition-colors">
                  GitHub
                </a>
              </nav>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <a
              href="https://github.com/abtalks-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs hover:text-zinc-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.547-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.235 1.839 1.235 1.07 1.834 2.807 1.304 3.492.997.107-1.245.417-1.304.76-1.001 0-0.781-.625-1.432-1.235-1.245 1.235 1.235 1.235 1.235 1.235 1.07.528 1.837.87 2.155.87 2.155 0 1.509-.625 2.014-1.235 1.245-.346-.48-.535-1.008-.535-1.566 0-.276.016-.55.048-.812a5.162 5.162 0 00-1.481-.433c-.377-.04-.774-.057-1.167-.057-.393 0-.79.018-1.167.057a5.162 5.162 0 00-1.481.433c.032.262.048.536.048.812 0 .558-.189 1.086-.535 1.566-.346.48-.535 1.008-.535 1.245.61 0 1.133-.477 1.235-1.245s-.625-1.264-1.235-1.245c-.343-.304-.653-.662-.76-1.245A11.975 11.975 0 0112 0z" />
              </svg>
              GitHub
            </a>
            <div className="text-xs">
              Built with �� ❤��️ by alumni who remember Day 1
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}