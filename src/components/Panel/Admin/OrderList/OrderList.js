import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';

const OrderList = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5555/orders?email=tushar.dnjbn@gmail.com')
    .then(res => res.json())
    .then(data => setServices(data));
  }, [setServices, services]);

  // const loadProduct = (id) => {
  //   fetch(`https://mighty-lowlands-97984.herokuapp.com/product/${id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setProduct(data);
  //   })
  // }

  const spinner = (
    <div className="w-100">
      <div className="d-flex justify-content-center align-items-center spinner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );

  return (
    <div>
      <PanelHeader customarPageName="Order List"></PanelHeader>
      <div className="p-2 adminLightBG">
        <div className="p-3 bg-white round-10">

          {/* Table Header */}
          <div className="p-3 bg-light round-10">
            <div className="row">
              <div className="col-md-2">
                <h5 className="m-0">Name</h5>
              </div>
              <div className="col-md-3">
                <h5 className="m-0">Email</h5>
              </div>
              <div className="col-md-3">
                <h5 className="m-0">Service Name</h5>
              </div>
              <div className="col-md-2">
                <h5 className="m-0">Pay with</h5>
              </div>
              <div className="col-md-2">
                <h5 className="m-0">Status</h5>
              </div>
            </div>
          </div>

          {/* Spinner */}
            {
              services.length === 0 && spinner
            }
          {/* Spinner */}

          {/* Table Body */}
          {
            services.map(product => {
              const {ownerName, email, payWith, _id, serviceName, status} = product;
              
              return (
                <div className="p-3" key={_id}>
                  <div className="row">
                    <div className="col-md-2">
                      <p>{ownerName}</p>
                    </div>
                    <div className="col-md-3">
                      <p>{email}</p>
                    </div>
                    <div className="col-md-3">
                      <p>{serviceName}</p>
                    </div>
                    <div className="col-md-2">
                      <p>{payWith}</p>
                    </div>
                    <div class="form-group text-center d-flex m-0 p-0 col-md-2">
                      <select id="inputState" class="form-control">
                        {
                          status === "Pending" ?
                          <option defaultValue="Pending" selected>Pending</option> :
                          <option defaultValue="Pending">Pending</option>
                        }
                        {
                          status === "On Going" ?
                          <option defaultValue="On Going" selected>On Going</option> :
                          <option defaultValue="On Going">On Going</option>
                        }
                        {
                          status === "Done" ?
                          <option defaultValue="Done" selected>Done</option> :
                          <option defaultValue="Done">Done</option>
                        }
                      </select>
                    </div>
                  </div>
                </div>
              );
            })
          }
          {/* Table Body */}
        </div>
        <div className="d-flex justify-content-center text-center mt-5">
          <Alert variant="warning" className="w-75">
            <div>Product edit function is available now. You have to click the <b>"EDIT"</b> icon for edit a item.</div>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default OrderList;