import rootReducer from "../root-reducer";

    // Selector
export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acc, curr) => acc + curr.quantity,
        0
    );
}

// Selector para preço total
export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
    )
}