import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import NextArrow from "./Arrow/NextArrow";
import PrevArrow from "./Arrow/PrevArrow";
import MicroProduct from "./LandingPage/MicroProduct";
import VideoDescription from "./LandingPage/VideoDescription";
import Shonit from "./LandingPage/Shonit";
import Shrava from "./LandingPage/Shrava";
import Reviews from "./LandingPage/Reviews";
import Client from "./LandingPage/Client";
import Blogs from "./LandingPage/Blogs";
import Awards from "./LandingPage/Awards";
import Footer from "./Footer";
import SectionCounter from "./LandingPage/SectionCounter";
import "../css/LandingPage.css";

import Header from "./Header";

const LandingPage = () => {
  const [hoverStyle, setHoverStyle] = useState(null);

  return (
    <div className="main">
      <Header />
      <div className="container-fluid hero-banner">
        <div className="container hero-section d-flex h-100 flex-column">
          <div className="m-auto text-center">
            <div id="zoom">
              <div className="small">
                <h1 className="m-0">
                  The<b> Future of Microscopy</b> is Here!
                </h1>
                <center>
                  <h2>
                    We are democratizing microscopy through AI, robotics, and
                    cloud computing.
                  </h2>
                </center>
              </div>
            </div>

            <div class="m-auto text-center check-products">
              <a href="#product_sections">
                <div class="eye-section">
                  <span class="text-danger font-regular fw-bold">Check our products</span>
                  <div class="eye mt-2"><img src="assets/img/eye.png" /></div>
                </div>
              </a>
              <div class="verticle"></div>
            </div>
            {/* <a href="#product_sections">
              <div className="eye-section">
                <span className="text-danger font-regular fw-bold">
                  Check our products
                </span>
                <div className="eye mt-2">
                  <img src="assets/img/eye.png" />
                </div>
              </div>
            </a>
            <div className="verticle"></div> */}
          </div>
        </div>
      </div>

      {/* <div id="product_sections">
        <div className="container-fluid microscope">
          <div className="container">
            <div className="row">
              <div
                className="w-auto my-auto d-flex h-100 flex-column position-relative"
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setHoverStyle("shonit")
                }}
              >
                <div
                  className={`blood ${
                    hoverStyle==='shonit' ? `bg-transparent shadow-none` : "bg-white"
                  }`}
                >
                  <img src="assets/img/shonit.png" />
                </div>
                <div className={`mt-3  ${hoverStyle==='shonit' ? `` : "mx-auto"}`}>
                  <p
                    className={`text-description m-0 ${
                      hoverStyle==='shonit' ? `analysis_bold` : ""
                    }`}
                  >
                    Blood
                  </p>
                  <p
                    className={`text-description m-0 fw-bold ${
                      hoverStyle==='shonit' ? "analysis_bold" : ""
                    }`}
                  >
                    Analyser
                  </p>
                </div>
                <div
                  className={`boold-hover mx-auto ${
                    hoverStyle==='shonit' ? `blood-hover-block` : "blood-hover-none"
                  }`}
                >
                  <p className="m-0">
                    Shonit is an automated peripheral blood smear slide analyzer
                  </p>
                  <button className="d-block px-4 explore">
                    Explore
                    <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
              </div>
              <div className="col-8 mx-auto">
                <div className="bg-white micro-product">
                  <div className={`${hoverStyle==='shonit' ? `our_product_text_block` : hoverStyle==='shrava' ? `our_product_text_block`: `our_product_text_none`}`}>Our <strong>Products</strong></div>
                  <div className="text-center mt-5">
                    <img
                      src="assets/img/AI100_2 1.png"
                      width="100%"
                      className="img-fluid a1 user-select-none"
                    />
                  </div>
                  <MicroProduct setHoverStyle={setHoverStyle} hoverStyle={hoverStyle} />
                  <p className="text-description text-center mt-4">
                    The AI100 is an AI-driven smart robotic microscope.
                  </p>
                  <button className="d-block mx-auto px-4 explore">
                    Explore
                    <i className="bi bi-arrow-right-short"></i>
                  </button>
                </div>
                {/* // <MicroProduct setShonit={shonitStyle} setShrava={shravaStyle} setShonitStyle={setShonitStyle} setShravaStyle={setShravaStyle}/>
                // <p className="text-description text-center mt-4">
                //   The AI100 is an AI-driven smart robotic microscope.
                // </p>
                // <button className="d-block mx-auto px-4 explore">
                //   Explore
                //   <i className="bi bi-arrow-right-short"></i>
                // </button> */}
      {/* </div>
              <div
                className="w-auto my-auto d-flex flex-column h-100 position-relative"
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setHoverStyle("shrava")
                }}
              >
                <div
                  className={`blood ${
                    hoverStyle==='shrava' ? `bg-transparent shadow-none` : "bg-white"
                  }`}
                >
                  <img src="assets/img/urine.png" />
                </div>
                <div className={`mt-3 mx-auto`}>
                  <p
                    className={`text-description m-0 ${
                      hoverStyle==='shrava' ? `analysis_bold` : ""
                    }`}
                  >
                    Urine
                  </p>
                  <p
                    className={`text-description m-0 fw-bold ${
                      hoverStyle==='shrava' ? `analysis_bold` : ""
                    }`}
                  >
                    Analyser
                  </p>
                  <div
                    className={`boold-hover-shrava ${
                      hoverStyle==='shrava'
                        ? `blood-hover-shrava-block`
                        : "blood-hover-shrava-none"
                    }`}
                  >
                    <p>
                      Shrava is an automated peripheral blood smear slide
                      analyzer
                    </p>
                    <button className="d-block px-4 explore mt-2">
                      Explore
                      <i className="bi bi-arrow-right-short"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/*</div> */}

      <div class="procuct-area" id="product_sections">
        <div class="container-fluid container-set position-relative">
          <div class="row mt-5 position-relative">
            <div class="col position-relative">
              <div class="text-center position-relative">
                <h2 class={`text-title text-center pb-3 position-relative ${hoverStyle ? `our_product_text_block` : `our_product_text_none`}`}>Our<b> Product</b></h2>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <div class="product-grid">
                <div class="box-ProcuctLeft my-auto" onMouseEnter={(e) => {
                  e.preventDefault();
                  setHoverStyle("shonit")
                }}>
                  <div class="ProcuctLeft">
                    <div class={`blood ${hoverStyle === 'shonit' ? `bg-transparent shadow-none` : `bg-white`
                      }`}>
                      <img src="assets/img/shonit.png" />
                    </div>
                    <div class="ProcuctLeft-description text-center">
                      <div class="mt-3 mx-3">
                        <p class={`${hoverStyle === 'shonit' ? `text-description-hover` : 'text-description'} m-0 text-start`}>Blood <br /><strong>Analyzer</strong></p>
                      </div>
                      <div class={`mt-3 mx-3 sub-description ${hoverStyle === 'shonit' ? `sub-description-block` : `sub-description-none`}`}>
                        <p class="m-0 text-start">Shonit is an automated peripheral blood smear slide analyzer</p>
                        <button class="d-block px-4 mt-3 explore text-start">
                          Explore
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box-ProcuctCenter my-auto">
                  <div class="text-center ">
                    <img src="assets/img/AI100_2 1.png" class="img-fluid position-relative" />
                  </div>
                  <div class="slick-slider product-slider mt-5">
                    <MicroProduct hoverStyle={hoverStyle} />
                    {/* <div class="">
                      <div class="relative_microscope text-center">
                        <img src="assets/img/microscope.png" class="img-fluid mx-auto" />
                      </div>
                    </div> */}
                  </div>
                  <div class="position-relative mb-50">
                    <p class="text-description text-center mt-4">The AI100 is an AI-driven smart robotic microscope.</p>
                    <button class="d-block mx-auto px-4 explore">
                      Explore
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B" />
                      </svg>
                    </button>
                  </div>

                  <div class={`box-detailsproduct ${hoverStyle ? `main-hover-flex` : `main-hover-none`}`} onMouseLeave={(e => {
                    setHoverStyle(null)
                  })}>
                    <div class="main-hover row m-0 g-0">
                      <div class="text-img">
                        <img src="assets/img/circle-dot.png" />
                        <div class="text-hover col">
                          <p class="text-description mt-auto ps-3">
                            Neutrophil <span>2</span></p>
                          <p class="text-description mt-auto ps-3">Lymphocyte</p>
                          <p class="text-description mt-auto ps-3">Monocyte<span>1</span></p>
                          <p class="text-description mt-auto ps-3">Neutrophil</p>
                          <p class="text-description mt-auto ps-3">Lymphocyte</p>
                          <p class="text-description mt-auto ps-3">Monocyte</p>
                        </div>
                      </div>
                      <div class="col-12 d-flex classified border-top">
                        <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified<span>1</span></p>
                        <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">Rejected <span>7</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="box-ProcuctRight my-auto" onMouseEnter={(e) => {
                  e.preventDefault();
                  setHoverStyle("shrava")
                }}>
                  <div class="ProcuctRight">
                    <div class={`blood ${hoverStyle === 'shrava' ? `bg-transparent shadow-none` : `bg-white`
                      }`}>
                      <img src="assets/img/urine.png" />
                    </div>
                    <div class="ProcuctRight-description text-center">
                      <div class="mt-3 mx-3">
                        <p class={`${hoverStyle === 'shrava' ? `text-description-hover` : 'text-description'} m-0 text-start`}>Urine <br /><strong>Analyser</strong></p>
                      </div>
                      <div class={`mt-3 mx-3 sub-description ${hoverStyle === 'shrava' ? `sub-description-block` : `sub-description-none`}`}>
                        <p class="m-0 text-start">Shrava is an automated peripheral blood smear slide analyzer</p>
                        <button class="d-block px-4 mt-3 explore text-start">
                          Explore
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="mobileproduct">
            <div class="mobileproduct-grid mt-4 mx-auto ">
              <div class="ProcuctLeft mx-auto">
                <div class="ProcuctLeft-img">
                  <img src="assets/img/shonit.png" />
                </div>
                <div class="ProcuctLeft-description mx-auto">
                  <div class="mt-3 mx-3">
                    <p class="text-description m-0 text-start">Blood <br /><strong>Analyzer</strong></p>
                  </div>
                  <div class="mt-3 mx-3 sub-description">
                    <p class="m-0 text-start">Shonit is an automated peripheral blood smear slide analyzer</p>
                    <button class="d-block px-4 mt-3 explore text-start">
                      Explore
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="ProcuctRight mx-auto">
                <div class="ProcuctLeft-img">
                  <img src="assets/img/urine.png" />
                </div>
                <div class="ProcuctRight-description text-center">
                  <div class="mt-3 mx-3">
                    <p class="text-description m-0 text-start">Urine <br /><strong>Analyser</strong></p>
                  </div>
                  <div class="mt-3 mx-3 sub-description">
                    <p class="m-0 text-start">Shrava is an automated peripheral blood smear slide analyzer</p>
                    <button class="d-block px-4 mt-3 explore text-start">
                      Explore
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="bg_round"></div>
      </div>



      <SectionCounter />
      <VideoDescription />


      <div class="work-area py-100">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="text-center">
                <h1 class="text-title text-center pb-3">How does<b> AI100 work?</b></h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-md-6 col-sm-8 col-12  mx-auto mt-4">
              <div class="d-flex mb-3">
                <ul class="nav nav-pills mb-3 mx-auto" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link px-5 nav-link-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false">Shonit</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link px-5 nav-link-2 active" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">Shrava</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade position-relative" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div class="work-box">
                    <div class="text_section_blood">Shonit <strong>in Action</strong></div>
                    <div class="blood image_section_blood"><img src="assets/img/shonit.png" /></div>
                  </div>
                </div>
                <div class="tab-pane fade position-relative active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <div class="work-box">
                    <div class="text_section_blood">Shrava <strong>in Action</strong></div>
                    <div class="blood image_section_blood"><img src="assets/img/urine.png" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container py-100">
        <h1 className="text-title text-center pb-3">
          How does
          <b> AI100 work?</b>
        </h1>
        <div className="col-8 mx-auto mt-4">
          <div className="d-flex mb-3">
            <ul
              className="nav nav-pills mb-3 mx-auto"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link px-5 active nav-link-1"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                Shonit
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link px-5 nav-link-2"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Shrava
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <Shonit />
            <Shrava />
          </div>
        </div>
      </div> */}


      <div class="Extensive-area py-100">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="text-center">
                <h1 class="text-title text-center">Bringing Speed &amp; Precision with<b> Extensive R&amp;D</b></h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-10 col-11 mx-auto bg-white mt-5">
              <div class="slick-slider Extensive-slider">
                <Reviews />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center mt-5">
              <a href="" class="text-decoration-none text-danger fw-bold text-fwb">View All <img src="assets/img/red_next_arrow.png" class="img-fluid ml-3" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-100 review">
        <h1 className="text-title text-center">
          Bringing Speed & Precision with
          <b> Extensive R&D</b>
        </h1>
        <div className="col-xxl-9 col-10 mx-auto bg-white mt-5">
          <Reviews />
        </div>
        <div className="col-12 text-center mt-5">
          <a
            href=""
            className="text-decoration-none text-danger fw-bold text-fwb"
          >
            View All
            <img src="assets/img/red_next_arrow.png" style={{ margin: "5px", paddingBottom: "5px", height: "25px" }} />
          </a>
        </div>
      </div> */}


      <div class="Clients-area our-client d-flex">
        <div class="container py-100">
          <div class="row">
            <div class="col">
              <div class="text-center">
                <h1 class="text-title">From<b> Our Clients</b></h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-9 col-12 mx-auto mt-5 position-relative">
              <img src="assets/img/cot.png" class="cot" />
              <Client />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid our-client d-flex">
        <div className="container my-auto">
          <div className="row mx-auto">
            <h1 className="text-title text-center">
              From
              <b> Our Clients</b>
            </h1>
            <div className="col-xxl-9 col-10 mx-auto mt-5 position-relative">
              <img src="assets/img/cot.png" className="cot" />
              <Client />
            </div>
          </div>
        </div>
      </div> */}


      <div class="Brewing-area">
        <div class="container py-100">
          <div class="row">
            <div class="col">
              <div class="text-center">
                <h1 class="text-title">Know<b> What’s Brewing</b></h1>
                <p class="text-description">Get access to the breakthroughs we make in our research and innovation every day.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xxl-10 col-11 mx-auto bg-white mt-5">
              <div class="slick-slider brewing-slider">
                <Blogs />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-100">
          <h1 className="text-title text-center">
            Know
            <b> What’s Brewing</b>
          </h1>
          <p className="text-description text-center">
            Get access to the breakthroughs we make in our research and innovation
            every day.
          </p>
          <div className="col-xxl-10 col-11 mx-auto bg-white mt-5">
            <Blogs />
          </div>
        </div> */}




      <div class="awards-area award d-flex">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="text-center">
                <h1 class="text-title">Awards &amp;<b> Recognitions</b></h1>
              </div>
            </div>
          </div>
          <div class="col-12 mx-auto mt-70">

            <div class="slick-slider awards-slider">
              <Awards />
          </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid award d-flex">
                <div className="container my-auto">
                  <h1 className="text-title text-center">
                    Awards &<b> Recognitions</b>
                  </h1>
                  <div className="col-12 mx-auto mt-5">
                    <Awards />
                  </div>
                </div>
              </div> */}


<div class="yourself-area simple d-flex">
                <div class="container my-auto">
                    <div class="row">
                        <div class="col">
                            <h1>
                                Simple. Quick. Accurate.<br />
                                <b>See it for yourself.</b>
                            </h1>
                            <p class="my-3">
                                Let us show you how our device helps<br />
                                you transform your workflow
                            </p>
                            <button class="mt-3 px-4 shadow-none">Book a Demo</button>                            
                        </div>
                    </div>

                </div>
            </div> 
      <Footer />
    </div>
  );
};

export default LandingPage;
