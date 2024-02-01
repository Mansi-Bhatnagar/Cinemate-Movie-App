import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/SignupModal";
import cenamiteLogo from "../../Assets/cinemate2.png";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const handleLoginOpen = () => {
    setOpenLoginModal(true);
  };
  const handleLoginClose = () => {
    setOpenLoginModal(false);
  };
  const handleSignupOpen = () => {
    setOpenSignupModal(true);
  };
  const handleSignupClose = () => {
    setOpenSignupModal(false);
  };
  const logoutHandler = () => {
    setUserLoggedIn(false);
    navigate("/");
  };
  useEffect(() => {
    if (localStorage.getItem("LoggedIn") === true) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, [userLoggedIn]);
  return (
    <div className={classes.navbar}>
      <img src={cenamiteLogo} alt="logo" />
      <div className={classes.options}>
        {userLoggedIn ? (
          <span onClick={logoutHandler}>Logout</span>
        ) : (
          <>
            <span onClick={handleLoginOpen}>Login</span>
            <span onClick={handleSignupOpen}>Sign up</span>
          </>
        )}
      </div>
      <LoginModal open={openLoginModal} onClose={handleLoginClose} />
      <SignupModal open={openSignupModal} onClose={handleSignupClose} />
    </div>
  );
};

export default Navbar;
