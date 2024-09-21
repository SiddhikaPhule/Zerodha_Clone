import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFFFFF"}}>
        <div class="container p-2">
          <Link class="navbar-brand" to={"/"}>
            <img src="media\Images\logo.svg" style={{width:"25%"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-muted" to={"/about"}>
                  About
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active text-muted" to={"/product"}>
                  Product
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active text-muted" to={"/pricing"}>
                  Pricing
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active text-muted" to={"/support"}>
                  Support
                </Link>
            </li>
            </ul>   
            </form>
          </div>
        </div>
      </nav>

  );
}

export default Navbar;
