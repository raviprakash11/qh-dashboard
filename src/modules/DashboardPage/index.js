import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LoopIcon from "@mui/icons-material/Loop";
import "./DashboardPage.scss";
import { Button, Divider, Menu, MenuItem } from "@mui/material";
import DashboardPageMenu from "./DashboardPageMenu";

export default function DashboardPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="DBPM">
      <div className="DBPMi">
        <div className="DBPMia"/>
        <div className="DBPMib">
          <div className="DBPMia DBPMbe">
            <a href="/home" style={{textDecoration:'none'}}>Refresh</a>
            <LoopIcon />
          </div>
          <div
            className="DBPMia DBPMbe"
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div>Filter</div>
            <FilterAltIcon />
          </div>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>Select Date</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Start Date</MenuItem>
            <MenuItem onClick={handleClose}>End Date</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Sort By</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>A-Z</MenuItem>
            <MenuItem onClick={handleClose}>Z-A</MenuItem>
            <Divider />
            <Button>Apply</Button>
          </Menu>
        </div>
      </div>
          <DashboardPageMenu/>
    </div>
  );
}
