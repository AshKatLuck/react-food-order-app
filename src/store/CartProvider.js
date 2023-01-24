import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemHandler = (items) => {};
  const removeItemHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
