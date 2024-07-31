import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made ❤️ by {""}
              <a  href="https://www.linkedin.com/in/neha-hatne-8123a8263" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">neha</a>
            </p>
            <a className="text-dark fs-3" href="https://github.com/NehaHatne27" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;