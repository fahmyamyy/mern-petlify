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
import { getLoveds } from "../../Service/loved/api";
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

const Loveds = () => {
  const [pets, setLoveds] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllLoveds();
  }, []);

  // KAYANYA UNTUK SEARCH
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let data = await getAllPosts(search); // params in url
  //       getPosts(data);
  //     };
  //     fetchData();
  //   }, [search]);

  const deleteLovedData = async (id, name) => {
    Swal.fire({
      title: 'Delete "' + name + '" information?',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // deletePet(id);
        Swal.fire({
          title: '"' + name + '" information deleted!',
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        }).then(function () {
          getAllLoveds();
        });
      }
    });
  };

  const getAllLoveds = async () => {
    let response = await getLoveds(localStorage.getItem('Name'));
    setLoveds(response.data);
    // const aaa = []
    var bbb = {}
    // for (let i = 0; i < response.data.length; i ++) {
    //   aaa.push(response.data[i]);
    // }

    // console.log(response.data[1]._id)

    for (let i = 0; i < response.data.length; i ++) {
      var data = {
        id : response.data[i]._id,
        lovedBy : response.data[i].lovedBy,
        lovedId : response.data[i].lovedId,
        petId : response.data[i].petId,
        petName : response.data[i].pet.name,
        petAge : response.data[i].pet.age,
        petColor : response.data[i].pet.color,
      }
    }
    // console.log(aaa[1]._id);
    console.log(data);
  };

  return (
    <Grid
      style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}
    >
      {pets.map((data) => (
        <Grid item lg={3} sm={4} xs={12}>
          {/* <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={`details/${pet._id}`}
        > */}

          <Pet pet={data} />

          {/* </Link> */}
        </Grid>
      ))}
    </Grid>

    // <Container>
    //   <Table className={classes.table}>
    //     <TableHead>
    //       <TableRow className={classes.thead}>
    //         <TableCell>Id</TableCell>
    //         <TableCell>Name</TableCell>
    //         <TableCell>Age</TableCell>
    //         <TableCell>Color</TableCell>
    //         <TableCell></TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {pets.map((pet) => (
    //         <TableRow className={classes.row} key={pet._id}>
    //           <TableCell>{pet._id}</TableCell>{" "}
    //           {/* change it to pet.id to use JSON Server */}
    //           <TableCell>{pet.name}</TableCell>
    //           <TableCell>{pet.age}</TableCell>
    //           <TableCell>{pet.color}</TableCell>
    //           <TableCell>
    //             <Button
    //               color="primary"
    //               variant="contained"
    //               style={{ marginRight: 10 }}
    //               component={Link}
    //               to={`./edit/${pet._id}`}
    //             >
    //               Edit
    //             </Button>
    //             <Button
    //               color="secondary"
    //               variant="contained"
    //               onClick={() => deletePetData(pet._id, pet.name)}
    //             >
    //               Delete
    //             </Button>{" "}
    //             {/* change it to user.id to use JSON Server */}
    //           </TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   <Fab style={style} color="primary" aria-label="add" variant="extended">
    //     {/* <AddIcon/> */}
    //     Open for Adoption!
    //   </Fab>
    // </Container>
  );
};

export default Loveds;
