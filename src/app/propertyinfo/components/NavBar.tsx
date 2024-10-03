import React from "react";
import Image from "next/image";
import logo from "../../../images/leap.svg";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <div className="div">
        <div>
          <span>
            {" "}
            <RiMenu2Line />
          </span>{" "}
          <p>Menu</p>
        </div>
        <div className="">
          <Image
            src={logo}
            alt="logo"
            width={95}
            height={64}
            className="w-[64px]"
          />
        </div>
      </div>
      <div className="div">
        <Link href={""}>For sale</Link>
        <Link href={""}>For rent</Link>
      </div>
    </div>
  );
}

export default NavBar;
