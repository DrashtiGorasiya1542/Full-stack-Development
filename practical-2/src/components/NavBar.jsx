import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import { Tab, Tabs, useTheme } from "@mui/material";
import DrawerComp from "./drawerComp";
import { Link } from "react-router-dom";
import about from "../components/About";

const NavBar = () => {
  const theme = useTheme();
  // const isMatch =useMediaQuery(theme.brakpoints.down('md' ));
  console.log(theme);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <StorefrontTwoToneIcon></StorefrontTwoToneIcon>
     <Tabs textColor="inherit">
     <Tab label="Home"></Tab>
     <Tab label="About"></Tab>
     <Tab label="Contact"></Tab>
     </Tabs>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            Login{" "}
          </Button>
          <Button variant="contained" sx={{ marginLeft: "15px" }}>
            Sign UP
          </Button>
        </Toolbar>
        <DrawerComp />
      </AppBar>
    </Box>
  );
};

export default NavBar;
