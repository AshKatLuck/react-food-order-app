import classes from "./Checkout.module.css";
import { useRef } from "react";

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const onConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredZip = zipRef.current.value;
    console.log(enteredName, enteredStreet, enteredCity, enteredZip);
  };

  return (
    <form className={classes.form} onSubmit={onConfirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street Address</label>
        <input id="street" type="text" ref={streetRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="zip">Zip Code</label>
        <input id="zip" type="text" ref={zipRef} />
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
