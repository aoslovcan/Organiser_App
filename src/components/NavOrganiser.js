import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";
import "./style.css";

export default function NavOrganiser(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul id="nav-category" className="navbar-nav col-md-12">
            <li className="nav-item  col-md-3">
              <Link className="nav-link" href="/">
                All members{" "}
              </Link>
            </li>
            <li className="nav-item col-md-3 ">
              <Link className="nav-link" href="/new">
                Add memebers
              </Link>
            </li>
            <li class="nav-item col-md-3 ">
              <Link className="nav-link" href="/heist">
                Heist info
              </Link>
            </li>
            <li class="nav-item col-md-3 ">
              <Link className="nav-link" href="/newHeist">
                add heist
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
