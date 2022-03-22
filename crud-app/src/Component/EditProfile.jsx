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
import { getUsers, deleteUser, editUser } from "../Service/user/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Typography, TextField } from "@mui/material";
import { width } from "@mui/system";
import * as Global from "../global_variables";

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

const passwordAuth = (pass1, pass2) => {
  if (pass1 != pass2) {
    return false;
  } else if (pass1 === pass2) {
    return true;
  }
};

// const editUserDetails = async (username, user) => {
//   const response = await editUser(username, user);
//   return response;
// };

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

  const editUserDetails = async (user) => {
    const response = await editUser(user);
    // console.log(response.status);
    if (response.status == 201) {
      Swal.fire({
        title: "Success!",
        text: "Success",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location = "http://localhost:3000/profile";
      });
      // window.location("http://localhost:3000/profile");
    } else {
      Swal.fire({
        title: "Error!",
        text: response.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let username = data.get("username");
    let email = data.get("email");

    if (username == "") {
      username = user.username;
    }
    if (email == "") {
      email = user.email;
    }

    const newUser = {
      _id: user._id,
      username: username,
      email: email,
      password: user.password,
      createAt: Date.now(),
    };

    if (data.get("password") == null) {
      const response = editUserDetails(newUser);
      console.log(response);
    } else if (data.get("password") != null) {
      const auth = passwordAuth(data.get("password"), data.get("password2"));
      if (auth) {
        const response = editUserDetails(newUser);
        console.log(response);
      } else if (!auth) {
        console.log("password not the same!");
      }
    }
  };

  const updateUserData = async (id, name) => {
    Swal.fire({
      title: 'Delete "' + name + '" information?',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire({
          title: '"' + name + '" information deleted!',
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        }).then(function () {
          getAllUsers();
        });
      }
    });
  };

  return (
    <Card
      style={{
        margin: "40px auto",
        display: "grid",
        justifyContent: "center",
        width: "40%",
      }}
    >
      <Typography
        style={{
          textAlign: "center",
          margin: "10px auto 10px",
          fontFamily: "inherit",
        }}
        variant="h5"
      >
        Edit Profile
      </Typography>
      <Divider style={{ marginBottom: "10px" }} />
      <Avatar
        style={{ margin: "0px auto 0px" }}
        className={classes.avatar}
        sx={{ width: "100px", height: "100px" }}
        alt={localStorage.getItem("Name")}
        src="/static/images/avatar/1.jpg"
      />
      <Box
        style={{
          margin: "10px 10px",
        }}
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              inputProps={{ style: { textTransform: "capitalize" } }}
              required
              fullWidth
              id="username"
              label={user.username}
              name="username"
              autoComplete="username"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label={user.email}
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="password2"
              label="Retype Password"
              type="password"
              id="password2"
              autoComplete="new-password"
              helperText="Fill to change password (NOT REQUIRED)"
            />
          </Grid>
          <Button
            style={{
              borderRadius: "4px",
              background: "#05386B",
              margin: "20px auto 25px",
              padding: "10px 22px",
              color: "#fff",
              outline: "none",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s linear",
              textDecoration: "none",

              // margin-left: "24px",

              // &:hover {
              //   transition: "all 0.1s linear",
              //   background: "#EDF5E1",
              //   color: "#05386B",
              // }
            }}
            type="submit"
            variant="contained"
          >
            Save
          </Button>
        </Grid>
      </Box>
    </Card>
  );
};

export default AllUsers;
