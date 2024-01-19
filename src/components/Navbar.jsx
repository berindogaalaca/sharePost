import React from "react";
import NavbarLi from "./Navbar/NavbarLi";
import DropdownLi from "./Navbar/DropdownLi";

const Navbar = () => {
  const customStyle = {
    background:
      "linear-gradient(135deg, rgb(245, 85, 85) 10%, rgb(252, 207, 49)  100%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary  "
      aria-label="Thirteenth navbar example"
      style={customStyle}
    >
      <div class="container-fluid mx-5 ">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a
          class="navbar-brand col-lg-2 col-sm-4 col-4 d-flex justify-content-end justify-content-lg-start mx-5 "
          href="/Homepage"
        >
          <img
            className="img-fluid w-25 "
            src="sphomecut.png
          "
            alt=""
          />
        </a>

        <div class="collapse navbar-collapse col-xs-8 h-50" id="navbarsExample11">
          <ul class="navbar-nav col-lg-8 justify-content-lg-center mx-lg-5 ">
            <NavbarLi
              navbarText="İnstagram"
              navbarLink="/instagram"
              navImg="bi bi-instagram"
            />
            <NavbarLi
              navbarText="Twitter"
              navbarLink="/twitter"
              navImg="bi bi-twitter-x"
            />
            <NavbarLi
              navbarText="Facebook"
              navbarLink="/facebook"
              navImg="bi bi-facebook"
            />
            <NavbarLi
              navbarText="Linkedin"
              navbarLink="/linkedin"
              navImg="bi bi-linkedin"
            />
          </ul>
          <div class="dropdown  col-lg-2 mx-2 col-sm-3 col-4">
            <a
              href="#"
              class="d-block link-body-emphasis w-75 text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="img-fluid w-25 rounded-5"
                src="profile.jpg"
                alt=""
              />
            </a>
            <ul class="dropdown-menu text-small ">
              <DropdownLi dropdownLink="/Profile" dropdownText="Profil" />
              <DropdownLi dropdownLink="/" dropdownText="Çıkış Yap" />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
