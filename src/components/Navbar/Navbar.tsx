import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export interface NavbarIterface {}

const Navbar: React.FC<NavbarIterface> = () => {
  return (
     <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
  )
};

export default Navbar;