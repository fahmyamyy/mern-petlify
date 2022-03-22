import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PersonIcon from "@mui/icons-material/Person";
import InstagramIcon from "@mui/icons-material/Instagram";
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Session from "../Session";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const user = localStorage.getItem("Name");

function logout() {
  localStorage.setItem('Name', '');
  window.location.assign("http://localhost:3000/login");
}

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <InstagramIcon></InstagramIcon>
        </NavLink>
        <Bars />
        <NavMenu>
          {/* <NavLink to='/about' activeStyle>About</NavLink>
          <NavLink to='/services' activeStyle>Services</NavLink>
          <NavLink to='/contact-us' activeStyle>Contact Us</NavLink>
          <NavLink to='/sign-up' activeStyle>Sign Up</NavLink> */}
          <NavLink to="../pets/all" exact>
            <HomeRoundedIcon></HomeRoundedIcon>
          </NavLink>
          <NavLink to="../loveds" exact>
            <FavoriteRoundedIcon></FavoriteRoundedIcon>
          </NavLink>
          <NavLink to="../users/all" exact>
            <ForumRoundedIcon></ForumRoundedIcon>
          </NavLink>
          <NavLink to="../profile" exact>
            <PersonIcon></PersonIcon>
          </NavLink>
        </NavMenu>
        {/* <Nav></Nav> */}
        <NavBtn>
          {/* <NavBtnLink to='/login'>Login</NavBtnLink> */}
          <NavBtnLink to="/" onClick={() => logout()}>
            LOGOUT
            {/* <Session></Session> */}
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
