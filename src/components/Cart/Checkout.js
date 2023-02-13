import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true,
  });

  const onConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredZip = zipRef.current.value;
    console.log(enteredName, enteredStreet, enteredCity, enteredZip);
    const isNameValid = !isEmpty(enteredName);
    const isStreetValid = !isEmpty(enteredStreet);
    const isCityValid = !isEmpty(enteredCity);
    const isZipValid = isFiveChars(enteredZip);

    setFormInputValidity({
      name: isNameValid,
      street: isStreetValid,
      city: isCityValid,
      zip: isZipValid,
    });

    const isFormValid =
      isNameValid && isStreetValid && isCityValid && isZipValid;
  };

  return (
    <form className={classes.form} onSubmit={onConfirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" ref={nameRef} />
        {!formInputValidity.name && <p>Enter a valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street Address</label>
        <input id="street" type="text" ref={streetRef} />
        {!formInputValidity.street && <p>Enter a Street Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityRef} />
        {!formInputValidity.city && <p>Enter a City Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.zip ? "" : classes.invalid
        }`}
      >
        <label htmlFor="zip">Zip Code</label>
        <input id="zip" type="text" ref={zipRef} />
        {!formInputValidity.zip && <p>Enter a valid 5 digit zip code</p>}
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
