import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">TributoHub</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="text-foreground/60 transition-colors hover:text-foreground/80">Funcionalidades</Link>
            <Link href="#benefits" className="text-foreground/60 transition-colors hover:text-foreground/80">Benefícios</Link>
            <Link href="#testimonials" className="text-foreground/60 transition-colors hover:text-foreground/80">Depoimentos</Link>
            <Link href="#faq" className="text-foreground/60 transition-colors hover:text-foreground/80">FAQ</Link>
        </nav>
        <nav>
          <Button asChild size="sm">
            <Link href="#cta">Comece a Usar</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
