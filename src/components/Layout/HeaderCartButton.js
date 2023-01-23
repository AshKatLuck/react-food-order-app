import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <>
      <div className={classes.button} onClick={props.onCartClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </div>
    </>
  );
};

export default HeaderCartButton;
