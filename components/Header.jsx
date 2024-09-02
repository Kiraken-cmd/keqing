import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav"; // Pastikan MobileNav diimpor

const Header = () => {
  return (
    <header className="py-8 xl:py-11 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Keqing<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav & My Love button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link
            href="https://bit.ly/aldisetyawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              My Love <span className="text-pink-500 ml-2">❤</span>
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
