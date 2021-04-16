import React, { useContext } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const PanelHeader = ({customarPageName}) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {loggedInUser.name}
    </Tooltip>
  );
  return (
    <div className="row p-0 m-0">
      <div className="col-6 p-4">
        <h3>{customarPageName}</h3>
      </div>
      <div className="col-6 p-4 d-flex justify-content-end">
        <OverlayTrigger
          placement="bottom-end"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <div>
            <Link to="/panel/customar/book">
              <img
                style={{height:"35px", borderRadius:"50%"}}
                src={loggedInUser.photo}
                alt={loggedInUser.name}
              />
            </Link>
          </div>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default PanelHeader;