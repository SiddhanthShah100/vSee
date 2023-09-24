import React, { useState }  from 'react';
import { Link,useNavigate  } from 'react-router-dom';
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


function RegistrationPage() {
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState('tab2');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleRegistration = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // User registered successfully
       console.log('registered successfully');
      navigate('/Home');
    } catch (error) {
      // Handle registration errors
      alert(error.message);
      console.error(error.message);
    }
  };

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
        <MDBTabsItem>
          <Link to="/">
            <MDBTabsLink>Login</MDBTabsLink>
          </Link>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  onClick={() => handleJustifyClick('tab2')}
            active={justifyActive === 'tab2'}>Register</MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent >
        <MDBTabsPane show={justifyActive === 'tab2'}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
              {/* Social sign-up buttons */}
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
          <MDBInput wrapperClass="mb-4" label="Username" id="form1" type="text" />
          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass="mb-4" label="Password" id="form1" type="password"  value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox name="flexCheck" id="flexCheckDefault" label="I have read and agree to the terms" />
          </div>
          <MDBBtn className="mb-4 w-100" onClick={handleRegistration}>Sign up</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default RegistrationPage;
