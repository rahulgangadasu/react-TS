import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products from : " + category);
    setProducts(["Clothing", "Accessories", "Electronics"]);
  }, [category]);

  return <div>ProductList : {products}</div>;
};

export default ProductList;

/* App code for product list
import { useEffect, useRef, useState } from "react";
import ProductList from "./Components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  return (
    <div>
      <div className="mb-3">
        <ProductList category={category} />
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="item" className="form-label">
          Item
        </label>
        <input ref={ref} id="item" type="text" className="form-control" />
      </div>
    </div>
  );
}
export default App;

*/
