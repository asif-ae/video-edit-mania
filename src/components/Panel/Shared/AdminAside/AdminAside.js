import { faPen, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const AdminAside = () => {
  let adminParams = useParams("/panel/admin/:adminDynamic");

  const orderListClass = adminParams.adminDynamic === "orderList" ? "asideActive" : "";
  const addServiceClass = adminParams.adminDynamic === "addService" ? "asideActive" : "";
  const reviewClass = adminParams.adminDynamic === "review" ? "asideActive" : "";

  console.log(adminParams.adminDynamic);
  const asideListFunction = (typeName, icon, mainName) => {
    return (
      <Link to={`/panel/admin/${typeName}`}>
          <div id={typeName} className="row m-0 p-0">
            <div className="col-2 d-flex justify-content-end align-self-center">
              <div className="py-3 pr-0">
                <FontAwesomeIcon icon={icon} />
              </div>
            </div>
            <div className="col-10 d-flex justify-content-start align-self-center">
              <div className="py-3 pl-0">
                {mainName}
              </div>
            </div>
          </div>
        </Link>
    );
  }
  return (
    <>
      <div className={`customar-link-list ${orderListClass}`}>
        {asideListFunction("orderList", faThLarge, "Order List")}
      </div>
      <div className={`customar-link-list ${addServiceClass}`}>
        {asideListFunction("addService", faPlus, "Add Service")}
      </div>
      <div className={`customar-link-list ${reviewClass}`}>
        {asideListFunction("review", faPen, "Review")}
      </div>
      <div className={`customar-link-list ${reviewClass}`}>
        {asideListFunction("review", faPen, "Review")}
      </div>
    </>
  );
};

export default AdminAside;