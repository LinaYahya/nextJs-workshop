import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">
      <a className="navbar__home"> Note App</a>
    </Link>
    <Link href="/new">
      <a className="navbar__add">Create Note</a>
    </Link>
  </nav>
);

export default Navbar;
