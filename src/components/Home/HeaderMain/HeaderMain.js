import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <main className="background-image">
      <div className="overlay">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-md-6"></div>
            <div className="col-md-6 d-flex align-items-center h-100 bg-light-transparent">
              <div className="text-right text-white text-uppercase">
                <h1 className="font-weight-400 line-height">Professional</h1>
                <h1 className="font-weight-700 line-height">{`&`} creative video editing</h1>
                <p className="text-capitalize">Our main goal is to create <b>high-quality</b> work within <b>the shortest time</b> possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;