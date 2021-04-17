import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm/PaymentForm';


const stripePromise = loadStripe('pk_test_51Ig2PmHz4SzOgrzHMr0kwNsWNHcSrqCXWXanBalTSBwO67nSYH8JjqJZrtde8OphNIiEBLNVND9UCqTnPo3x2xTh00ehv3Hg8P');

const ProcessPayment = ({paymentError, setPaymentError, paymentSussess, setPaymentSussess, orderInfo, setOrderInfo}) => {
  
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm
        paymentError={paymentError} setPaymentError={setPaymentError}
        paymentSussess={paymentSussess} setPaymentSussess={setPaymentSussess}
        orderInfo={orderInfo} setOrderInfo={setOrderInfo}
      ></PaymentForm>
      
      {/* Payment Error */}
      {
        paymentError && <h3 className="text-danger p-3 text-center">{paymentError}</h3>
      }
      {/* Payment Error */}
    </Elements>
  );
};

export default ProcessPayment;