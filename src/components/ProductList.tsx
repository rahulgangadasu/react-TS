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
