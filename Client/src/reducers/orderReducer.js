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
    }
};