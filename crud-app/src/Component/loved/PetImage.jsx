import { Grid, Button, makeStyles, Box, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@material-ui/core/Divider";
import CardContent from "@mui/material/CardContent";
import { lovedPet } from "../../Service/pet/api";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import Image from "../../Assets/Images/pet.jpg";

const useStyle = makeStyles({
  root: {
    justifyContent: "center",
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

const PetImages = ({ images }) => {
  return (
    <CardMedia component="img" image={images.data} />
  )
};


export default PetImages;
