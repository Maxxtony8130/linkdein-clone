import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import {  login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
       dispatch(login({
        email:userAuth.email,
        uid:userAuth.uid,
        displayName:userAuth.displayName,
        photoUrl:userAuth.photoUrl,
       }))
      } else {
       dispatch(logout())
      }
    })
  }, [dispatch]);
  return ( 
    <>
      {!user ? (
        <Login />
        ) : (
        <div className="app">
          <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
      </div> 
      )}
      </>
  
  );
}

export default App;
