import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import PanelHeader from '../../Shared/PanelHeader/PanelHeader';

const ManageServices = ({services, setServices}) => {
  useEffect(() => {
    fetch('https://arcane-basin-83215.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setServices(data));
  }, [setServices, services]);

  const deleteService = (id) => {
    console.log(id);
    fetch(`https://arcane-basin-83215.herokuapp.com/serviceDelete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
      console.log('Deleted successfully:', result)
    })
  }

  const spinner = (
    <div className="w-100 p-5">
      <div className="d-flex justify-content-center align-items-center spinner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );
  return (
    <div>
      <PanelHeader customarPageName="Manage Services"></PanelHeader>
      <div className="p-2 bg-light">
        <div className="p-3 bg-white round-10">

          {/* Table Header */}
          <div className="p-3 bg-light round-10">
            <div className="row text-center">
              <div className="col-5">
                <h5 className="m-0">Service Title</h5>
              </div>
              <div className="col-5">
                <h5 className="m-0">Description</h5>
              </div>
              <div className="col-2">
                <h5 className="m-0">Action</h5>
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
            services.map(service => {
              const {serviceTitle, description, _id} = service;
              
              return (
                <div className="p-3" key={_id}>
                  <div className="row">
                    <div className="col-5">
                      <p>{serviceTitle}</p>
                    </div>
                    <div className="col-5">
                      <p>{description}</p>
                    </div>
                    <div className="col-2 d-flex justify-content-center m-0 p-0">
                      <button className="btn btn-danger" onClick={() => deleteService(_id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
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
            <div>Service delete function is available now. You have to click the <b>"DELETE"</b> icon for delete a item.</div>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;