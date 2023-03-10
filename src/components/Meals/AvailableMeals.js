import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";

const AvailableMeals = (props) => {
  const [mealsFromDB, setMealsFromDB] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-food-delivery-app-8d42c-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealsFromDB(loadedMeals);
      SetIsLoading(false);
    };
    fetchMeals().catch((error) => {
      SetIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  const meals = mealsFromDB.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price.toFixed(2)}
    />
  ));

  if (isLoading) {
    console.log("loading");
    return (
      <section className={classes.mealsLoading}>
        <p>Loading..</p>
      </section>
    );
  }

  if (httpError) {
    console.log("httpError");
    return (
      <section className={classes.mealsError}>
        <p>{httpError}. Cannot fetch meals data!</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
