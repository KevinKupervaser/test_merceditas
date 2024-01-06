import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/storeItems.json";
import { formatCurrency } from "../utilities/formatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="flex mt-4 items-center justify-between">
      <div className="flex justify-center items-center ml-4">
        <img src={item.img} className="w-[80px] h-[80px] object-cover" />
        <div>
          <p className="text-lg ml-4">
            {item.name}
            {quantity > 1 && (
              <span className="text-slate-700 opacity-60 text-sm">
                {" "}
                x{quantity}
              </span>
            )}
          </p>
          <div className="ml-4">{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div className="ml-4 text-sm">
        {formatCurrency(item.price * quantity)}
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-2 mr-2 text-2xl font-semibold text-red-800"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
