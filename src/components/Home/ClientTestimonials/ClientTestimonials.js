import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ClientTestimonials = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://arcane-basin-83215.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data));
  }, [setReviews, reviews]);
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container pb-3">
        <div className="px-3 pt-5 pb-5">
          <div className="text-center pt-5 pb-3">
            <h3 className="text-uppercase pb-5">Client Testimonials</h3>
          </div>
          <div className="text-center row">
            {
              reviews.map(review => {
                const {yourName, companyName, description} = review;
                return (
                  <div className="col-md-4">
                    <div className="single-service p-3 border round-10 shadow-lg">
                      <div className="pt-3 pb-2">
                        <h5 className="text-uppercase font-weight-400 text-blue"><span className="service-name-style">{yourName}</span></h5>
                        <h6 className="text-capitalize font-weight-400 pb-3 text-secondary"><span className="service-name-style">{companyName}</span></h6>
                        <p className="font-weight-300">{description}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;