import React from "react";
import Typed from "typed.js";
import profilepic from "../images//profilepicb&w.jpg";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import sound from "../pages/audio/tap-notification-180637.mp3";
import mouseSound from "../pages/audio/mouse-click-153941.mp3";
import useSound from "use-sound";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const el = React.useRef(null);
  const [play] = useSound(sound, { volume: 0.3 });
  const [mousePlay] = useSound(mouseSound, { volume: 0.3 });

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "</br>Web designer",
        "</br>Frontend developer",
        "</br>Backend developer",
        "</br>Full stack developer",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="Home">
        <hr className="m-0" />
        <div className="homecontainer">
          <div className="homeleftside">
            <p className="homepagetitle">
              Hi, I'm <span style={{ color: "#7F27FF" }}>Aravind</span>
            </p>
            <span className="homepagesubtitle" ref={el} />
            <div>
              <a href="/Aravind-Resume.pdf" download onClick={mousePlay}>
                <button className="downloadBtn flex flex-row items-center gap-2 my-3 px-4 py-2 bg-[#7F27FF] text-white rounded hover:bg-[#631fc8]">
                  <IoMdDownload /> Download CV
                </button>
              </a>
              <Link to={'/projects'} onClick={mousePlay}>
              <p className="myprojects text-center italic">PROJECTS</p>
              <div className="rotatecontainer">
                <div className="outerring">
                  <div className="middlering">
                    <div className="innerring"></div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="homerightside">
            <img className="profilepic" src={profilepic} alt="" />
          </div>
        </div>
        <div className="homecontainer-triangle1"></div>
        <div className="homecontainer-triangle2"></div>
        <div className="socialIcons flex flex-column text-white z-10">
          <a
            href="https://github.com/aravindsamuel"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIconsItems"
            onMouseEnter={play}
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/aravindsamuel33/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIconsItems"
            onMouseEnter={play}
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/aravindsamuel/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIconsItems"
            onMouseEnter={play}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/919087890436"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIconsItems"
            onMouseEnter={play}
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
