import React, { useState } from 'react';
import PanelAside from '../../Shared/PanelAside/PanelAside';
import { Route } from 'react-router-dom';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';
import './Customar.css';

const Customar = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  return (
    <div className="row container-fluid m-0 p-0">
      <div className="col-3 p-0 aside bg-blue">
        <PanelAside></PanelAside>
      </div>
      <div className="col-9 p-0 m-0">
        <Route path="/panel/customar/book">
          <Book
            products={products} setProducts={setProducts}
            setProduct={setProduct}
          ></Book>
        </Route>
        <Route path="/panel/customar/bookingList">
          <BookingList></BookingList>
        </Route>
        <Route path="/panel/customar/review">
          <Review product={product}></Review>
        </Route>
      </div>
    </div>
  );
};

export default Customar;