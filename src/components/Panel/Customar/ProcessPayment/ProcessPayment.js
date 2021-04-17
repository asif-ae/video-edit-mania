import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm/PaymentForm';


const stripePromise = loadStripe('pk_test_51Ig2PmHz4SzOgrzHMr0kwNsWNHcSrqCXWXanBalTSBwO67nSYH8JjqJZrtde8OphNIiEBLNVND9UCqTnPo3x2xTh00ehv3Hg8P');

const ProcessPayment = ({paymentError, setPaymentError}) => {
  
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm paymentError={paymentError} setPaymentError={setPaymentError}></PaymentForm>
    </Elements>
  );
};

export default ProcessPayment;