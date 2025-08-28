# Product List App
---
 
**Task**: Product List with Filters.

**Goal**: Display a list of products with the ability to filter them using a search input.

**Description**:
- You need to create a ProductList component that displays a list of products passed as props.
- The products prop must always be an array of objects in this shape: { id: number; name: string; price: number }
- If any product does not match this format, TypeScript should give an error.
- Display all products in a list (name + price).
- Add a search input field that filters products by name.
- Use strict event typing for the input field: React.ChangeEvent<HTMLInputElement>.
- The products list should never be null — if no products are passed, default to an empty array ([]) instead of null.
- Use React.FC and strict typing rules for the component.
