import Link from "next/link";
import React from "react";
import Logo from "../../../public/logo-mvp-white.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="shadow-xl bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-1">
          <div>
            <Link href="/">
              <Image src={Logo} width={100} height={100} alt="NextJS Logo" />
            </Link>
          </div>
          <ul className="flex text-white"  >
            <li className="mx-3"><Link href="/login">Login</Link></li>
            <li className="mx-3"><Link href="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
