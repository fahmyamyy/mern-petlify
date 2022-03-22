import { Grid, Button, makeStyles, Box, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@material-ui/core/Divider";
import CardContent from "@mui/material/CardContent";
import { lovedPet, deleteLoved } from "../../Service/pet/api";
import AddCommentIcon from "@mui/icons-material/AddComment";
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

const Images = ({ images }) => {
  return <CardMedia component="img" image={Image} />;
};

const Pet = ({ data }) => {
  const classes = useStyle();
  // const url = pet.picture ? pet.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  const loved = {
    lovedBy: localStorage.getItem("Name"),
    petId: data.pet._id,
  };
  // console.log(data._id);

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
            {data.pet.name}
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
            {data.pet.color}
          </Typography>
        </CardContent>
        <CardActions className={classes.action}>
          {/* <Button size="small">I want it!</Button> */}
          <Button
            color="secondary"
            variant="contained"
            // onClick={() => deleteLoved(data._id)}
          >
            <Typography>Chat Owner</Typography>
            {/* <AddCommentIcon></AddCommentIcon> */}
          </Button>
          <Button
            color="main"
            variant="contained"
            onClick={() => deleteLoved(data._id)}
          >
            <Typography>Remove</Typography>
            {/* <AllInclusiveIcon></AllInclusiveIcon> */}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Pet;
