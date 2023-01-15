import React from "react";
import css from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={css.navbar}>
        <div className={css.navbar__logo}>Send Cloud</div>
        <div className={css.navbar__links}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className={css.heading}>
        <h1>Send Cloud Integration</h1>
      </div>
    </>
  );
};

export default Navbar;
