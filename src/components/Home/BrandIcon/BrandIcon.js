import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BrandIcon.css';

const BrandIcon = () => {
  return (
    <div className="d-flex brand-style">
      <div><FontAwesomeIcon icon={faPlay} className="my-brand-icon" /></div>
      <div className="my-brand-name">
        <div className="my-brand-name-top">VideoEdit</div>
        <div className="my-brand-name-bottom">Mania</div>
      </div>
    </div>
  );
};

export default BrandIcon;