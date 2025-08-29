import { createContext } from "react";
import { sampleProducts } from "../constants/product.ts";

export function filterProductsBySearchText(searchText: string) {
    searchText = searchText.trim();
    if (searchText.length === 0) {
        return sampleProducts;
    }
    return sampleProducts.filter(
        (product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase()),
    );
}

export const ProductsContext = createContext(filterProductsBySearchText);
