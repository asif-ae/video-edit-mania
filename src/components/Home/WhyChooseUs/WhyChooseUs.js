import { useSpring, animated } from 'react-spring';
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  let customer = useSpring({
    number: 1000,
    from: { number: 1 },
    config: { duration: 5000, mass: 10, tension: 10, friction: 277 }
  });
  let items = useSpring({
    number: 20,
    from: { number: 1 },
    config: { duration: 5000, mass: 10, tension: 10, friction: 277 }
  });
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row d-flex align-items-center m-0 p-0">
        <div className="col-md-6">
          <div className="p-3">
            <h3 className="text-uppercase text-center">Why Choose <span className="text-blue">Us</span>?</h3>
            <hr className="w-25"/>
            <p className="font-weight-300 text-justify">Our commitment to you is to provide honest, friendly, and on-time service. Price and turnaround time may vary depending on the complexity of your project. Get up to 50% off on extras like music and stock footage if you contact me before placing your order. Every order includes unlimited revisions. If you need extra work along the way, I'll add an extra quote to the order.</p>
            <div className="row text-center">
              <div className="col-6">
                <div className="display-4 text-blue">
                  <animated.span>{customer.number.interpolate(val => Math.floor(val))}</animated.span>+
                </div>
                <div className="text">Happy Customer(s)</div>
              </div>
              <div className="col-6">
                <div className="display-4 text-blue">
                  <animated.span>{items.number.interpolate(val => Math.floor(val))}</animated.span>+
                </div>
                <div className="text">Total Service(s)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="why-choose-us-background"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;