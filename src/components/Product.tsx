import type React from "react";
import type ProductType from "../core/product.ts";

const Product: React.FC<Pick<ProductType, "name" | "price">> = (
    { name, price },
) => {
    return (
        <div className="min-w-auto p-4 rounded-xl bg-white max-w-50 text-wrap break-words capitalize">
            <span className="font-semibold">{name}</span> <br />
            <span className="font-semibold">${price}</span>
        </div>
    );
};

export default Product;
