import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import DrawerComp from "./drawerComp";

const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // const isMatch =useMediaQuery(theme.brakpoints.down('md' ));
    console.log(theme);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <StorefrontTwoToneIcon></StorefrontTwoToneIcon>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(event, value) => {
              setValue(value);
            }}
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="Contact" />
            <Tab label="About" />
          </Tabs>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            Login{" "}
          </Button>
          <Button variant="contained" sx={{ marginLeft: "15px" }}>
            Sign UP
          </Button>
        </Toolbar>
        <DrawerComp/>
      </AppBar>
    </Box>
  );
};

export default NavBar;
