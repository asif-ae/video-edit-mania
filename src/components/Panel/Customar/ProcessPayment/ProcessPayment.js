import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';


const stripePromise = loadStripe('pk_test_51Ig2PmHz4SzOgrzHMr0kwNsWNHcSrqCXWXanBalTSBwO67nSYH8JjqJZrtde8OphNIiEBLNVND9UCqTnPo3x2xTh00ehv3Hg8P');

const ProcessPayment = () => {
  // React Hook Form Dependency
  const { register } = useForm();

  // Form Input Function
  const formInput = (formName, labelName, valueDefault) => {
    return (
      <div className="col-6 mb-3">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" defaultValue={valueDefault} {...register(formName, { required: true })} />
      </div>
    );
  }
  return (
    <Elements stripe={stripePromise}>
      <div className="row">
        <div className="col-6 mb-3">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input name="cardNumber" id="cardNumber" placeholder={`Enter Card Number`} className="form-control" defaultValue="" {...register("cardNumber", { required: true })} />
        </div>
        {formInput("expireDate", "Expire Date (MM/YY)", "")}
        {formInput("CVC", "CVC", "")}
      </div>
    </Elements>
  );
};

export default ProcessPayment;