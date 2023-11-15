import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

const dropdown = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};
const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export default function Welcome() {
  const [active, setActive] = useState(true);
  const [isExpanded, setExpanded] = useState(false);
  function changeback() {
    setExpanded((prevState) => !prevState);
    setTimeout(() => {
      setExpanded((prevState) => !prevState);
    }, expandingTransition.duration * 1000 - 1500);
    setTimeout(() => {
      setActive((prevState) => !prevState);
    }, 400);
  }

  return (
    <div className="box-container">
      <div className="top">
        <motion.div
          className="drop"
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={dropdown}
          transition={expandingTransition}
        ></motion.div>

        {active === true && (
          <div className="headercontainer">
            <h2>
              Welcome <br /> Back
            </h2>
            <h5>Please Sign in to continue</h5>
          </div>
        )}

        {active === false && (
          <div className="headercontainer">
            <h2>
              Create <br /> Account
            </h2>
            <h5>Please Sign in to continue</h5>
          </div>
        )}
      </div>

      {active === true && (
        <div className="innercontainer">
          <div className="form-container">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <a href="#" className="muted-link">
            Forgot your password?
          </a>
          <button type="submit" className="submit-button">
            Sign in
          </button>
          <a href="#" className="muted-link">
            Don't have an account?
            <a href="#" className="bold-link" onClick={changeback}>
              {active ? "SignUp" : "SignIn"}
            </a>
          </a>
        </div>
      )}
      {active === false && (
        <div className="innercontainer">
          <div className="form-container">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <button type="submit" className="submit-button">
            Sign Up
          </button>
          <a href="#" className="muted-link">
            Already have an account?
            <a href="#" className="bold-link" onClick={changeback}>
              {active ? "SignUp" : "SignIn"}
            </a>
          </a>
        </div>
      )}
    </div>
  );
}
