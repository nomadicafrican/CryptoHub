import * as React from "react";
import { styled, alpha,  } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          
           
          
          <Button href='http://localhost:3000/'>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Home
            </Typography>
          </Button>
          <Button href='http://localhost:3000/write'>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Write
            </Typography>
          </Button>{" "}
          <Button href='http://localhost:3000/market'>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Market
            </Typography>
          </Button>
          <Button href='http://localhost:3000/news'>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              News
            </Typography>
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// import { Link } from "react-router-dom";
// // import SearchAppBar from '../search/SearchAppBar'
// import "./navbar.css";

// export default function NavBar() {
//   const user = true;
//   return <div className = 'top'>
//     <div className="topleft">
//     <i className=" topIcon fab fa-facebook-square"></i>
//     <i className=" topIcon fab fa-twitter-square"></i>
//     <i className=" topIcon fab fa-instagram-square"></i>
//     </div>
//     <div className="topcenter">
// <ul className="toplist">

//   <li className="toplistitem">
//     <Link className="link" to="/">Home</Link>
//   </li>
//   <li className="toplistitem"><Link className="link" to="/news">News</Link></li>
//   <li className="toplistitem"><Link className="link" to="/market">Market</Link></li>
//   <li className="toplistitem"><Link className="link" to="/write">Write</Link></li>
//   <li className="toplistitem">
//   {user && "Logout" }
//   </li>
// </ul>

//     </div>
//     <div className="topright">
//       {
//         user ? (
//         <img className = "topimg "src="data:image/jpeg;base64,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" alt="" />

//         ) : (
//           <ul className="toplist">
//             <li className="toplistitem">
//           <Link className="link" to="/login">
//             Login
//           </Link>
//             </li>
//             <li className="toplistitem">
//           <Link className="link" to="/register">
//             Register
//           </Link>
//             </li>
//             </ul>
//         )

//       }

//     </div>
//   </div>;
// }
