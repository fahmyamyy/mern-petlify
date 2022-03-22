import react, { useState, useEffect } from "react";
import {
  makeStyles,
  Card,
  Grid,
  Avatar,
  Box,
  Container,
  Button,
  Divider,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../Service/user/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Typography, TextField } from "@mui/material";
import { width } from "@mui/system";
import { NavBtn, NavBtnLinkSecond } from "./navbar/NavbarElements";

const useStyle = makeStyles({
  avatar: {
    width: "100px",
    height: "100px",
  },
  container: {
    border: "1px solid #d3cede",
    borderRadius: 10,
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: 350,
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  divider: {
    margin: "10px",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
    height: 150,
  },
  textColor: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
  textCenter: {
    justifyContent: "center",
  },
  action: {
    justifyContent: "space-between",
  },
});

const AllUsers = () => {
  const [user, setUsers] = useState([]);
  const classes = useStyle();
  const username = localStorage.getItem("Name");

  useEffect(() => {
    getAllUsers(username);
  }, []);

  const getAllUsers = async (username) => {
    let response = await getUsers(username);
    setUsers(response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get("username"),
      email: data.get("email"),
    };

    console.log(data);
  };

  return (
    <Card
      style={{
        margin: "6% auto",
        display: "grid",
        justifyContent: "center",
        width: "40%",
      }}
    >
      <Box style={{ margin: "30px auto" }}>
        <Avatar
          style={{ margin: "0px auto" }}
          className={classes.avatar}
          sx={{ width: "100px", height: "100px" }}
          alt={localStorage.getItem("Name")}
          src="/static/images/avatar/1.jpg"
        />
        <Divider style={{ margin: "30px auto 10px" }} />
        <Grid
          style={{
            margin: "20px auto 0px",
          }}
          container
          spacing={2}
          justify="center"
        >
          <Grid item xs={5} style={{ margin: "auto" }}>
            <Typography style={{ textAlign: "right", fontFamily: "inherit" }}>
              Username :
            </Typography>
          </Grid>
          <Grid item xs={7} style={{ margin: "auto" }}>
            <Typography style={{ textAlign: "left", fontFamily: "inherit" }}>
             {user.username}
            </Typography>
          </Grid>
          <Grid item xs={5} style={{ margin: "auto" }}>
            <Typography style={{ textAlign: "right", fontFamily: "inherit" }}>
              Email Address :
            </Typography>
          </Grid>
          <Grid item xs={7} style={{ margin: "auto" }}>
            <Typography style={{ textAlign: "left", fontFamily: "inherit" }}>
            {user.email}
            </Typography>
          </Grid>
          {/* <Button
            style={{ marginTop: "20px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Edit Profile
          </Button> */}
          <NavBtn style={{ marginTop: "10px" }}>
            <NavBtnLinkSecond to="/editProfile">EDIT PROFILE</NavBtnLinkSecond>
          </NavBtn>
        </Grid>
      </Box>
    </Card>
  );
};

export default AllUsers;
