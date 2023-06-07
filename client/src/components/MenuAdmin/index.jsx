import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useThemeContext } from "../../context/ThemeContext";
import { Button } from "@mui/material";

export default function MenuAdmin() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useThemeContext();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem("user"));

  const firstName = user?.firstName.split(" ")[0];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/home");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <Button
            onClick={handleClick}
            size="medium"
            // variant='outlined'
            sx={{
              mr: "0.5rem",
              textTransform: "none",
              color: "white",
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}
          >
            Hey! {firstName}
            <Avatar
              src={user?.image}
              alt="Avatar"
              sx={{ ml: "1rem", border: "1px solid", borderColor: "#BF9A56" }}
            />
          </Button>
        </Tooltip>
      </Box>
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
        <LinkStyled to="/admin/profile" theme={theme}>
          <MenuItem onClick={handleClose} sx={{ mb: "10px" }}>
            <Avatar src={user?.image} alt="Avatar" />
            Perfil
          </MenuItem>
        </LinkStyled>

        <DividerStyled theme={theme} />

        <LinkStyled to="/admin" theme={theme}>
          <MenuItem onClick={handleClose} sx={{ mt: "10px", mb: "10px" }}>
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            Panel
          </MenuItem>
        </LinkStyled>

        <DividerStyled theme={theme} />

        <MenuItem onClick={handleLogout} sx={{ mt: "10px" }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const DividerStyled = styled(Divider)`
  border-color: ${({ theme }) => theme.palette.hrcolor.main};
`;
