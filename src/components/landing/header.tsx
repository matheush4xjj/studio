import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg">TributoHub</span>
        </Link>
        <nav>
          <Button asChild size="sm">
            <Link href="#cta">Descubra o TributoHub</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
