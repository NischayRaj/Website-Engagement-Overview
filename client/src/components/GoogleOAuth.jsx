// import React from 'react';
// import { GoogleLogin } from 'react-google-login';

// const clientId = "3502942640-2hf4ardsu0qtk5e3trrjstdmntf3phnk.apps.googleusercontent.com";

// const GoogleOAuth = ({ setIsAuthenticated }) => {
//   const onSuccess = (res) => {
//     console.log("LOGIN SUCCESS! Current user: ", res.profileobj);
//     setIsAuthenticated(prevState => true); // Update state based on the previous state
//   };
  

//   const onFailure = (res) => {
//     console.log("LOGIN FAILED! res: ", res);
//   };

//   return (
//     <div id="signInButton">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={'single_host_origin'}
//         isSignedIn={true} // Note: It's `isSignedIn`, not `issignedIn`
//       />
//     </div>
//   );
// };

// export default GoogleOAuth;
