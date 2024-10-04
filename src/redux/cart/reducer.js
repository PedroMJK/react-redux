import CartActionTypes from "./action-types"

// Definir o state
const initialState = {
    products: [],
}

// Criar Reducer
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            // Verificar se o produto já está no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );
            // Se ele estiver, aumentar a sua quantidade em 1
            if (productIsAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) => 
                        product.id === action.payload.id 
                            ? { ...product, quantity: product.quantity + 1}
                            : product
                        ),
                };
            };
            // Se ele não estiver,, adicioná-lo
            return {
                ...state,
                products: [ ...state.products, { ...action.payload, quantity: 1}],
            };

            // Para remover o produto clicado
            case CartActionTypes.REMOVE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== action.payload)
                }

            // Para aumentar um produto quando clicado no valor de aumentar
            case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
                return {
                    ...state,
                        products: state.products.map((product) => 
                            product.id === action.payload 
                                ? { ...product, quantity: product.quantity + 1 }
                                : product
                        ),
                };

                // Para diminuir um produto quando clicado no valor de dimimuir
                case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
                    return {
                        ...state,
                            products: state.products.map((product) => 
                                product.id === action.payload 
                                    ? { ...product, quantity: product.quantity - 1 }
                                    : product
                                ).filter(product => product.quantity > 0 ),
                    }
        default:
            return state;
    }
}


export default cartReducer

// o playload será o produto que será clicado