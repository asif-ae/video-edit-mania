import React, { useContext } from 'react';
import { Button, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import BrandIcon from '../../Shared/BrandIcon/BrandIcon';
import './Navigations.css';

const Navigations = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {loggedInUser.name || sessionStorage.getItem("name")}
    </Tooltip>
  );
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="p-0 m-0 navbar-style">
      {/* col-3 */}
      <div className="p-0 m-0 d-flex align-items-center">
        <Link to="/" className="header-brand px-3">
          <Navbar.Brand className="p-0 m-0">
            <BrandIcon></BrandIcon>
          </Navbar.Brand>
        </Link>
      </div>
      <div className="pr-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="pr-3">
          <Link to="/panel/customar/book" className="nav-style d-flex align-items-center">Book</Link>
          <Link to="/panel/customar/bookingList" className="nav-style d-flex align-items-center">Booking List</Link>
          <Link to="/panel/customar/review" className="nav-style d-flex align-items-center">Review</Link>
          <div className="nav-style">
            {
              loggedInUser.name || sessionStorage.getItem("name") ?
                <OverlayTrigger
                  placement="bottom-end"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <div className="m-auto">
                    <Link to="/panel">
                      <img
                        style={{height:"35px", borderRadius:"50%"}}
                        src={loggedInUser.photo || sessionStorage.getItem("photo")}
                        alt={loggedInUser.name || sessionStorage.getItem("name")}
                      />
                    </Link>
                  </div>
                </OverlayTrigger>
              :
              <div className="px-1"><Link to="/login"><Button variant="success">Login</Button></Link></div>
            }
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigations;