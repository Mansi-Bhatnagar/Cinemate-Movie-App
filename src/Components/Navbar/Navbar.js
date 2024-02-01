import cenamiteLogo from "../../Assets/cinemate2.png";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <img src={cenamiteLogo} alt="logo" />
      <div className={classes.options}>
        <span>Login</span>
        <span>Sign up</span>
      </div>
    </div>
  );
};

export default Navbar;
