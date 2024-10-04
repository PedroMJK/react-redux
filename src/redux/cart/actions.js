// primeira action

import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});

// Action para remover o produto clicado
export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const incrieaseProductQuantity = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
})

export const decreaseProductQuantity = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
});