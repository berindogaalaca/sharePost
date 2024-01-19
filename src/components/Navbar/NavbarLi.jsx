import React from "react";
function NavbarLi({ navbarLink, navbarText, navImg }) {
  return (
    <li className="nav-item mx-4">
      <a className="nav-link active text-white " aria-current="page" href={navbarLink}>
        <div className="d-flex justify-content-lg-center ">
          <i className={navImg}></i>
        </div>
        <div>{navbarText}</div>
      </a>
    </li>
  );
}

export default NavbarLi;
