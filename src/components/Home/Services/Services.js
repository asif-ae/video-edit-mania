import { faCrop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Services = () => {
  const [props1, setProps1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [props2, setProps2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [props3, setProps3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="py-5 px-3">
          <div className="text-center">
            <h3 className="text-uppercase">Our services</h3>
            <hr className="w-25" />
            <p>Our professionals will create social media ads (i.e. Facebook, Instagram, Youtube, etc.), simple 2D animations, corporate or business promos, etc.</p>
          </div>

          <div className="text-center row">
            <div className="col-md-4">
              <div className="single-service p-2">
                <animated.div
                  className="card"
                  onMouseMove={({ clientX: x, clientY: y }) => setProps1({ xys: calc(x, y) })}
                  onMouseLeave={() => setProps1({ xys: [0, 0, 1] })}
                  style={{ transform: props1.xys.interpolate(trans), background: "none", border: "none" }}
                >
                  <div className="service-icon d-flex justify-content-center">
                    <div className="main-icon">
                      <FontAwesomeIcon icon={faCrop} className="service-icon-style" />
                    </div>
                  </div>
                  <h6 className="text-uppercase font-weight-400 pt-4 pb-3"><span className="service-name-style">Trim {`&`} slice</span></h6>
                  <p className="font-weight-300">We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs</p>
                </animated.div>
              </div>
            </div>
            
            <div className="col-md-4">
              <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => setProps2({ xys: calc(x, y) })}
                onMouseLeave={() => setProps2({ xys: [0, 0, 1] })}
                style={{ transform: props2.xys.interpolate(trans), background: "none", border: "none" }}
              >
                <div className="single-service p-2">
                  <div className="service-icon d-flex justify-content-center">
                    <div className="main-icon">
                      <FontAwesomeIcon icon={faCrop} className="service-icon-style" />
                    </div>
                  </div>
                  <h6 className="text-uppercase font-weight-400 pt-4 pb-3"><span className="service-name-style">Trim {`&`} slice</span></h6>
                  <p className="font-weight-300">We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs</p>
                </div>
              </animated.div>
            </div>
            
            <div className="col-md-4">
              <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => setProps3({ xys: calc(x, y) })}
                onMouseLeave={() => setProps3({ xys: [0, 0, 1] })}
                style={{ transform: props3.xys.interpolate(trans), background: "none", border: "none" }}
              >
                <div className="single-service p-2">
                  <div className="service-icon d-flex justify-content-center">
                    <div className="main-icon">
                      <FontAwesomeIcon icon={faCrop} className="service-icon-style" />
                    </div>
                  </div>
                  <h6 className="text-uppercase font-weight-400 pt-4 pb-3"><span className="service-name-style">Trim {`&`} slice</span></h6>
                  <p className="font-weight-300">We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs</p>
                </div>
              </animated.div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;