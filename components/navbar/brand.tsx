import { Link } from "@heroui/react";

export function NavbarBrand() {
  return (
    <Link className="flex items-center gap-3 no-underline" href="/">
      <div className="hidden sm:block">
        <p className="text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
          ClikDown
        </p>
      </div>
    </Link>
  );
}
