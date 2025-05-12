const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";

function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
  return burgers;
}


if (true) {
  {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
  }
}

function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
  return featuredDrink;
}
