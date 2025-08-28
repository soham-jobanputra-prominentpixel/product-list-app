import type React from "react";
import SearchInput from "./components/SearchInput.tsx";
import { sampleProducts } from "./core/product.ts";
import ProductList from "./components/ProductList.tsx";
import type Product from "./core/product.ts";
import { useState } from "react";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  function filterProducts(searchText: string): void {
    searchText = searchText.trim();
    if (searchText.length === 0) {
      setProducts(sampleProducts);
    } else {
      setProducts(
        sampleProducts.filter((product) =>
          product.name.toLowerCase().includes(
            searchText.toLowerCase(),
          )
        ),
      );
    }
  }

  return (
    <div className="mx-auto lg:w-2/3 p-4 w-full">
      <SearchInput onSearch={filterProducts} />
      <div className="mt-6"></div>
      <ProductList products={products} />
    </div>
  );
};

export default App;
