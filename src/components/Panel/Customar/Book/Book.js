import { faCcPaypal, faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = ({orderInfo, setOrderInfo}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {serviceName, price} = orderInfo;
  const handleOrder = () => {
    const newOrder = {...orderInfo};
    newOrder.ownerName = loggedInUser.name;
    newOrder.email = loggedInUser.email;
    setOrderInfo(newOrder);

    // Send Orders
    fetch('/addOrders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  // Form Functions
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const serviceData = {
      serviceTitle: data.serviceTitle,
      description: data.description,
      price: data.price,
      image: "imageURL"
    }
    const serverURL = 'http://localhost:5555/addService';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(serviceData)
    })
    .then(res => {
      console.log('server side respose:', res);
    });
  }

  // Form Input Function
  const formInput = (formName, labelName, valueDefault) => {
    return (
      <div className="col-6 mb-3">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" defaultValue={valueDefault} {...register(formName, { required: true })} />
      </div>
    );
  }

  const disabledFormInput = (formName, labelName, valueDefault) => {
    return (
      <div className="col-6 mb-3">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" defaultValue={valueDefault} disabled {...register(formName, { required: true })} />
      </div>
    );
  }

  // Handle Click function will clear everything
  const handleClick = () => {
    document.getElementById("yourName").value = "";
    document.getElementById("yourEmail").value = "";
    document.getElementById("serviceTitle").value = "";
    document.getElementById("price").value = "";
  }

  const [payWith, setPayWith] = useState(true);
  const [paymentError, setPaymentError] = useState(null);

  return (
    <div>
      <PanelHeader customarPageName="Book"></PanelHeader>
      <div>
        <div className="p-5 bg-light">
          
          <div className="d-flex justify-content-around align-items-center">

            {/* Choose Payment Method */}
            <h4 className="text-blue">Pay with:</h4>

            {/* This is working for Cradit Card */}
            {
              payWith ?
              <div className="form-check">
                <input className="form-check-input pointer-cursor" onClick={() => setPayWith(true)} type="radio" name="payWith" id="creditCard" value="Credit Card" defaultChecked />
                <label className="form-check-label pointer-cursor" htmlFor="creditCard">
                  <h4 className="text-blue"><FontAwesomeIcon icon={faCcStripe} /> Credit Card</h4>
                </label>
              </div>
              :
              <div className="form-check">
                <input className="form-check-input pointer-cursor" onClick={() => setPayWith(true)} type="radio" name="payWith" id="creditCard" value="Credit Card" />
                <label className="form-check-label pointer-cursor" htmlFor="creditCard">
                  <h4 className="text-secondary"><FontAwesomeIcon icon={faCcStripe} /> Credit Card</h4>
                </label>
              </div>
            }
            {/* This is working for Cradit Card */}

            {/* This is working for PayPal */}
            {
              !payWith ?
              <div className="form-check">
                <input className="form-check-input pointer-cursor" onClick={() => setPayWith(false)} type="radio" name="payWith" id="payPal" value="PayPal" defaultChecked />
                <label className="form-check-label pointer-cursor" htmlFor="payPal">
                  <h4 className="text-blue"><FontAwesomeIcon icon={faCcPaypal} /> PayPal</h4>
                </label>
              </div>
              :
              <div className="form-check">
                <input className="form-check-input pointer-cursor" onClick={() => setPayWith(false)} type="radio" name="payWith" id="payPal" value="PayPal" />
                <label className="form-check-label pointer-cursor" htmlFor="payPal">
                  <h4 className="text-secondary"><FontAwesomeIcon icon={faCcPaypal} /> PayPal</h4>
                </label>
              </div>
            }
            {/* This is working for PayPal */}

          </div>
          {/* Choose Payment Method */}

          {/* Payment Error */}
          {
            paymentError && <h3 className="text-danger p-3 text-center">{paymentError}</h3>
          }
          {/* Payment Error */}

          {/* Enter Payment Details */}
          <>
            {/* This is working for Cradit Card */}
            { payWith && (
              <>
                <ProcessPayment paymentError={paymentError} setPaymentError={setPaymentError}></ProcessPayment>
                <div class="alert alert-warning text-center" role="alert">Please add a debit or credit card to complete your purchase.</div>
              </>
            ) }
            {/* This is working for Cradit Card */}

            {/* This is working for PayPal */}
            { !payWith && <h3 className="text-danger p-3 text-center">Pay with PayPal is not available right now. Please choose one from other payment methods.</h3> }
            {/* This is working for PayPal */}
          </>
          {/* Enter Payment Details */}


          {/* Confirm Order Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
            <div className="row">
              {formInput("yourName", "Your Name", loggedInUser.name)}
              {formInput("yourEmail", "Your Email", loggedInUser.email)}
              {disabledFormInput("serviceTitle", "Service Name", serviceName)}
              {disabledFormInput("price", "Price", price)}
            </div>

            <div className="text-right">
              <Link to="/panel/customar/bookingList">
                <button onClick={() => { handleClick(); handleOrder(); }} className="btn btn-success">Checkout</button>
              </Link>
            </div>
          </form>
          {/* Confirm Order Form */}
          
        </div>
      </div>
    </div>
  );
};

export default Book;