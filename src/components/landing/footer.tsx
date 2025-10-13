import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-lg font-bold leading-loose text-center md:text-left">
            TributoHub
          </p>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-foreground">
            Termos
          </Link>
          <Link href="#" className="hover:text-foreground">
            Privacidade
          </Link>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} TributoHub. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
