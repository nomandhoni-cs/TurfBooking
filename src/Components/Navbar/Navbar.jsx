import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 0, padding: "0" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
          >
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
          </IconButton>
          <Link to="/contact">Contact</Link> 
        </Toolbar>
      </AppBar>
  );
}
export default Navbar;
