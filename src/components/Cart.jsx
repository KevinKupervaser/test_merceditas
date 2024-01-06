import { useShoppingCart } from "../context/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartQuantity, openCart } = useShoppingCart();

  return (
    <div className="relative flex justify-end">
      <button onClick={openCart}>
        <img src="/cart_svg.svg" className="w-[62px] h-[62px]" />
        <div className="absolute bottom-0 right-0 bg-amber-700 w-8 h-8 rounded-full flex items-center justify-center">
          <span className="text-stone-50 text-lg font-semibold">
            {cartQuantity}
          </span>
        </div>
      </button>
    </div>
  );
};

export default ShoppingCart;
