import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getClients } from "../Api";
import NextArrow from "./Arrow/NextArrow";
import PrevArrow from "./Arrow/PrevArrow";

const Client = () => {
  const [clients, setClient] = useState([]);
  // const [clientCount, setClientCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);

  let client_next = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // padding: "14px",

    position: "absolute",
    width: "50px",
    height: "50px",
    border: "3px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "41px",
    // left: "calc(100% - 125px)",
    // top: "347px",
    zIndex: 20,
  };
  let client_prev = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // padding: "14px",

    position: "absolute",
    width: "50px",
    height: "50px",
    border: "3px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: "41px",
    // left: "calc(100% - 130px)",
    // top: "347px",
    zIndex: 20,
  };
  const settings_clinet = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      setCurrentIndex(current + 1);
    },
    nextArrow: (
      <NextArrow
        clientNext={client_next}
        ARROW_NEXT={`assets/img/right_arrow_white.png`}
        ARROW_SIZE={"12px"}
      />
    ),
    prevArrow: (
      <PrevArrow
        clientPrev={client_prev}
        ARROW_PREW={`assets/img/left_arrow_white.png`}
        ARROW_SIZE={"12px"}
      />
    ),
  };
  useEffect(() => {
    // console.log(Api.defaults.baseURL)
    const getClient = async () => {
      let data = await getClients();
      console.log(data);
      setClient(data);
    };
    // const getCount = async () => {
    //   let data = await Api.get("/clients/count");
    //   console.log(data);
    //   setClientCount(data.data);
    // };
    getClient();
    // getCount();
  }, []);

  const renderItems = clients.map((c) => {
    return (
      //   <div className="d-flex mx-0 px-2 pb-2 client_sections" key={c.id}>
      //     <div
      //       className="col-6 client-say d-flex flex-column"
      //       style={{
      //         backgroundColor: "#FFFFFF",
      //         boxShadow: "0px 4px 14px rgba(112, 112, 112, 0.25)",
      //         borderTopLeftRadius: "20px",
      //         borderBottomLeftRadius: "20px",
      //         padding: "2px",
      //         marginLeft: "5px",
      //       }}
      //     >
      //       <div className="my-auto">
      //         <p className="text-description fw-bold clients_text_sections">
      //           ???{c.review}???
      //         </p>
      //         <div className="d-flex name mt-4 clients_user_sections">
      //           <img
      //             src={`${Api.defaults.baseURL}${c.profilepic[0].url}`}
      //             className="me-3"
      //           />
      //           <div>
      //             <h3 className="text-sub fw-bold mb-1">{c.Username}</h3>
      //             <p>{c.designation},</p>
      //             <p>{c.work_at}</p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div
      //       className="col-6 company-say d-flex flex-column"
      //       style={{ backgroundColor: "red" }}
      //     >
      //       <span
      //         className="transparent_section_client"
      //         style={{
      //           background: "#FFFFFF",
      //           boxShadow: "0px 4px 14px rgba(112, 112, 112, 0.25)",
      //           borderRadius: "60px 60px 0px 60px",
      //           position: "absolute",
      //           left: "457px",
      //           height: "356px",
      //           width: "61px",
      //         }}
      //       ></span>
      //       <div className="m-auto w-50">
      //         <h1 className="text-title text-white fw-bold">{c.review_title}</h1>
      //         <p className="text-description text-white">{c.short_review}</p>
      //         <div
      //           className="clientCount"
      //           style={{
      //             //  left: 'calc(100% - 1300px)',
      //             top: "calc(100% - 69px)",
      //             opacity: ".5",
      //             position: "absolute",
      //             fontFamily: "Nunito Sans",
      //             fontStyle: "normal",
      //             fontWeight: "normal",
      //             fontSize: "18px",
      //             lineHeight: "130%",
      //             color: "#FFFFFF",
      //           }}
      //         >
      //           {currentIndex < 10
      //             ? currentIndex.toString().padStart(2, "0")
      //             : currentIndex}
      //           /
      //           {clientCount < 10
      //             ? clientCount.toString().padStart(2, "0")
      //             : clientCount}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // <>
      //   <div className="container">
      //     <div
      //       className="row"
      //       style={{
      //         backgroundColor: "#de1a1b",
      //         borderRadius: "40px",
      //         minHeight: "360px",
      //       }}
      //     >
      //       <div
      //         className="col-6"
      //         style={{
      //           backgroundColor: "#FFF",
      //           boxShadow: "0px 4px 14px rgba(112, 112, 112, 0.25)",
      //           borderTopLeftRadius: "20px",
      //           borderTopRightRadius: "50px",
      //           borderBottomLeftRadius: "20px",
      //         }}
      //       >
      //         <div className="card-body">
      //           <p className="text-description fw-bold clients_text_sections">
      //           ???{c.review.slice(0,170)}???
      //           </p>
      //           <div className="d-flex name clients_user_sections">
      //             <img
      //               src={`${Api.defaults.baseURL}${c.profilepic[0].url}`}
      //               className="me-3"
      //             />
      //             <div className="py-2">
      //               <h3 className="text-sub fw-bold m-0">{c.Username}</h3>
      //               <p className="m-0 client_section_text">{c.designation},</p>
      //               <p className="m-0 client_section_text">{c.work_at}</p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div
      //         className="col-6 d-flex align-items-center"
      //         style={{
      //           backgroundColor: "#de1a1b",
      //           padding: "0 80px",
      //           borderTopRightRadius: "20px",
      //           borderBottomRightRadius: "20px",
      //         }}
      //       >
      //         <div className="card-body">
      //           <h1 className="text-title text-white fw-bold">
      //             {/* good use of remote access */}
      //             {c.review_title}
      //           </h1>
      //           <p className="text-description text-white m-0">
      //             for reporting post working hours and weekends
      //           </p>
      //           <div
      //             className="clientCount"
      //             style={{
      //               top: "calc(100% - 75px)",
      //               opacity: ".5",
      //               position: "absolute",
      //               fontFamily: "Nunito Sans",
      //               fontStyle: "normal",
      //               fontSize: "20px",
      //               color: "#FFFFFF",
      //             }}
      //           >
      //             {currentIndex < 10
      //               ? currentIndex.toString().padStart(2, "0")
      //               : currentIndex}
      //             {" "}/{" "}
      //             {clientCount < 10
      //               ? clientCount.toString().padStart(2, "0")
      //               : clientCount}
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </>

      <div className="slide" key={c.id}>
        <div className="row" >
          <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12" >
            <div className="card-body left-card-body">
              <p className="text-description fw_6 clients_text_sections">
                ???{c.review.slice(0, 200)}???
              </p>
              <div className="d-flex name clients_user_sections">
                <img src={`${c.profilepic && c.profilepic[0] ? c.profilepic[0].url : 'assets/img/carbon_user-avatar-filled.png'}`} class="me-3" style={{ objectFit: "cover" }} />
                <div className="py-2">
                  <h3 className="text-sub fw-bold m-0">{c.Username}</h3>
                  <p className="m-0 client_section_text">{c.designation},</p>
                  <p className="m-0 client_section_text">{c.work_at}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <div className="card-body right-card-body">
              <h1 className="text-title text-white fw_8 ls_1">{c.review_title}</h1>
              <p className="text-description text-white m-0">{c.short_review}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Clients-area our-client d-flex client-before client-after pb-50">
      <canvas className="bg-gradient-canvas2" />
      <div className="container py-100">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h1 className="text-title fw_2">From <span className="fw_6">Our Clients</span></h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-9 col-12 mx-auto mt-5 position-relative">
            <img src="assets/img/cot.png" className="cot" />
            <div class="Clients-slider">
              <Slider {...settings_clinet}>{renderItems}</Slider>
              <div class="Clients-count">
                {currentIndex < 10
                  ? currentIndex.toString().padStart(2, "0")
                  : currentIndex}
                {" "}/{" "}
                {clients.length < 10
                  ? clients.length.toString().padStart(2, "0")
                  : clients.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
