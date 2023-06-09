import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import{Button} from 'react-bootstrap';
import{useDispatch} from 'react-redux';
import{placeOrder} from '../actions/orderAction';
const Checkout = ({subTotal}) => {
    const dispatch = useDispatch()
   const tokenHandler= (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token)
   };
  return (
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51NH2cbSA65ARtDa4x6X4onobNXy5dM2RvVww4wPCa6esJmnkGJW9NpfmmPm081turGvrvcY0NgrjCznOrv5MpHsr00OkEsO4G2'
    currency='INR'
    >
        <Button>Pay Now</Button>
    </StripeCheckout>
  )
}

export default Checkout
