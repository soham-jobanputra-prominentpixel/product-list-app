import type React from "react";
import Product from "./Product.tsx";
import type ProductType from "../core/product.ts";
import { useState } from "react";
import SearchInput from "./SearchInput.tsx";

type ProductListProps = {
    initialProducts: ProductType[];
};

const ProductList: React.FC<ProductListProps> = ({ initialProducts }) => {
    const [products, setProducts] = useState<ProductType[]>(initialProducts);

    function filterProducts(searchText: string): void {
        searchText = searchText.trim();
        if (searchText.length === 0) {
            setProducts(initialProducts);
        } else {
            setProducts(
                initialProducts.filter((product) =>
                    product.name.toLowerCase().includes(
                        searchText.toLowerCase(),
                    )
                ),
            );
        }
    }

    return (
        <>
            <SearchInput onSearch={filterProducts} />
            <div className="mt-6"></div>
            <div className="flex flex-wrap gap-5">
                {products.length === 0
                    ? "No products match your search. Please try different keywords or filters."
                    : products.map(
                        (product) => (
                            <Product
                                key={product.id}
                                name={product.name}
                                price={product.price}
                            />
                        ),
                    )}
            </div>
        </>
    );
};

export default ProductList;
