import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./navbar.css";
import useSound from "use-sound";
import sound from '../pages/audio/click-button-140881.mp3'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [play] = useSound(sound, {volume: 0.7})
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <header>
        <nav className="py-1 fixed w-100">
          <div className="navleft">
            <h3 className="portfolio text-lg font-bold"><span className="text-2xl text-[#7F27FF]">A</span>ravind</h3>
          </div>
          <div className="navright">
            <div className="navcontainer" onClick={play}>
              <Link to="/" className="navcontent">
              <span >Home</span>
              </Link>
            </div>
            <div className="navcontainer" onClick={play}>
              <Link to="/about" className="navcontent">
              <span>About</span>
              </Link>
            </div>
            <div className="navcontainer" onClick={play}>
              <Link to="/skills" className="navcontent">
              <span>Skills</span>
              </Link>
            </div>
            <div className="navcontainer" onClick={play}>
              <Link to="/contact" className="navcontent">
              <span>Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <Link to="#" className="menu-bars fixed">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <div className={sidebar ? "active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-close">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="nav-text" onClick={play}>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-text" onClick={play}>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
          <li className="nav-text" onClick={play}>
            <Link to="/skills">
              <span>Skills</span>
            </Link>
          </li>
          <li className="nav-text" onClick={play}>
            <Link to="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
