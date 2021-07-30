import React, { useEffect, useState } from 'react';
import './App.css';
declare var google: any;

function App() {
  const [isSignIn, setSignIn] = useState<boolean>(false)
  useEffect(() => {
    const handleCredentialResponse = (response: any) => {
      console.log(response);
    };
    const client_id = process.env.REACT_APP_CLIENT_ID
    const callback = handleCredentialResponse;
    const auto_select = false;
    console.log(google.accounts.id.initialize)
    google.accounts.id.initialize({ client_id, callback, auto_select });
    google.accounts.id.prompt((notification: any) => {
      console.log(notification);
    });
    console.log(setSignIn)
  }, []);
  return (
    <div className="App">
      {
      isSignIn ?
        <div>You are signIn</div> :
        <div>You are not signIn</div>
      }
    </div>
  );
}

export default App;
