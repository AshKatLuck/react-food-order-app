import React from "react";
import classes from "./Header.module.css";
import MealHeaderImage from "./../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals DEmo</h1>
        <HeaderCartButton onCartClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealHeaderImage} alt="A full meal on a dining table"></img>
      </div>
    </>
  );
};

export default Header;
