import type React from "react";
import { sampleProducts } from "./core/product.ts";
import ProductList from "./components/ProductList.tsx";
import SearchInput from "./components/SearchInput.tsx";
import ProductListClass from "./core/productList.ts";
import { useState } from "react";

const App: React.FC = () => {
  const [productList, setProductList] = useState<ProductListClass>(
    new ProductListClass(sampleProducts),
  );

  return (
    <div className="mx-auto lg:w-2/3 p-4 w-full">
      <SearchInput
        onSearch={(searchText) =>
          setProductList(
            new ProductListClass(productList.filterBySearchText(searchText)),
          )}
      />
      <div className="mt-6"></div>
      <ProductList products={productList.products} />
    </div>
  );
};

export default App;
