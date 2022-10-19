import react, { useState } from "react";
import {
  Avatar,
  Card,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
  Container,
  Grid,
  TextField,
  CardHeader,
  Divider,
} from "@material-ui/core";
import { addPet } from "../../Service/pet/api";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const initialValue = {
  name: "",
  age: "",
  color: "",
};

const useStyles = makeStyles({
  avatar: {
    width: "100px",
    height: "100px",
  },
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AddPet = () => {
  // this.fileInput = React.createRef();

  const [pet, setPet] = useState(initialValue);
  const { name, age, color } = pet;
  const classes = useStyles();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let name = data.get("name");
    let age = data.get("age");
    let color = data.get("color");

    const newPet = {
      name: name,
      age: age,
      color: color,
    };

    const response = addPetDetails(newPet);

    // if (username == "") {
    //   username = user.username;
    // }
    // if (email == "") {
    //   email = user.email;
    // }

    // const newUser = {
    //   _id: user._id,
    //   username: username,
    //   email: email,
    //   password: user.password,
    //   createAt: Date.now(),
    // };

    // if (data.get("password") == null) {
    //   const response = editUserDetails(newUser);
    //   console.log(response);
    // } else if (data.get("password") != null) {
    //   const auth = passwordAuth(data.get("password"), data.get("password2"));
    //   if (auth) {
    //     const response = editUserDetails(newUser);
    //     console.log(response);
    //   } else if (!auth) {
    //     console.log("password not the same!");
    //   }
    // }
  };

  // const onValueChange = (e) => {
  //   console.log(e.target.value);
  //   setPet({ ...pet, [e.target.name]: e.target.value });
  // };

  const addPetDetails = async (pet) => {
    let response = await addPet(pet);
    console.log(response);
    if (response.status == 201) {
      Swal.fire({
        title: "Success!",
        text: "Success",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("./all");
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

  return (
    <Container
      style={{
        maxWidth: "50%",
      }}
      component="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card
        style={{
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            margin: "20px auto",
            fontFamily: "inherit",
          }}
          variant="h5"
        >
          Pet Information
        </Typography>
        <Divider />
        <Grid
          style={{
            margin: "20px auto",
            maxWidth: "50%",
            fontFamily: "inherit",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Avatar
              style={{ margin: "0px auto 0px" }}
              className={classes.avatar}
              sx={{ width: "100px", height: "100px" }}
              alt={localStorage.getItem("Name")}
              src="/static/images/avatar/1.jpg"
            >
              {/* <input
                type="file"
                style={{ display: "none" }}
                ref={this.fileInput}
              /> */}
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputProps={{ style: { textTransform: "capitalize" } }}
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="color"
              label="Color"
              name="color"
              autoComplete="color"
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
      </Card>
    </Container>
    // <FormGroup className={classes.container}>
    //     <Typography variant="h4">Add Pet</Typography>
    //     <FormControl>
    //         <InputLabel htmlFor="my-input">Name</InputLabel>
    //         <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
    //     </FormControl>
    //     <FormControl>
    //         <InputLabel htmlFor="my-input">Age</InputLabel>
    //         <Input onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" />
    //     </FormControl>
    //     <FormControl>
    //         <InputLabel htmlFor="my-input">Color</InputLabel>
    //         <Input onChange={(e) => onValueChange(e)} name='color' value={color} id="my-input"/>
    //     </FormControl>
    //     <FormControl>
    //         <Button variant="contained" color="primary" onClick={() => addPetDetails()}>Add Pet</Button>
    //     </FormControl>
    // </FormGroup>
  );
};

export default AddPet;
