import type React from "react";
import Product from "./Product.tsx";
import type ProductType from "../core/product.ts";

type ProductListProps = {
    products: ProductType[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="flex flex-wrap gap-5">
            {products.map(
                (product) => (
                    <Product
                        key={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ),
            )}
        </div>
    );
};

export default ProductList;
