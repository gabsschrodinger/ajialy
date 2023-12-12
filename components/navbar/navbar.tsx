import "./style.css";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-link">
        Home
      </Link>
      <Link href="/about" className="navbar-link">
        About
      </Link>
      <Link href="/contact" className="navbar-link">
        Contact
      </Link>
    </nav>
  );
};
