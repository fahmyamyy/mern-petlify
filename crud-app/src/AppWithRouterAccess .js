import React from "react";
import { Route, useHistory, Switch, BrowserRouter } from "react-router-dom";

import AllUsers from "./Component/user/AllUsers";
import AddUser from "./Component/user/AddUser";
import EditUser from "./Component/user/EditUser";
import AllPets from "./Component/pet/AllPets";
import AddPet from "./Component/pet/AddPet";
import EditPet from "./Component/pet/EditPet";
import Loveds from "./Component/loved/Loved"
import NavBar from "./Component/navbar/Navbar";
import NotFound from "./Component/NotFound";
// import CodeForInterview from "./Component/CodeForInterview";
import SignInSide from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Profile from "./Component/Profile";
import EditProfile from "./Component/EditProfile";

const AppWithRouterAccess = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={SignInSide} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={AllPets} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route exact path="/users/all" component={AllUsers} />
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/pets/all" component={AllPets} />
        <Route exact path="/pets/add" component={AddPet} />
        <Route exact path="/pets/edit/:id" component={EditPet} />
        <Route exact path="/loveds" component={Loveds} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppWithRouterAccess;
