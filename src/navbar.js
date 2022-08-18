import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
const Navbar = () => {
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                  <NavLink class="nav-link" to="/service">
                    Services
                  </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >
                  <NavLink class="nav-link" to="/about">
                    About
                  </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </a>
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn  btn-style" type="submit">
                  Sign Up
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;