import { faCartPlus, faClipboardList, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CustomarAside.css';

const CustomarAside = () => {
  let customarParams = useParams("/panel/customar/:customarDynamic");

  const bookClass = customarParams.customarDynamic === "book" ? "asideActive" : "";
  const bookingListClass = customarParams.customarDynamic === "bookingList" ? "asideActive" : "";
  const reviewClass = customarParams.customarDynamic === "review" ? "asideActive" : "";

  console.log(customarParams.customarDynamic);
  const asideListFunction = (typeName, icon, mainName) => {
    return (
      <Link to={`/panel/customar/${typeName}`}>
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
      <div className={`customar-link-list ${bookClass}`}>
        {asideListFunction("book", faCartPlus, "Book")}
      </div>
      <div className={`customar-link-list ${bookingListClass}`}>
        {asideListFunction("bookingList", faClipboardList, "Booking list")}
      </div>
      <div className={`customar-link-list ${reviewClass}`}>
        {asideListFunction("review", faCommentsDollar, "Review")}
      </div>
    </>
  );
};

export default CustomarAside;