import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from '@mui/icons-material/Close';
import "./navbar.scss";

export default function NavBar() {
  const [state, setState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{
        width: 220,
        pt: 4,
        pl: 2.2,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <div className="NBMCda">
        <div />
        <div onClick={toggleDrawer("right", false)}><CloseIcon/></div>
      </div>
      <div className="NBMCdb">
        <Link className="NBMCd hover-underline-animation" to="/aboutus">
          About Us
        </Link>
        <Link className="NBMCd hover-underline-animation" to="/faqs">
          FAQs
        </Link>
        {/* {isContactPage ? (
          <Link
            className="NBMCd hover-underline-animation"
            to={isContactPage ? "/myblog" : "/"}
          >
            My Blog
          </Link>
        ) : (
          <Link
            className="NBMCd hover-underline-animation"
            to={isContact ? "/contactme" : "/"}
          >
            Contact Me
          </Link>
        )} */}
      </div>
    </Box>
  );

  return (
    <div className="NBMC">
      <Link className="NBMCa" to="/">
        <img
          src="https://raw.githubusercontent.com/raviprakash11/qh-dashboard/bin/logo.png"
          alt="brand-logo"
          className="NBMCai"
        />
        <div className="NBMCait">QH-Dashboard</div>
      </Link>
      <div className="NBMCb">
        <IconButton className="NBMCba" onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
        <Link className="NBMCbb hover-underline-animation" to="/aboutus">
          About Us
        </Link>
        <Link className="NBMCbb hover-underline-animation" to="/faqs">
          FAQs
        </Link>
        {/* {isContactPage ? (
          <Link
            className="NBMCbc hover-underline-animation"
            to={isContactPage ? "/myblog" : "/"}
          >
            My Blog
          </Link>
        ) : (
          <Link
            className="NBMCbc hover-underline-animation"
            to={isContact ? "/contactme" : "/"}
            onClick={navigateContactMe}
          >
            Contact Me
          </Link>
        )} */}
      </div>
    </div>
  );
}