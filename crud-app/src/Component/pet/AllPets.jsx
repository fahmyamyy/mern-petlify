import { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
  Fab,
  Container,
  Grid,
} from "@material-ui/core";
import Pet from "./Pet";
import { getPets, deletePet } from "../../Service/pet/api";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const style = {
  background: "#05386B",
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllPets();
  }, []);

  // KAYANYA UNTUK SEARCH
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let data = await getAllPosts(search); // params in url
  //       getPosts(data);
  //     };
  //     fetchData();
  //   }, [search]);

  const deletePetData = async (id, name) => {
    Swal.fire({
      title: 'Delete "' + name + '" information?',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deletePet(id);
        Swal.fire({
          title: '"' + name + '" information deleted!',
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        }).then(function () {
          getAllPets();
        });
      }
    });
  };

  const getAllPets = async () => {
    let response = await getPets();
    setPets(response.data);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {pets.map((pet) => (
          <Grid item xs={4}>
            {/* <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`details/${pet._id}`}
        > */}

            <Pet pet={pet} />

            {/* </Link> */}
          </Grid>
        ))}
      </Grid>
      <Fab style={style} color="primary" aria-label="add" variant="extended" onClick={() => { window.location.href="http://localhost:3000/pets/add"; }}>
        <AddIcon />
        Open for Adoption!
      </Fab>
    </Container>
  );
};

export default AllPets;
