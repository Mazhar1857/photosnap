import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../assets/svg-component/shared/desktop/logo";
import MobileCloseIcon from "../assets/svg-component/shared/mobile/MobileCloseIcon";
import HamburgerIcon from "../assets/svg-component/shared/mobile/HamburgerIcon";

const NavBar = () => {
  const [menu, setMenu] = useState("inactive");

  const handleToggle = () => {
    setMenu((pre) => {
      return pre === "active" ? "inactive" : "active";
    });
  };

  return (
    <div className={`bg ${menu === "active" ? "active" : "inactive"}`}>
      <div className="navbar">
        <div className="logo">
          <Logo />
          <div
            className={`mobile close ${
              menu === "active" ? "active" : "inactive"
            }`}
            onClick={handleToggle}
          >
            <MobileCloseIcon />
          </div>
          <div
            className={`mobile hamburger ${
              menu === "inactive" ? "active" : "inactive"
            }`}
            onClick={handleToggle}
          >
            <HamburgerIcon />
          </div>
        </div>

        <ul>
          <li>STORIES</li>
          <li>FEATURES</li>
          <li>PRICING</li>
        </ul>
        <div className="hr mobile"></div>
        <button className="invite-btn">GET AN INVITE</button>
      </div>
    </div>
  );
};

export default NavBar;
