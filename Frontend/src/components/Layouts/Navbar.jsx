import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import PreptlyLogo from "../../assets/Preptly-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-3 md:px-2 sticky top-0 z-30 mx-5 ">
      <div className="container mx-auto flex items-center justify-between gap-5 ">
        <Link to="/dashboard" className="flex items-center">
          <img
            src={PreptlyLogo}
            alt="Preptly Logo"
            className="h-12 w-auto object-contain cursor-pointer"
          />
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
