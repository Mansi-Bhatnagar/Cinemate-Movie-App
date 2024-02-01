import { Modal } from "@mui/material";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import envelope from "../../Assets/envelope.svg";
import lock from "../../Assets/lock.svg";
import classes from "./SignupModal.module.css";
const SignupModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleLoginOpen = () => {
    setOpenLoginModal(true);
  };
  const handleClose = () => {
    props.onClose();
  };
  const handleLoginClose = () => {
    setOpenLoginModal(false);
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
    } else {
      setError(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("LoggedIn", true);
      props.onClose();
    }
  };
  return (
    <Modal open={props.open} onClose={handleClose}>
      <main className={classes.loginContainer}>
        <h2>Sign Up To Continue</h2>
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
          {error ? (
            <p className={classes.error}>{"* ".concat(errorMessage)}</p>
          ) : (
            ""
          )}
          <button onClick={submitHandler} className={classes.loginBtn}>
            Sign up
          </button>
          <span
            onClick={handleLoginOpen}
            style={{ marginTop: "20px" }}
            className={classes.switch}
          >
            Already have an account? Login
          </span>
          <LoginModal open={openLoginModal} onClose={handleLoginClose} />
        </form>
      </main>
    </Modal>
  );
};

export default SignupModal;
