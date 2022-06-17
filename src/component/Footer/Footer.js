import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <div
      className="footer text-center text-lg-start text-white bg-danger"
    //   style={{ backgroundColor: "#09B3B0" }}
    >
      <p className="d-flex mt-2 pt-3 justify-content-center align-items-center">
        Craft Pedia
      </p>
      <hr className="mb-1" />
      <section className="text-center">
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i class="bi bi-facebook"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i class="bi bi-instagram"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i class="bi bi-twitter"></i>
        </a>

        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i class="bi bi-whatsapp"></i>
        </a>
      </section>
      <div className="text-center p-3">
        Copyright © 2022:
        <a className="text-white" href="https://google.com/">
          Google.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
