import type Product from "./product.ts";

export default class ProductList {
    constructor(
        public readonly products: Product[],
    ) {}

    filterBySearchText(searchText: string) {
        searchText = searchText.trim();
        if (searchText.length === 0) {
            return this.products;
        }
        return this.products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchText.toLowerCase()),
        );
    }
}
