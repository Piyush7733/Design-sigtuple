import Benefits from "./Products/Benefits";
import Client from "./Client";
import ImageFooter from "./ImageFooter";
import Slider from "react-slick";

const ShonitPage = () => {
   
      let shonit_settings={
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


    let product_settings={
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
        <div className="product-area">
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="Product-text-area d-flex flex-column">
                            <div className="mt-auto text-center Product-text">
                                <img src="assets/img/shonit_01.png" alt="" className="img-fluid" width="150" />
                                <p className="mt-3 mb-4">Shonit is an AI application that analyses blood morphology <br />to identify and pre-classify WBCs, RBCs, and platelets in a blood smear</p>
                                <button className="d-block mx-auto px-4 ">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-12 mx-auto slider-pc-bg">
                        <div className="Shonit-slider ">
                            <Slider {...shonit_settings}>
                            <div className="item">
                                <img src="assets/img/Shonit/SS1.png" alt=""/>
                            </div>
                            <div className="item">
                                <img src="assets/img/Shonit/SS2.png" alt=""/>
                            </div>
                            <div className="item">
                                <img src="assets/img/Shonit/SS3.png" alt=""/>
                            </div>
                            </Slider>
                        </div>
                        <img src="assets/img/Shonit/pc.png" className="img-fluid pc-img" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="accurate-area mx-auto">
            <div className="container ptb-80">
                <div className="row">
                    <div className="col-xxl-6 col-12 mx-auto mt-3 position-relative">
                        <p>AI100 with <span className="text-color">Shonit</span> gives out an accurate</p>

                        <div className="accurate-grid grid-2 mt-5">
                            <div className="accurate-list text-gray">
                                <h1>7-part</h1>
                                <span>DC</span>
                            </div>
                            <div className="accurate-list text-gray">
                                <h1>NRBC</h1>
                                <span>flagging</span>
                            </div>
                            <div className="accurate-list text-gray">
                                <h1>RBC</h1>
                                <span>Characterization</span>
                            </div>
                            <div className="accurate-list text-gray">
                                <h1>Platelet</h1>
                                <span>Estimation</span>
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
                    <Slider {...product_settings}>
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
                                    <p className="m-0">01</p>
                                    <h2 className="fw_3"><strong>Quantified </strong><br />RBC Morphology</h2>
                                    <p>something never possible before</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <p className="m-0">02</p>
                                    <h2 className="fw_3"><strong>Stain </strong><br />Agnostic</h2>
                                    <p>Shonit is a stain agnostic system, it is compatible with all Romanowsky stains</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <p className="m-0">03</p>
                                    <h2 className="fw_3"><strong>Smear </strong><br />Agnostic</h2>
                                    <p>Shonit is a stain agnostic system, it is compatible with all Romanowsky stains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="steps-area mx-auto">
            <div className="container ptb-80 steps-top-padding">
                <div className="row align-items-center steps-vh vh-100">
                    <div className="col-md-12 ">
                        <div className="steps-grid grid-3">
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <p className="m-0">04</p>
                                    <h2 className="fw_3">Sample Preparation <br /><strong>Quality Check </strong></h2>
                                    <p>System provides feedback on the quality of slides for each sample analysed.</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <p className="m-0">05</p>
                                    <h2 className="fw_3">High<br /><strong>Throughput</strong></h2>
                                    <p>Shonit is a stain agnostic system, it is compatible with all Romanowsky stains</p>
                                </div>
                            </div>
                            <div className="steps-list">
                                <div className="steps-text mt-4 text-white">
                                    <p className="m-0">06</p>
                                    <h2 className="fw_3">High Res <br /> <strong>Images</strong></h2>
                                    <p>Shonit is a stain agnostic system, it is compatible with all Romanowsky stains</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="work-area ">
            <div className="container-fluid px-0 position-relative video-section" style={{margin:"140px"}}>
                <video id="media-video" poster="assets/img/video_bg.png">
                    <source src="assets/video/video.mp4" type="video/mp4" />
                    </video>
                <div className="video-text container text-center">
                    <img src="assets/img/shonit_logo.png" className="img-fluid" alt="" />
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
export default ShonitPage;