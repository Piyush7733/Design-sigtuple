import Benefits from "./Products/Benefits";
import Client from "./Client";
import ImageFooter from "./ImageFooter";
import Slider from "react-slick";

const ShravaPage = () => {

    let shrava_settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
    }


    let product_settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: false,
    }

    return (<>

        <div className="ShravaAI-area">
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Product-text-area d-flex flex-column">
                            <div className="mt-auto text-center Product-text">
                                <img src="assets/img/shonit_01.png" alt="" className="img-fluid" width="150" />
                                <p>Shrava is an AI application that analyses urine morphology to identify <br /> and pre-classify sediments in urine sample</p>
                                <button className="d-block mx-auto px-4 ">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-12 mx-auto slider-pc-bg">
                        <div className="Shonit-slider ">
                            <Slider {...shrava_settings}>
                                <div className="item">
                                    <img src="assets/img/Shrava/SS1.png" alt="" style={{height:"385px",width:"578px"}}/>
                                </div>
                                <div className="item">
                                    <img src="assets/img/Shrava/SS2.png" alt="" style={{height:"385px",width:"578px"}}/>
                                </div>
                                <div className="item">
                                    <img src="assets/img/Shrava/SS3.png" alt="" style={{height:"385px",width:"578px"}}/>
                                </div>
                            </Slider>
                        </div>
                        <img src="assets/img/Shrava/pc.png" className="img-fluid pc-img" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="accurate-area mx-auto">
            <div className="container ptb-80">
                <div className="row">
                    <div className="col-xxl-7 col-12 mx-auto mt-3 position-relative">
                        <p>AI100 with <span className="text-color">Shrava</span> gives out an accurate report on the presence of</p>

                        <div className="accurate-grid Shrava-grid grid-2 mt-5 ">
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>RBC s</h5>
                                </div>
                            </div>
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>Casts</h5>
                                </div>
                            </div>
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>Crystals</h5>
                                </div>
                            </div>
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>Yeast</h5>
                                </div>
                            </div>
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>Epithelial cells</h5>
                                </div>
                            </div>
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>Pus cells</h5>
                                </div>
                            </div>
                            <div className="accurate-list text-gray d-flex align-items-center">
                                <div className="accurate-list-img">
                                    <img src="https://dummyimage.com/80x80" className="img-fluid" alt="" />
                                </div>
                                <div className="text-gray">
                                    <h5>Microscopic organisms</h5>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-150">
                            <p className="text-color text-small-name">Features</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className="analysis-area mx-auto">
            <div className="container ptb-80">
                <div className="analysis-slider">
                    <Slider {...product_settings} >
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="analysis-text">
                                        <h1 className="text-gray fw_3"><strong>AI-assisted </strong> analysis</h1>
                                        <p className="text-gray m-0">Automated WBC DC, RBC morphology, and platelet morphology reporting with visual evidence</p>
                                    </div>
                                </div>
                                <div className="col-md-8 text-center">
                                    <div className="analysis-img">
                                        <img src="assets/img/product/multiple_tests/banner_01.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="Microscopic-text">
                                        <h1 className="text-gray fw_3"><strong>Microscopic </strong> view</h1>
                                        <p className="text-gray m-0">The Microscopic view enables the pathologist to virtually “see” the slide as if it were under a microscope </p>
                                    </div>
                                </div>
                                <div className="col-md-8 text-center">
                                    <div className="analysis-img">
                                        <img src="assets/img/product/multiple_tests/banner_01.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                </div>
            </div>
        </div>

        <div className="steps-area mx-auto">
            <div className="container ptb-80">
                <div className="row align-items-center steps-vh vh-100">
                    <div className="col-md-12 ">
                        <div className="steps-grid grid-3">
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <h2 className="fw_3">Simplified Sample <strong>Preparation </strong></h2>
                                    <p>A single-use, leak proof, drift arresting Urine cartridge, AX200μ, simplifies the urine sample preparation.</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <h2 className="fw_3">High <br /><strong>Throughput </strong></h2>
                                    <p>Shonit is a stain agnostic system, it is compatible with all Romanowsky stains</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <h2 className="fw_3">Sample Preparation <br /><strong>Quality Check </strong></h2>
                                    <p>System provides feedback on the quality of slides for each sample analysed.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="work-area ">
            <div className="container-fluid px-0 position-relative video-section">
                <video id="media-video" poster="assets/img/video_section.png"><source src="assets/video/video.mp4" type="video/mp4" />
                </video>
                <div className="video-text container text-center">
                    <img src="assets/img/logo.png" className="img-fluid" alt="" />
                </div>
                <div id="play-pause-button" className="play-btn"><i className="fa fa-play" aria-hidden="true"></i></div>
            </div>
        </div>

        <Benefits />

        <div className="Clients-area our-client d-flex client-before client-after pb-50">
            <canvas className="bg-gradient-canvas2" />
            <div className="container py-100">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h1 className="text-title">From<b> Our Clients</b></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-9 col-12 mx-auto mt-5 position-relative">
                        <img src="assets/img/cot.png" className="cot" />
                        <Client />
                    </div>
                </div>
            </div>
        </div>

        <ImageFooter />


    </>
    )
}
export default ShravaPage;