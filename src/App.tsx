import type React from "react";
import { sampleProducts } from "./core/product.ts";
import ProductList from "./components/ProductList.tsx";
import SearchInput from "./components/SearchInput.tsx";
import ProductListClass from "./core/productList.ts";
import { useState } from "react";

const products = new ProductListClass(sampleProducts);

const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="mx-auto lg:w-2/3 p-4 w-full">
      <SearchInput
        onSearch={(inputSearchText) => setSearchText(inputSearchText)}
      />
      <div className="mt-6"></div>
      <ProductList products={products.filterBySearchText(searchText)} />
    </div>
  );
};

export default App;
