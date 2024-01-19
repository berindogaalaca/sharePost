import React from "react";

function Footer() {
  return (
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 border-top  d-flex justify-content-between">
      <div class="col-6 mb-3 mx-5 px-4">
        <a
          href="/"
          class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
        >
          <img className="img-fluid w-50" src="SpLogo2.png" alt="" />
        </a>
        <p class="text-body-secondary">© 2024</p>
      </div>

      <div class="col-6 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="/Homepage" class="nav-link p-0 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/instagram" class="nav-link p-0 text-body-secondary">
              İnstagram
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/twitter" class="nav-link p-0 text-body-secondary">
              Twitter
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/facebook" class="nav-link p-0 text-body-secondary">
              Facebook
            </a>
          </li>
          <li class="nav-item mb-2">
            <a href="/linkedin" class="nav-link p-0 text-body-secondary">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
