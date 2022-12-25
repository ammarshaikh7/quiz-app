import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  const isActive = "";
  return (
    <div className="flexBetween sticky shadowBottom">
      <div className="navItem">
        <span className="logoRed logo"> Al</span>
        <span className="green logo">maBetter</span>
      </div>
      <div className="flexCenter navItem">
        <button>
          <NavLink
            to="/"
            className={`navItem ${isActive === "Home" ? "blue" : ""}`}
          >
            Home
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/quizzes"
            className={`navItem ${isActive === "Quiz" ? "blue" : ""}`}
          >
            My Quizzes
          </NavLink>
        </button>
        <button>
          <NavLink
            to="/play-quiz"
            className={`navItem ${isActive === "Play Quiz" ? "blue" : ""}`}
          >
            Play Quiz
          </NavLink>
        </button>
      </div>
    </div>
  );
};
