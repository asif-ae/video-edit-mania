import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import BrandIcon from '../../../Shared/BrandIcon/BrandIcon';
import AdminAside from '../AdminAside/AdminAside';
import CustomarAside from '../CustomarAside/CustomarAside';

const PanelAside = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const rawEmail = loggedInUser.email || sessionStorage.getItem("email");
    fetch('https://arcane-basin-83215.herokuapp.com/isAdmin?email='+rawEmail)
    .then(res => res.json())
    .then(data => setAdminData(data))
  }, [loggedInUser.email]);

  return (
    <>
      <div className="customar-brand-list">
        <Link to="/"><BrandIcon></BrandIcon></Link>
      </div>
      <CustomarAside></CustomarAside>
      {
        adminData && <AdminAside></AdminAside>
      }
    </>
  );
};

export default PanelAside;