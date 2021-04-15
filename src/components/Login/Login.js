import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  // Use History Hook
  const history = useHistory();
  // Use Location Hook
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // This useState stored users data
  const [user, setUser] = useState({
    error: ''
  });
  // Destructuring from user useState
  const {error} = user;

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    // Created a function for simplicity
    firebaseAuth(googleProvider);
  }

  // Firebase Authentication Function
  const firebaseAuth = (providers) => {
    firebase
    .auth()
    .signInWithPopup(providers)
    .then((result) => {
      const getUser = result.user;
      const {displayName, photoURL, email} = getUser;
      const signedInUser = {name: displayName, photo: photoURL, email};
      setLoggedInUser(signedInUser);
      history.replace(from);
    }).catch((error) => {
      const errorMessage = error.message;
      const newUserInfo = {...user};
      newUserInfo.error = errorMessage;
      setUser(newUserInfo);
    });
  }

  return (
    <div className="container">
      <div className="m-3 border rounded">
        <div className="p-5">
          <div className="div-input">
            <h3>Login</h3>
          </div>
        </div>

        {/* Show error messages */}
        <p className="text-center text-danger">{error}</p>
        {/* Show error messages */}
        
        <div className="d-flex justify-content-center my-3 pb-5">
          <div className="rounded-pill google-box" onClick={handleGoogleSignIn}>
            <div className="p-2 d-flex align-items-center">
              <div className="d-inline-block rounded-circle icon-style google-icon">
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
              </div>
              <div className="d-inline-block mx-3 px-3 text-size google-text">Continue with Google</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;