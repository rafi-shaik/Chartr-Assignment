import { Component } from "react";

import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaNetworkWired } from "react-icons/fa";
import { CiMemoPad } from "react-icons/ci";

import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";

import "./index.css";

class Sidebar extends Component {
  state = { showMenu: false };

  toggleMenubar = () => {
    this.setState((prev) => ({ showMenu: !prev.showMenu }));
  };

  render() {
    const { showMenu } = this.state;
    const expandClassName = showMenu ? "expanded-bar bar-bg" : "bar-bg";
    return (
      <div className={expandClassName}>
        <button type="button" onClick={this.toggleMenubar} className="arrow">
          {showMenu ? (
            <AiFillLeftCircle size={25} />
          ) : (
            <AiFillRightCircle size={25} />
          )}
        </button>
        <div className="icons-container">
          <span className="icon-span">
            <AiFillHome size={25} className="icon" /> {showMenu ? "Home" : ""}
          </span>
          <span className="icon-span">
            <CgProfile size={25} className="icon" /> {showMenu ? "Profile" : ""}
          </span>
          <span className="icon-span">
            <FaNetworkWired size={25} className="icon" />
            {showMenu ? "Network" : ""}
          </span>
          <span className="icon-span">
            <CiMemoPad size={25} className="icon" /> {showMenu ? "Notes" : ""}
          </span>
        </div>
      </div>
    );
  }
}

export default Sidebar;
