/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const firstToppings = [
    "Bell Peppers",
    "Mushrooms",
    "Spinach",
    "Red Onions",
    "Artichoke Hearts",
    "No Vegetables"
  ];
  const secondToppings = [
    "Pepperoni",
    "Sausage",
    "Bacon",
    "Ham",
    "Chicken",
    "No Meat"
  ];
  const sizes = ["Small", "Medium", "Family", "Large"];

  const getRandomElement = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generatorPizza = () => {
    const size = getRandomElement(sizes);
    const toppingOne = getRandomElement(firstToppings);
    const toppingTwo = getRandomElement(secondToppings);

    if (toppingOne == "No Vegetables" && toppingTwo == "No Meat") {
      document.getElementById(
        "pizzaGenerate"
      ).innerText = `Your ${size.toLowerCase()} cheese pizza, is ready!!!!`;
    } else {
      document.getElementById(
        "pizzaGenerate"
      ).innerText = `Your ${size.toLowerCase()} pizza with ${toppingOne.toLowerCase()} and ${toppingTwo.toLowerCase()}, is ready!!!!`;
    }
  };

  generatorPizza();

  document.querySelector(".btn").addEventListener("click", generatorPizza);
};
