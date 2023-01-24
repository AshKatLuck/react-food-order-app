import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx.items[0].amount);
  // console.log(cartCtx);
  const totalNumberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // console.log(totalNumberOfItems);
  return (
    <>
      <div className={classes.button} onClick={props.onCartClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalNumberOfItems}</span>
      </div>
    </>
  );
};

export default HeaderCartButton;
