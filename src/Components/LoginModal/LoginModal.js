import { Modal } from "@mui/material";
import { useState, useEffect } from "react";
import SignupModal from "../SignupModal/SignupModal";
import envelope from "../../Assets/envelope.svg";
import lock from "../../Assets/lock.svg";
import checkImg from "../../Assets/check.svg";
import classes from "./LoginModal.module.css";
const LoginModal = (props) => {
  const handleClose = () => {
    props.onClose();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [check, setCheck] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const handleSignupOpen = () => {
    setOpenSignupModal(true);
  };
  const handleSignupClose = () => {
    setOpenSignupModal(false);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "" && password.trim() === "") {
      setError(true);
      setErrorMessage("Email and password cannnot be blank.");
    } else if (email.trim() === "") {
      setError(true);
      setErrorMessage("Email cannnot be blank.");
    } else if (password.trim() === "") {
      setError(true);
      setErrorMessage("Password cannot be blank.");
    } else if (
      email === JSON.parse(localStorage.getItem("Email")) &&
      password === JSON.parse(localStorage.getItem("Password"))
    ) {
      setError(false);
      if (check) {
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("Password", JSON.stringify(password));
      }
      localStorage.setItem("LoggedIn", true);
      props.onClose();
    } else {
      setError(true);
      setErrorMessage("Incorrect email or password.");
    }
  };
  const checkHandler = () => {
    setCheck((prev) => !prev);
  };
  useEffect(() => {
    if (localStorage.getItem("Email")) {
      setEmail(JSON.parse(localStorage.getItem("Email")));
    }
    if (localStorage.getItem("Password")) {
      setPassword(JSON.parse(localStorage.getItem("Password")));
    }
  }, []);
  return (
    <Modal open={props.open} onClose={handleClose}>
      <main className={classes.loginContainer}>
        <h2>Login To Continue</h2>
        <form onSubmit={submitHandler} className={classes.form}>
          <div
            className={classes.inputContainer}
            style={{ marginBottom: "20px" }}
          >
            <img src={envelope} alt="email" />
            <input
              type="email"
              placeholder="Email"
              onChange={emailHandler}
              value={email}
            />
          </div>
          <div className={classes.inputContainer}>
            <img src={lock} alt="password" />
            <input
              type="password"
              placeholder="Password"
              onChange={passwordHandler}
              value={password}
            />
          </div>
          <div className={classes.options}>
            <div className={classes.checkbox}>
              <div className={classes.outerSquare} onClick={checkHandler}>
                {check ? <img src={checkImg} alt="check" /> : ""}
              </div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" onClick={checkHandler}>
                Remember me
              </label>
            </div>
            <span>Forgot Password?</span>
          </div>
          {error ? (
            <p className={classes.error}>{"* ".concat(errorMessage)}</p>
          ) : (
            ""
          )}
          <button onClick={submitHandler} className={classes.loginBtn}>
            Login
          </button>
          <span
            onClick={handleSignupOpen}
            style={{ marginTop: "20px" }}
            className={classes.switch}
          >
            Don't have an account? Sign up
          </span>
          <SignupModal open={openSignupModal} onClose={handleSignupClose} />
        </form>
      </main>
    </Modal>
  );
};

export default LoginModal;
