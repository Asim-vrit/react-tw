import { useContext } from "react";
import CartCard from "./CartCard";
import { CartContext } from "../../context/CartContext";

const data = [
  {
    id: 1,
    item: "Headphone",
  },
  {
    id: 2,
    item: "pendrive",
  },
  {
    id: 3,
    item: "pants",
  },
  {
    id: 4,
    item: "mobile",
  },
  {
    id: 5,
    item: "laptop",
  },
];
function Home() {
  const { cartData } = useContext(CartContext);
  return (
    <div className="flex gap-5 p-2 flex-wrap">
      {data.map((item) => {
        const cartFilters = cartData.filter(
          (cartItem) => item.id === cartItem.id
        );
        const isInCart = cartFilters.length > 0;
        return <CartCard isInCart={isInCart} item={item} />;
      })}
    </div>
  );
}

export default Home;
