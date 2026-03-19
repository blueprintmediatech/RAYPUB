import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold tracking-tight">
              RAY<span className="text-gold">PUB</span>
            </span>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Music publishing administration for independent artists and record
              labels. Your music. Your money. Our expertise.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#packages" className="hover:text-foreground transition-colors">Registration Package</a></li>
              <li><a href="#packages" className="hover:text-foreground transition-colors">Publishing Administration</a></li>
              <li><a href="#packages" className="hover:text-foreground transition-colors">Full Label Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><Link href="/login" className="hover:text-foreground transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} RAYPUB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
