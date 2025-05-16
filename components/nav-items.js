"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./nav-items.module.css";

export default function NavItems() {
  const path = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? classes.active : ""}
          >
            Browse Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={path.startsWith("/community") ? classes.active : ""}
          >
            Foodies Meals
          </Link>
        </li>
      </ul>
    </nav>
  );
}
