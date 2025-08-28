import type React from "react";
import { sampleProducts } from "./core/product.ts";
import ProductList from "./components/ProductList.tsx";

const App: React.FC = () => {
  return (
    <div className="mx-auto lg:w-2/3 p-4 w-full">
      <ProductList initialProducts={sampleProducts} />
    </div>
  );
};

export default App;
