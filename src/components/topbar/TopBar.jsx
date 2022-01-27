import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import News from "../news/News";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/news">
              NEWS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/market">
              MARKET
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
// import * as React from "react";
// import { useContext } from "react";
// import { styled, alpha,  } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import Button from "@mui/material/Button";
// import { Context } from "../../context/Context";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.65),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

    

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));


// export default function PrimarySearchAppBar() {
//   const { user, dispatch } = useContext(Context);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//   };

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={2} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>

//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
       
//           size="medium"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton >
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" >
//         <Toolbar>
          
           
          
//           <Button href='http://localhost:3000/'>
//             <Typography
//               variant="h7"
//               noWrap
//               component="div"
//               sx={{ display: { xs: "none", sm: "block" } }}
//             >
//               Home
//             </Typography>
//           </Button>
//           <Button href='http://localhost:3000/write'>
//             <Typography
//               variant="h7"
//               noWrap
//               component="div"
//               sx={{ display: { xs: "none", sm: "block" } }}
//             >
//               Write
//             </Typography>
//           </Button>{" "}
//           <Button href='http://localhost:3000/market'>
//             <Typography
//               variant="h7"
//               noWrap
//               component="div"
//               sx={{ display: { xs: "none", sm: "block" } }}
//             >
//               Market
//             </Typography>
//           </Button>
//           <Button href='http://localhost:3000/news'>
//             <Typography
//               variant="h7"
//               noWrap
//               component="div"
//               sx={{ display: { xs: "none", sm: "block" } }}
//             >
//               News
//             </Typography>
//           </Button>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
           
           
              
            
//             <IconButton
//               size="medium"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }
