import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  text: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, href }) => {
  return (
    <li>
      <Link to={href} className="hover:underline text-white transition duration-300">
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
