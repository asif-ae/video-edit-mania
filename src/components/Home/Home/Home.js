import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ClientTestimonials from '../ClientTestimonials/ClientTestimonials';
import Footer from '../Footer/Footer';
import HomeHeader from '../HomeHeader/HomeHeader';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import { Spinner } from 'react-bootstrap';

const Home = ({services, setServices, orderInfo, setOrderInfo}) => {
  // Spinner
  const spinner = (
    <div className="w-100">
      <div className="d-flex justify-content-center align-items-center spinner-style" style={{zIndex:"9999", minHeight:"100vh"}}>
        <Spinner animation="grow" variant="danger" />
      </div>
    </div>
  );
  const mainDiv = (
    <>
      <HomeHeader></HomeHeader>
      <Services
        services={services}
        setServices={setServices}
        orderInfo={orderInfo}
        setOrderInfo={setOrderInfo}
      ></Services>
      <WhyChooseUs></WhyChooseUs>
      <ClientTestimonials></ClientTestimonials>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  )
  return (
    <>
      <div className="container-fluid p-0 m-0">
        {
          services.length === 0 && spinner
        }
        {
          services && mainDiv
        }
      </div>
    </>
  );
};

export default Home;<HomeHeader></HomeHeader>