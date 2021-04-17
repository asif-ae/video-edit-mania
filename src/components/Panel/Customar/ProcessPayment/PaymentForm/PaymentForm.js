import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useMemo } from 'react';
import useResponsiveFontSize from './useResponsiveFontSize';
import './PaymentForm.css';

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const PaymentForm = ({paymentError, setPaymentError, paymentSussess, setPaymentSussess, orderInfo, setOrderInfo}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    payload.error && setPaymentSussess(null);
    payload.error && setPaymentError(payload.error.message);
    payload.paymentMethod && setPaymentError(null);
    payload.paymentMethod && setPaymentSussess(payload.paymentMethod.id);
    console.log("[PaymentMethod]", payload);
    if (payload.paymentMethod) {
      const newOrder = {...orderInfo};
      newOrder.paymentID = payload.paymentMethod.id;
      setOrderInfo(newOrder);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <label className="col-6 stripe-lebel">
        Card details
        <CardElement
          options={options}
          onReady={() => {
            console.log("CardElement [ready]");
          }}
          onChange={event => {
            console.log("CardElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardElement [blur]");
          }}
          onFocus={() => {
            console.log("CardElement [focus]");
          }}
        />
      </label>
      <div className="col-md-6 text-center pt-4">
        <button type="submit" disabled={!stripe} className="stripe-btn">
          Pay
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;