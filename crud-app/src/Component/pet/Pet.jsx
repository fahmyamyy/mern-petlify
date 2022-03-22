import {
  Grid,
  Button,
  makeStyles,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { lovedPet } from "../../Service/pet/api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Image from "../../Assets/Images/pet.jpg";

// const styles = {
//     root: {
//         justifyContent: 'center'
//     }
// };

const useStyle = makeStyles({
  root: {
    justifyContent: "center",
  },
  action: {
    justifyContent: "space-between",
  },
});

const Pet = ({ pet }) => {
  const classes = useStyle();
  // const url = pet.picture ? pet.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  const loved = {
    lovedBy: localStorage.getItem("Name"),
    lovedId: localStorage.getItem("Name") + String(pet._id),
    petId: pet._id,
  };

  return (
    <Grid
      style={{
        marginTop: "45px",
      }}
      alignItems="center"
    >
      <Card
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          maxWidht: "200px",
        }}
        className={classes.root}
        sx={{ maxWidth: 345 }}
      >
        <CardContent className={classes.root}>
          <Typography align="center" gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Divider
            light
            style={{
              // marginTop: "20px",
              marginBottom: "20px",
              // widht: "20px",
            }}
          />
          <CardMedia component="img" image={Image} />
          <Divider
            light
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              // widht: "20px",
            }}
          />
          <Typography align="center" variant="body2">
            {pet.color}
          </Typography>
        </CardContent>
        <CardActions className={classes.action}>
          {/* <Button size="small">I want it!</Button> */}
          <Button
            color="secondary"
            variant="contained"
            onClick={() => lovedPet(loved)}
          >
            <FavoriteIcon></FavoriteIcon>
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => lovedPet(loved)}
          >
            <AllInclusiveIcon></AllInclusiveIcon>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Pet;
