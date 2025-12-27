import React from "react";
import {
  MdOutlineTranslate,
  MdOutlineThumbUp,
  MdOutlineHome,
  MdOutlineMail,
} from "react-icons/md";

function Header() {
  return (
    <div className="header bottom-border">
      <p></p>
      <h2>Speechace Speaking Tests Report</h2>
      <div className="link-icons">
        <p className="icon">
          <MdOutlineHome />
        </p>
        <p className="icon">
          <MdOutlineTranslate />
        </p>
        <p className="icon">
          <MdOutlineThumbUp />
        </p>
        <p className="icon">
          <MdOutlineMail />
        </p>
      </div>
    </div>
  );
}

export default Header;
