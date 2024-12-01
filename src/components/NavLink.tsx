"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  path: string;
  children: React.ReactNode;
  icon?: JSX.Element;
}

function NavLink({ path, children, icon }: NavLink) {
  const pathname = usePathname();

  return (
    <Link
      className={`h-full w-full  hover:animate-pulse hover:text-primary-400
        flex items-center justify-center gap-x-2 ${
          pathname === path ? "text-primary-400" : ""
        }
      `}
      href={path}
    >
      {pathname === path&&icon && <span className="">{icon}</span>}
      {children}
    </Link>
  );
}

export default NavLink;
