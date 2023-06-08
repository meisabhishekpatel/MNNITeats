
export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        variant: variant,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][variant] * quantity,
    };
    if(cartItem.quantity>10){
        alert("You can add only 10 pizzas at a time");
    }
    else{
    if(cartItem.quantity < 1){
        dispatch({type:"DELETE_FROM_CART",payload:pizza}) ;
    }
    else{
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));}
}};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({type:'DELETE_FROM_CART',payload:pizza})
    const cartItems =getState().cartReducer.cartitems; 
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
   
}
