import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="about-background d-flex align-items-center">
        <div className="row p-0 m-0">
          <div className="pl-2">
            <div className="py-3 col-8">
              <h2 className="text-uppercase text-blue py-3">About Us</h2>
              <h5 className="text-capitalize text-blue font-weight-300 pb-3">We create high resolution video for you and you can share the video anywhare in the world you want. We also create business related videos, so you can focus on your business without any interruption.</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, placeat laudantium praesentium, iusto qui voluptates esse autem doloremque expedita ipsa necessitatibus aliquam alias reprehenderit repellat aperiam asperiores cum fugit totam atque dolorem voluptatum cumque. Officiis modi nobis inventore similique eveniet sunt blanditiis quas et!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;