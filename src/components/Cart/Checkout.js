import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const onConfirmHandler = (event) => {
    event.preventDefault();
    console.log("submitting");
  };

  return (
    <form className={classes.form} onSubmit={onConfirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street Address</label>
        <input id="street" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip">Zip Code</label>
        <input id="zip" type="text" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
