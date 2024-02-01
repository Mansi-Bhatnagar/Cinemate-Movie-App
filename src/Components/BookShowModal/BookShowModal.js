import { Modal } from "@mui/material";
import classes from "./BookShowModal.module.css";
import { useEffect, useState } from "react";
const BookShowModal = (props) => {
  const [booked, setBooked] = useState(false);
  const handleClose = () => {
    props.onClose();
  };
  const submitHandler = () => {
    setBooked(true);
  };
  useEffect(() => {
    setBooked(false);
  }, []);
  return (
    <Modal open={props.open} onClose={handleClose}>
      <main
        className={classes.container}
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {booked ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "inherit",
              height: "inherit",
              backgroundColor: "rgb(0 0 0 / 48%)",
            }}
          >
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "800",
              }}
            >
              Booked
            </h1>
          </div>
        ) : (
          <div className={classes.back}>
            <h2>Book Now!</h2>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(0 0 0 / 48%)",
                marginBottom: "40px",
              }}
            >
              <h1 style={{ marginLeft: "20px", marginRight: "20px" }}>
                {props.name}{" "}
              </h1>
              <span>
                {props.rating ? "Rating: ⭐".concat(props.rating) : ""}
              </span>
            </div>
            <form onSubmit={submitHandler} className={classes.form}>
              <div
                className={classes.inputContainer}
                style={{ marginBottom: "20px" }}
              >
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={classes.inputContainer}>
                <input type="text" placeholder="Enter no of tickets" />
              </div>
              <button onClick={submitHandler} className={classes.btn}>
                Book Now
              </button>
            </form>
          </div>
        )}
      </main>
    </Modal>
  );
};

export default BookShowModal;
