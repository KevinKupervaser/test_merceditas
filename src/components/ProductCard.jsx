import { useState, useEffect } from "react";
import Card from "./Card";
import { useRef } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const paragraphStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const ProductCard = ({
  id,
  name,
  description,
  price,
  img,
  category,
  stock,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const { increaseCartQuantity } = useShoppingCart();

  const ref = useRef(null);

  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);

  return (
    <Card>
      <div className="flex rounded border w-[300px] gap-5 shadow-xl p-5 relative">
        <div className="text-sm">
          <h3 className="font-semibold">{name}</h3>
          <p
            className="pt-2"
            style={readMore ? null : paragraphStyles}
            ref={ref}
          >
            {description}
          </p>
          {showReadMore && (
            <button
              className="font-semibold underline pt-2"
              onClick={toggleReadMore}
            >
              {readMore ? "Leer Menos..." : "Leer Más..."}
            </button>
          )}
          <p className="font-semibold pt-2">{formatCurrency(price)}</p>
        </div>
        <div className="w-[140px] h-[140px]">
          <img src={img} className="object-cover" />
        </div>

        <button
          className="font-semibold text-xl absolute rounded right-8 bottom-8 border h-9 w-9 flex items-center justify-center"
          onClick={() => increaseCartQuantity(id, name, price)}
        >
          +
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
