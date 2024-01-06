import Cart from "./components/Cart";
import Store from "./components/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Cart />
      <div className="flex items-center justify-center">
        <Store />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
