import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

function Headerbar() {
    const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      // User signed out successfully
      console.log('sign out successfully');
      navigate('/');
      // You can perform any additional actions after signing out if needed
    } catch (error) {
      // Handle sign-out errors
      console.error(error.message);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <button onClick={handleSignOut}>Sign Out</button>
    </header>
  );
}

export default Headerbar;
