import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartCard({ item, isInCart }) {
  const { cartData, setCartData } = useContext(CartContext);

  return (
    <div className="p-2 border rounded-sm" key={item.id}>
      <h2> {item.item}</h2>
      {isInCart ? (
        <div className="text-green-500">Item Already in cart</div>
      ) : (
        <button
          onClick={() => {
            setCartData([...cartData, item]);
          }}
          className="p-1 rounded-lg border mt-5 hover:cursor-pointer hover:shadow-md"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default CartCard;
