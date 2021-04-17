import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';

const Book = ({orderInfo, setOrderInfo}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {productName, quantity, price} = orderInfo;
  const handleOrder = () => {
    const newOrder = {...orderInfo};
    newOrder.date = new Date();
    newOrder.ownerName = loggedInUser.name;
    newOrder.email = loggedInUser.email;
    setOrderInfo(newOrder);

    // Send Orders
    fetch('https://mighty-lowlands-97984.herokuapp.com/addOrders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }
  return (
    <div>
      <PanelHeader customarPageName="Book"></PanelHeader>
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-6">
                <h5 className="m-0">Owner Name: {loggedInUser.name}</h5>
              </div>
              <div className="col-md-6 text-right">
                <h5 className="m-0">Email Address: {loggedInUser.email}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-header text-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-7">
                <p className="m-0">Product Name</p>
              </div>
              <div className="col-md-3">
                <p className="m-0">Quantity</p>
              </div>
              <div className="col-md-2">
                <p className="m-0">Price</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body text-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-7">
                <p className="m-0">{productName}</p>
              </div>
              <div className="col-md-3">
                <p className="m-0">{quantity}</p>
              </div>
              <div className="col-md-2">
                <p className="m-0">{price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer bg-transparent border-success">
          <div className="round-10">
            <div className="row">
              <div className="col-md-10">
                <p className="m-0"><b>Total</b></p>
              </div>
              <div className="col-md-2">
                <p className="m-0"><b>${price}</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <Link to="/panel/customar/bookingList">
          <button onClick={handleOrder} className="btn btn-success">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;