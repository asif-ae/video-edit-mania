import { faCcPaypal, faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = ({orderInfo, setOrderInfo}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  console.log(orderInfo.id);

  const {serviceName, price} = orderInfo;
  const handleOrder = () => {
    const newOrder = {...orderInfo};

    // Send Orders
    fetch('http://localhost:5555/addOrders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  const disabledFormInput = (formName, labelName, valueDefault) => {
    return (
      <div className="col-6 mb-3">
        <label htmlFor={formName} className="form-label">{labelName}</label>
        <input name={formName} id={formName} placeholder={`Enter ${labelName}`} className="form-control" defaultValue={valueDefault} disabled />
      </div>
    );
  }

  // Handle Click function will clear everything
  // const handleClick = () => {
  //   document.getElementById("yourName").value = "";
  //   document.getElementById("yourEmail").value = "";
  //   document.getElementById("serviceTitle").value = "";
  //   document.getElementById("price").value = "";
  //   document.getElementById("paymentID").value = "";
  // }

  const [payWith, setPayWith] = useState(true);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSussess, setPaymentSussess] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <PanelHeader customarPageName="Book"></PanelHeader>
      <div>
        <div className="p-5 bg-light">
          
          {
            !paymentSussess && (
              <>
                <h4>Debit or Credit Card Informations</h4>
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
      
                  {/* Choose Payment Method */}
                </div>


                {/* Enter Payment Details */}
                <>
                  {/* This is working for Cradit Card */}
                  { payWith && (
                    <>
                      <ProcessPayment
                        paymentError={paymentError} setPaymentError={setPaymentError}
                        paymentSussess={paymentSussess} setPaymentSussess={setPaymentSussess}
                        orderInfo={orderInfo} setOrderInfo={setOrderInfo}
                      ></ProcessPayment>
                      <div class="alert alert-warning text-center" role="alert">Please add a debit or credit card to complete your purchase.</div>
                    </>
                  ) }
                  {/* This is working for Cradit Card */}
      
                  {/* This is working for PayPal */}
                  { !payWith && <h3 className="text-danger p-3 text-center">Pay with PayPal is not available right now. Please choose one from other payment methods.</h3> }
                  {/* This is working for PayPal */}
                </>
                {/* Enter Payment Details */}
              </>
            )
          }



          {
            paymentSussess && (
              <>
                <h4>User Informations</h4>
                {/* Confirm Order Form */}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {disabledFormInput("yourName", "Your Name", orderInfo.ownerName)}
                    {disabledFormInput("yourEmail", "Your Email", orderInfo.email)}
                    {disabledFormInput("serviceTitle", "Service Name", serviceName)}
                    {disabledFormInput("price", "Price", price)}
                    {disabledFormInput("paymentID", "Your Payment ID", orderInfo.paymentID)}
                  </div>

                  <div className="p-3">
                    {
                      !orderInfo.id && <div class="alert alert-warning text-center" role="alert">Please select a service from Homepage's <b>OUR SERVICES</b> section.</div>
                    }
                    {
                      !orderInfo.email && !orderInfo.ownerName && <div class="alert alert-warning text-center" role="alert">Please <b>Login</b> to your account.</div>
                    }
                  </div>

                  <div className="text-right">
                    {/* <Link to="/panel/customar/bookingList"> */}
                      {
                        orderInfo.id && orderInfo.email && orderInfo.ownerName
                        && <input onClick={() => { handleOrder(); /*handleClick();*/ }} type="submit" className="btn btn-success" value="Submit" />
                      }
                      {
                        !orderInfo.id && !orderInfo.email && !orderInfo.ownerName
                        && <input type="submit" className="btn btn-success disabled" value="Submit" />
                      }
                    {/* </Link> */}
                  </div>
                </form>
                {/* Confirm Order Form */}
              </>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Book;