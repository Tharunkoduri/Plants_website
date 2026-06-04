import { Link } from "react-router-dom";
import "../styles/footer.css";


export function Footer() {
  return (
    <div>

      <footer className=" footer-section mt-5">
        <div className="container-fluid px-5 cursor-pointer">
          <div className="row footer-top">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <h6 className="footer-title">
                <i className="bi bi-flower1"></i>
                <span>ABOUT US</span>
              </h6>
              <hr className=" text-white" />
              <ul className=" footer-links">
                <li>Our Story</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Locate Stores</li>
                <li>Own Grown</li>
                <li>Garden Services & Maintenance</li>
              </ul>
            </div>

            <div className="  col-lg-3 col-md-6 col-sm-12" >
              <h6 className="footer-title">
                <i className="bi bi-headset"></i>
                <span>CUSTOMER SUPPORT</span>
              </h6>
              <hr className=" text-white" />
              <ul className=" footer-links">
                <li>Take The Plant Quiz</li>
                <li>Shipping Policy</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Track Order</li>
                <li>FAQs</li>
                <li>Order Related Policy</li>
              </ul>
            </div>

            <div className=" col-lg-3 col-md-6 col-sm-12">
              <h6 className="footer-title">
                <i className="bi bi-patch-check"></i>
                <span>OFFERS & REWARDS</span>
              </h6>
              <hr className=" text-white" />
              <ul className=" footer-links">
                <li>Plant Parent Rewards Club</li>
                <li>NurseryLive Coupons</li>
              </ul>
            </div>

            <div className=" col-lg-3 col-md-6 col-sm-12">
              <h6 className="footer-title">
                <i className="bi bi-send"></i>
                <span>GET IN TOUCH</span>
              </h6>
              <hr className="text-white" />
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-telephone"></i>
                  <span className="fw-semibold" >
                    Call us : +91 80870 87224
                  </span>
                </li>

                <li>
                  <i className="bi bi-whatsapp"></i>
                  <span className="fw-semibold">
                    Whatsapp us : +91 80870 87224
                  </span>
                </li>

                <li>
                  <i className="bi bi-envelope"></i>
                  <span className="fw-semibold">
                    Email us : support@nurserylive.com
                  </span>
                </li>

                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span className="fw-semibold">
                    H-NO:1-95, Vill: Laxmajipally,
                    Mdl: Illanthakunta, Dist: Karimnagar,
                    State: Telangana, Pincode: 505122
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="custom-hr" />

          <div className="footer-bottom">
            <div className="footer-left">
              <p>
                &#169; 2026, NurseryLive | Privacy Policy | Terms & Conditions | All rights reserved.
              </p>
            </div>

            <div className="footer-right text-center">
              <div className="social-icons gap-2 ">

                <a
                  href="https://www.facebook.com/nurserylive"
                  className="logo bg-white rounded-circle"
                  target="_blank" >
                  <span className="bi bi-facebook text-primary"></span>
                </a>

                <a
                  href="https://x.com/nurserylive"
                  className="logo bg-white rounded-circle"
                  target="_blank" >
                  <span className="bi bi-twitter-x text-dark"></span>
                </a>

                <a
                  href="https://www.instagram.com/nurserylive_"
                  className="logo bg-white rounded-circle"
                  target="_blank" >
                  <span className="bi bi-instagram insta-button"></span>
                </a>

                <a
                  href="https://in.linkedin.com/company/nurserylive"
                  className="logo bg-white rounded-circle"
                  target="_blank" >
                  <span className="bi bi-linkedin text-primary"></span>
                </a>

                <a
                  href="https://www.youtube.com/nurserylive"
                  className="logo bg-white rounded-circle"
                  target="_blank" >
                  <span className="bi bi-youtube text-danger"></span>
                </a>

                <a className="logo bg-white rounded-circle" target="_blank" href="https://www.pinterest.com/nurserylive">
                  <span className="bi bi-pinterest"></span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}