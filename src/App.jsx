import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import "./App.css";
import "./assets/font/stylesheet.css";
import "./assets/icon/style.css";

import Header from "./assets/components/header/Header";
import Menu from "./assets/components/menu/Menu";
import Restaurant from "./assets/components/restaurant/Restaurant";

function App() {
  const [categoryLists, setCategoryLists] = useState();
  const [restaurant, setRestaurant] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--deliveroo-backend--fwddjdqr85yq.code.run/"
      );
      setCategoryLists(
        response.data.categories.filter((meal) => meal.meals.length > 0)
      );
      setRestaurant(response.data.restaurant);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    console.log("useEffect activated");
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <span>"En cours de chargement"</span>
      ) : (
        <main>
          <Restaurant restaurant={restaurant} />
          <Menu
            categoryLists={categoryLists}
            isLoading={isLoading}
            nanoid={nanoid}
          />{" "}
        </main>
      )}
    </>
  );
}

export default App;
