import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loader from './Loader';
import Error from './Error';
import Success from './Success';
const Checkout = ({ subTotal }) => {
  const orderState = useSelector(state => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token)
  };
  return (
    <>
      {loading && (<Loader />)}
      {error && (<Error error="something went worng" />)}
      {success && (<Success success="order successfull" />)}
      < StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51NH2cbSA65ARtDa4x6X4onobNXy5dM2RvVww4wPCa6esJmnkGJW9NpfmmPm081turGvrvcY0NgrjCznOrv5MpHsr00OkEsO4G2'
        currency='INR'
      >
        <Button>Pay Now</Button>
      </StripeCheckout >
    </>
  );
};

export default Checkout
