import { useEffect, useState, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? pizzaOfTheDay.name : "Loading...");

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const pizzaData = await response.json();
      setPizzaOfTheDay(pizzaData);
    }
    fetchPizzaOfTheDay().catch((error) => {
      console.error("Failed to fetch pizza of the day:", error);
    });
  }, []);

  return pizzaOfTheDay;
};
