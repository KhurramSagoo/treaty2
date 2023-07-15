import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Services", "Contact Us"];

function Top(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        treaty
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 1px 2px lightgray",
          height: "112px",
          width: "100",
        }}
      >
        <Toolbar
          // sx={{display:{sm:"12", md:"12"}}}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{
              fontWeight: "normal",
              fontSize: "2.5rem",
              letterSpacing: "0.1em",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              // marginRight:"auto"
            }}
          >
            <img src={logo} alt="" style={{ width: "100px" }} />
            treaty
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "skyBlue",

                  fontSize: "1rem",
                  borderRadius: "1px",
                  backgroundColor: "transparent",
                  marginRight: "40px",
                  textTransform: "capitalize",
                  "&:hover": {
                    borderBottom: "2px solid red",
                    color: "red",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <button
              style={{
                borderRadius: "25px",
                fontSize: "1rem",
                padding: "10px 20px",
                color: "skyblue",
                border: "1px solid skyBlue",
                backgroundColor: "transparent",
                marginRight: "60px",
                cursor: "pointer",
              }}
            >
              Login / Register{" "}
            </button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Top.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Top;
