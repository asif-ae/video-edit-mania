import React from 'react';
import { Link } from 'react-router-dom';
import BrandIcon from '../../../Shared/BrandIcon/BrandIcon';
import AdminAside from '../AdminAside/AdminAside';
import CustomarAside from '../CustomarAside/CustomarAside';

const PanelAside = () => {
  return (
    <>
      <div className="customar-brand-list">
        <Link to="/"><BrandIcon></BrandIcon></Link>
      </div>
      <CustomarAside></CustomarAside>
      <AdminAside></AdminAside>
    </>
  );
};

export default PanelAside;