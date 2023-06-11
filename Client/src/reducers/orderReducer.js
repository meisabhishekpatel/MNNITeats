export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLACE_ORDER_REQUEST':
            return {
                ...state, loading: true
            };
        case 'PLACE_ORDER_SUCCESS':
            return {
                ...state, loading: false,
                success: true
            };
        case 'PLACE_ORDER_FAIL':
            return {
                ...state, loading: false,
                error: action.payload
            };
        default: return state;
    }
};
<<<<<<< HEAD
export const allUserOdersReducer = (state = {orders:[]}, action) => {
    switch (action.type) {
        case 'ALL_ORDER_REQUEST':
            return {
                ...state, loading: true
            };
        case 'ALL_ORDER_SUCCESS':
            return {
                loading: false,
                success: true,
                orders:action.payload,
            };
        case 'PLACE_ORDER_FAIL':
            return {
                loading: false,
                error: action.payload
            };
        default: return state;
=======

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case "USER_ORDER_REQUEST":
            return {
                loading: true,
                ...state,
            };
        case "USER_ORDER_SUCCESS":
            return {
                loading: false,
                success: true,
                orders: action.payload,
            };
        case "USER_ORDER_FAIL":
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
>>>>>>> 1eb188443b85fc28a9a2211b2a3211d727b6f8aa
    }
};