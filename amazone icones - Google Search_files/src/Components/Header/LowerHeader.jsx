import React from "react";
import { HiMenu } from "react-icons/hi";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.header__lower}>
      <ul>
        <li className={classes.menu}>
          <HiMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Services</li>
        <li>Resgistry</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
