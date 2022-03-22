import React from "react";
import { Box, Typography } from "@material-ui/core";
import { padding, textAlign } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      {...props}
    >
      {"©"}
      {/* <Link color="inherit" href="https://mui.com/">
		  Your Website
		</Link>{" "} */}
      {new Date().getFullYear()}
      {" Petlify"}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "#5CDB95",
        height: "60px",
        marginTop: "50px",
        paddingTop: "20px",
        textAlign: "center",
      }}
    >
      <Copyright style={{ fontFamily: "inherit", color: "#05386B"}}></Copyright>
    </Box>
  );
};

export default Footer;
