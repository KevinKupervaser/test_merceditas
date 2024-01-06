import ProductCard from "./ProductCard";
import storeItems from "../data/storeItems.json";
import { useEffect, useMemo, useState } from "react";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setProducts(storeItems);
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.category === selectedCategory);
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, products]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="filter-container">
        <div>Filtrar por Categoria:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">Todos</option>
            <option value="bebidas">Bebidas</option>
            <option value="desayuno">Desayuno</option>
            <option value="almuerzo">Almuerzo</option>
          </select>
        </div>
      </div>
      <div>
        {filteredList.map((item) => (
          <div key={item.id} className="m-5">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
