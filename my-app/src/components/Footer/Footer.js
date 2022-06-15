import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

export function Footer({ currentCategory }) {

  return (
    <footer className="mt-4 text-center text-white">
      {/* social media */}
      <div className="container p-2 pb-0 border-bottom border-white">
        <section className="mb-4">
          <a className="btn btn-outline-dark btn-floating m-1" target="_blank" href="https://www.facebook.com/BAndEMusic" role="button" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
            {/* <i className="fab fa-facebook-f"></i> */}
          </a>
          <a className="btn btn-outline-dark btn-floating m-1" target="_blank" href="https://www.Youtube.com/c/BEMusicMN" role="button" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
            {/* <i className="fa-brands fa-youtube"></i> */}
          </a>
          <a className="btn btn-outline-dark btn-floating m-1" target="_blank" href="https://www.instagram.com/officialbandemusic" role="button" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            {/* <i className="fab fa-instagram"></i> */}
          </a>
          <a className="btn btn-outline-dark btn-floating m-1" target="_blank" href="https://bandemusic.bandcamp.com" role="button" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
            {/* <i className="fa-brands fa-bandcamp"></i> */}
          </a>
        </section>
      </div>

      {/* footer content */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4"><img src={require("../../assets/images/logo-white-on-black-no-border.png")} alt="B and E logo"/>B & E</h5>
              <p>
                An organization of artists, musicians, performers, and producers. 
              </p>
            </div>
    
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Support/Donate
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">some things</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">things</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">some</a>
              </p>

            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Merch
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">Help</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <p><i className="fas fa-home me-3"></i> St. Paul, MN</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                <a href="mailto:OfficialBAndEMusic@gmail.com" className="text-reset text-decoration-none">
                OfficialBAndEMusic@gmail.com
                </a>
              </p>
              <p><i className="fas fa-phone me-3"></i> 612 644 3966</p>
            </div>
          </div>
        </div>
      </section>

      {/* copyright */}
      <div className="text-left p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2021 Copyright:
        <a className="text-white text-decoration-none" href="#!">B&E and HarabushiCreations</a>
      </div>
    </footer>
  );
};