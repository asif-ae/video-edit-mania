import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../../App';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const yourEmail = loggedInUser.email || sessionStorage.getItem("email");
  console.log(yourEmail);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('https://arcane-basin-83215.herokuapp.com/orders?email='+yourEmail)
    .then(res => res.json())
    .then(data => setOrders(data));
  }, [yourEmail]);
  console.log(orders);
  return (
    <div>
      <PanelHeader customarPageName="Booking List"></PanelHeader>
      <div className="p-3 bg-light">
        <div className="row p-0 m-0">
          {
            orders.map(order => {
              const {_id, status, serviceName, image, serviceDetail} = order;
              console.log(status);
              const pending = status === "Pending";
              const onGoing = status === "On Going";
              const done = status === "Done";
              return (
                <div className="col-md-6 p-3" key={_id}>
                  <div className="p-3 bg-white round-10">

                    <div>
                      <div className="row p-0 m-0">
                        <div className="col-6">
                          <div className="py-3">
                            {
                              pending && (
                                <div className="p-3 bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{width:"100px", height:"100px"}}>
                                  <img src={image} alt={serviceName} style={{width:"100px", height:"100px", padding:"5px"}} className="rounded-circle" />
                                </div>
                              )
                            }
                            {
                              onGoing && (
                                <div className="p-3 bg-warning rounded-circle d-flex justify-content-center align-items-center" style={{width:"100px", height:"100px"}}>
                                  <img src={image} alt={serviceName} style={{width:"100px", height:"100px", padding:"5px"}} className="rounded-circle" />
                                </div>
                              )
                            }
                            {
                              done && (
                                <div className="p-3 bg-success rounded-circle d-flex justify-content-center align-items-center" style={{width:"100px", height:"100px"}}>
                                  <img src={image} alt={serviceName} style={{width:"100px", height:"100px", padding:"5px"}} className="rounded-circle" />
                                </div>
                              )
                            }
                          </div>
                        </div>
                        <div className="col-6 text-right">
                          {
                            pending && <button className="btn btn-danger w-75">{status}</button>
                          }
                          {
                            onGoing && <button className="btn btn-warning w-75">{status}</button>
                          }
                          {
                            done && <button className="btn btn-success w-75">{status}</button>
                          }
                        </div>
                      </div>
                    </div>

                    <div className="px-3 py-2">
                      <h4>{serviceName}</h4>
                    </div>

                    <div className="px-3">
                      <h5 className="font-weight-300 text-justify">{serviceDetail}</h5>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default BookingList;