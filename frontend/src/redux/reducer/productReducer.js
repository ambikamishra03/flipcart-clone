import * as actionTypes from '../constants/productConstant';

// state - current value, action - updated value
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload }; // Corrected line
        case actionTypes.GET_PRODUCTS_FAILURE:
            return { ...state, error: action.payload }; // Corrected line
        default:
            return state;
    }
}



export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {loading: true};
            case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }; // Corrected line
        case actionTypes.GET_PRODUCTS_DETAILS_FAILURE:
            return {loading: false , error: action.payload }; // Corrected line
            case actionTypes.GET_PRODUCTS_DETAILS_RESET:
                return { product:{}};
        default:
            return state;
    }
}