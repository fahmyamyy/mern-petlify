// import { BrowserRouter } from "react-router-dom";
// import AppWithRouterAccess from "./AppWithRouterAccess ";
// import SignInSide from "./Component/SignIn";
// import SignUp from "./Component/SignUp";

// function session() {
//   sessionStorage.setItem('Name', '');
//   const loginURL = "http://localhost:3000/login"
//   const signupURL = "http://localhost:3000/signup"

//   if (window.location != loginURL) {
//     window.location.replace(loginURL);
//   }
//   else if (window.location == loginURL) {
//     login();
//   }
//   else if (window.location == signupURL) {
//     signUp();
//   }
//   else {
//     return (
//       <BrowserRouter basename="/">
//         <AppWithRouterAccess />
//       </BrowserRouter>
//     );
//   }

// }

// function login() {
//   return (
//     <SignInSide></SignInSide>
//   )
// }

// function signUp() {
//   return (
//     <SignUp></SignUp>
//   )
// }



// function App() {
//   session();
// }

// export default App;
