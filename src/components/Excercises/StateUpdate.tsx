import { useState } from "react";

const [game, setGame] = useState({
  id: 1,
  player: {
    name: "Rahul",
  },
});
const handleGameClick = () => {
  setGame({ ...game, player: { ...game.player, name: "Phanindra" } });
};

const [pizza, setPizza] = useState({
  name: "Veggie Pizza",
  toppings: ["jalapeno"],
});
const handlePizzaClick = () => {
  setPizza({ ...pizza, toppings: [...pizza.toppings, "mushroom"] });
};

const [cart, setCart] = useState({
  discount: 0.1,
  items: [
    {
      id: 1,
      item: "Product 1",
      quantity: 1,
    },
    {
      id: 2,
      item: "Product 2",
      quantity: 1,
    },
  ],
});
const handleCartClick = () => {
  setCart({
    ...cart,
    items: [
      ...cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    ],
  });
};

console.log(handleGameClick, handlePizzaClick, handleCartClick);

const StateUpdate = () => {
  return <div>StateUpdate</div>;
};

export default StateUpdate;
