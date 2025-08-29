import type React from "react";
import ProductList from "./components/ProductList.tsx";
import SearchInput from "./components/SearchInput.tsx";
import { useContext, useState } from "react";
import { ProductsContext } from "./contexts/productsContext.ts";

const App: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const filterProductsBySearchText = useContext(ProductsContext);

  return (
    <div className="mx-auto lg:w-2/3 p-4 w-full">
      <SearchInput
        onSearch={(inputSearchText) => setSearchText(inputSearchText)}
      />
      <div className="mt-6"></div>
      <ProductList products={filterProductsBySearchText(searchText)} />
    </div>
  );
};

export default App;
