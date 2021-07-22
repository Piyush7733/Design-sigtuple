import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [isStickey, setIsStickey] = useState(0);

  function handleScroll() {
    let activeClass = "stickey";
    if (window.scrollY === 0) {
      activeClass = "top";
    }
    setIsStickey(activeClass);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isStickey]);
  return (
    <>
      <nav className={`navbar fixed-top ${isStickey}`}>
        <div className="container">
          <a className="navbar-brand">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <div className="d-flex">
            <button class="me-4 px-4 nav-bookdemo" data-bs-toggle="modal" data-bs-target="#bookademo">Book a Demo</button>
            <a href="" class="me-5 icon nav-user" style={{ marginTop: "-7px" }}>
              <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2 31.2V32.4H9.6V31.2H7.2ZM26.4 31.2V32.4H28.8V31.2H26.4ZM9.6 31.2V30H7.2V31.2H9.6ZM15.6 24H20.4V21.6H15.6V24ZM26.4 30V31.2H28.8V30H26.4ZM20.4 24C21.9913 24 23.5174 24.6321 24.6426 25.7574C25.7679 26.8826 26.4 28.4087 26.4 30H28.8C28.8 27.7722 27.915 25.6356 26.3397 24.0603C24.7644 22.485 22.6278 21.6 20.4 21.6V24ZM9.6 30C9.6 28.4087 10.2321 26.8826 11.3574 25.7574C12.4826 24.6321 14.0087 24 15.6 24V21.6C13.3722 21.6 11.2356 22.485 9.6603 24.0603C8.085 25.6356 7.2 27.7722 7.2 30H9.6ZM18 7.2C16.4087 7.2 14.8826 7.83214 13.7574 8.95736C12.6321 10.0826 12 11.6087 12 13.2H14.4C14.4 12.2452 14.7793 11.3295 15.4544 10.6544C16.1295 9.97928 17.0452 9.6 18 9.6V7.2ZM24 13.2C24 11.6087 23.3679 10.0826 22.2426 8.95736C21.1174 7.83214 19.5913 7.2 18 7.2V9.6C18.9548 9.6 19.8705 9.97928 20.5456 10.6544C21.2207 11.3295 21.6 12.2452 21.6 13.2H24ZM18 19.2C19.5913 19.2 21.1174 18.5679 22.2426 17.4426C23.3679 16.3174 24 14.7913 24 13.2H21.6C21.6 14.1548 21.2207 15.0705 20.5456 15.7456C19.8705 16.4207 18.9548 16.8 18 16.8V19.2ZM18 16.8C17.0452 16.8 16.1295 16.4207 15.4544 15.7456C14.7793 15.0705 14.4 14.1548 14.4 13.2H12C12 14.7913 12.6321 16.3174 13.7574 17.4426C14.8826 18.5679 16.4087 19.2 18 19.2V16.8ZM18 33.6C13.8626 33.6 9.8947 31.9564 6.96913 29.0309C4.04357 26.1053 2.4 22.1374 2.4 18H0C0 22.7739 1.89642 27.3523 5.27208 30.7279C8.64773 34.1036 13.2261 36 18 36V33.6ZM33.6 18C33.6 20.0486 33.1965 22.0772 32.4125 23.9699C31.6285 25.8625 30.4795 27.5823 29.0309 29.0309C27.5823 30.4795 25.8625 31.6285 23.9699 32.4125C22.0772 33.1965 20.0486 33.6 18 33.6V36C22.7739 36 27.3523 34.1036 30.7279 30.7279C34.1036 27.3523 36 22.7739 36 18H33.6ZM18 2.4C20.0486 2.4 22.0772 2.80351 23.9699 3.58748C25.8625 4.37145 27.5823 5.52054 29.0309 6.96913C30.4795 8.41773 31.6285 10.1375 32.4125 12.0301C33.1965 13.9228 33.6 15.9514 33.6 18H36C36 13.2261 34.1036 8.64773 30.7279 5.27208C27.3523 1.89642 22.7739 0 18 0V2.4ZM18 0C13.2261 0 8.64773 1.89642 5.27208 5.27208C1.89642 8.64773 0 13.2261 0 18H2.4C2.4 13.8626 4.04357 9.8947 6.96913 6.96913C9.8947 4.04357 13.8626 2.4 18 2.4V0Z" fill="#DE1A1B" />
              </svg>
            </a>
            <div
              className="menu-btn my-auto"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
                <div class="my-auto toolbar-menu" >
                        <img src="assets/img/icons/menu.svg" class="img-fluid" style={{width:"50px"}} />
                </div>
              {/* <img src="assets/img/icons/hamburger.svg" style={{ height: "32px", width: "32px" }} /> */}
              {/* <div className="bar"></div>
              <div className="bar mt-1"></div> */}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-end border-0"
        tabIndex="-1"
        id="offcanvasRight"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header position-relative">
          <i
            className="bi bi-x-lg text-danger menu-close cursor-pointer ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></i>
          <i className="bi bi-x-lg text-danger cursor-pointer ms-auto invisible"></i>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Research</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
          <div className="social">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube mx-3"></i>
            <i className="bi bi-linkedin"></i>
            <div className="row mb-3"></div>
            <button className="mt-3 px-4">Book a Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
