import Link from "next/link";
import NavItems from "./nav-items";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="logo-img" priority />
        NextLevel Food
      </Link>

      <NavItems />
    </header>
  );
}
