import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const onOrderHandler = () => {
    setIsCheckout(true);
  };
  const onOrderConfirmHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-food-delivery-app-8d42c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={onAddHandler.bind(null, item)}
          onRemove={onRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const modalactions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={onOrderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onCancel={props.onCloseCart}
          onConfirm={onOrderConfirmHandler}
        />
      )}
      {!isCheckout && modalactions}
    </>
  );
  const isSubmittingModalContent = (
    <>
      <p>Sending Order data</p>
    </>
  );

  const didSubmitModalContent = (
    <>
      <p>Ordered successfully!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={props.onCloseCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClickBackdrop={props.onCloseCart}>
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && !didSubmit && cartModalContent}
      {didSubmit && !isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
