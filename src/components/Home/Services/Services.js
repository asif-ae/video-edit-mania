import { faCrop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import './Services.css';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
// import { Spinner } from 'react-bootstrap';



const Services = ({services, setServices, orderInfo, setOrderInfo}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  let [letSpring, setLetSpring] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  useEffect(() => {
    fetch('http://localhost:5555/services')
    .then(res => res.json())
    .then(data => setServices(data));
  }, [setServices]);
  console.log(services);

  // // Spinner
  // const spinner = (
  //   <div className="w-100">
  //     <div className="d-flex justify-content-center align-items-center spinner-style">
  //       <Spinner animation="grow" variant="danger" />
  //     </div>
  //   </div>
  // );
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

            {
              services.map(service => {
                const {serviceTitle, image, description, price, _id} = service;
                const handleOrder = () => {
                  const newOrder = {...orderInfo};
                  newOrder.id = _id;
                  newOrder.serviceName = serviceTitle;
                  newOrder.price = price;
                  newOrder.email = loggedInUser.email || sessionStorage.getItem("email");
                  newOrder.ownerName = loggedInUser.name || sessionStorage.getItem("name");
                  setOrderInfo(newOrder);
                }
                
                return (
                  <div className="col-md-4" key={_id}>
                    <div className="single-service p-2">
                      <Link to="/panel/customar/book">
                        <div className="service-icon d-flex justify-content-center" onClick={handleOrder}>
                          <animated.div
                            className={_id}
                            onMouseMove={({ clientX: x, clientY: y }) => setLetSpring({ xys: calc(x, y) })}
                            onMouseLeave={() => setLetSpring({ xys: [0, 0, 1] })}
                            style={{ transform: letSpring.xys.interpolate(trans), background: "none", border: "none" }}
                          >
                            <div className="main-icon">
                              <FontAwesomeIcon icon={faCrop} className="service-icon-style" />
                            </div>
                          </animated.div>
                        </div>
                      </Link>
                      <Link to="/panel/customar/book">
                        <h6 className="text-uppercase font-weight-400 pt-4 pb-3" onClick={handleOrder}>
                          <span className="service-name-style">{serviceTitle}</span>
                        </h6>
                      </Link>
                      <p className="font-weight-300">{description}<br />We provide top-notch service for import and domestic car repairs. Servicing Brakes, Tune Ups, Engine Repairs</p>
                    </div>
                  </div>
                );
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;