import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ClientTestimonials from '../ClientTestimonials/ClientTestimonials';
import Footer from '../Footer/Footer';
import HomeHeader from '../HomeHeader/HomeHeader';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = ({services, setServices, orderInfo, setOrderInfo}) => {
  return (
    <div className="container-fluid p-0 m-0">
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
    </div>
  );
};

export default Home;<HomeHeader></HomeHeader>