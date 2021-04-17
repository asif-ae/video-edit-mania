import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PanelAside from '../../Shared/PanelAside/PanelAside';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
  const [services, setServices] = useState([]);
  return (
    <div className="row container-fluid m-0 p-0">
      <div className="col-3 p-0 aside bg-blue">
        <PanelAside></PanelAside>
      </div>
      <div className="col-9 p-0 m-0">
        <Route path="/panel/admin/OrderList">
          <OrderList
          ></OrderList>
        </Route>
        <Route path="/panel/admin/AddService">
          <AddService></AddService>
        </Route>
        <Route path="/panel/admin/MakeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/panel/admin/ManageServices">
          <ManageServices services={services} setServices={setServices}></ManageServices>
        </Route>
      </div>
    </div>
  );
};

export default Admin;