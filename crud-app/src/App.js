import { BrowserRouter } from "react-router-dom";
import AppWithRouterAccess from "./AppWithRouterAccess ";
import Footer from "./Component/footer/Footer";
import SignInSide from "./Component/SignIn";
import SignUp from "./Component/SignUp";

// debugger;
const loginURL = "http://localhost:3000/login"
const signupURL = "http://localhost:3000/signup"

// function session() {
//   sessionStorage.setItem('Name', '');
//   if (sessionStorage.getItem('Name') == '') {
//     if (window.location = loginURL) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
// }


function App() {
  // console.log(sessionStorage.length);
  if (localStorage.getItem('Name') == '' | localStorage.length == 0) {
    if (window.location == loginURL) {
      return (
        <SignInSide></SignInSide>
      )
    }
    else if (window.location == signupURL) {
      return (
        <SignUp></SignUp>
      )
    }
    else {
      window.location = loginURL;
    }
  }
  // if (window.location == loginURL) {
  //   return (
  //     <SignInSide></SignInSide>
  //   )
  // }
  else {
    return (
      <BrowserRouter basename="/">
        <AppWithRouterAccess />
        <Footer/>
      </BrowserRouter>
    );
  }
}


export default App;
