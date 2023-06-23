import { useState } from "react";
import "./nav.css";
import logo from "../../assets/Logo color.png";

import { IoIosMenu, IoMdClose } from "react-icons/io";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handelToggleClick = () => {
    setToggle((prev) => {
      return !prev;
    });
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div
        className={
          toggle
            ? "nav-links-container"
            : "nav-links-container  hide-nav-links "
        }
      >
        <ul className="nav-links">
          <li>
            <span>About</span>
          </li>
          <li>
            <span>How it work</span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
          <li>
            <span>Solution</span>
          </li>
          <li>
            <span>Features</span>
          </li>
        </ul>
      </div>

      <div
        className={
          toggle
            ? "auth-container"
            : "puff-in-center auth-container hide-nav-links"
        }
      >
        <span className="logIn-button">Login</span>
        <span className="register-button">Register</span>
      </div>

      <div className="menu-container">
        {toggle ? (
          <IoMdClose className="icon" onClick={handelToggleClick}></IoMdClose>
        ) : (
          <IoIosMenu className="icon" onClick={handelToggleClick}></IoIosMenu>
        )}
      </div>
    </div>
  );
}

export default Nav;
