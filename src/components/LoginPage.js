import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function LoginPage() {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // User logged in successfully
      console.log('logged in  successfully');
      navigate('/Home'); // Redirect to the home page
    } catch (error) {
      // Handle login errors
      console.error(error.message);
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick('tab1')}
            active={justifyActive === 'tab1'}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <Link to="/RegistrationPage">
            <MDBTabsLink>Register</MDBTabsLink>
          </Link>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
              {/* Social login buttons */}
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email"  value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password"  value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>
          <p className="text-center">
            Not a member? <Link to="/RegistrationPage">Register</Link>
          </p>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default LoginPage;
