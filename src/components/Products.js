import Client from "./Client";
import ImageFooter from "./ImageFooter";
import Benefits from "./Products/Benefits";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { getTechSepcs, getTechSepcsCounts } from "../Api";
import { Link } from "react-router-dom";
const Products = () => {
    const [techSpecs, setTechSpecs] = useState([])
    const [tab, setTab] = useState(0)
    const [hasMore, setHasMore] = useState(false)

    const parentRef = useRef()
    const sliderRef = useRef()


    useEffect(() => {
        if (!parentRef.current) {
            return;
        }

        parentRef.current.addEventListener("wheel", e => handleScroll(e));

        return () => {
            parentRef && parentRef.current && parentRef.current.removeEventListener("wheel", e => handleScroll(e));
        };
    }, [parentRef])

    const handleScroll = e => {
        e.preventDefault();
        if (e.deltaY < 0) {
            sliderRef && sliderRef.current.slickNext();
        } else {
            sliderRef && sliderRef.current.slickPrev();
        }
    };

    useEffect(() => {
        const getTechSepc = async () => {
            let data = await getTechSepcs({ limit: 4 })
            if (data.length === 4) {
                let count = await getTechSepcsCounts()
                if (count <= 4) setHasMore(false)
                else setHasMore(true)
            }
            setTechSpecs(data)
        }
        getTechSepc()
    }, [])

    const getTechSpecDetails = () => {
        const getTechSepc = async () => {
            let data = await getTechSepcs({ start: `${techSpecs.length}`, limit: 4 })
            let blogs = techSpecs.concat(data)
            setTechSpecs(blogs)
            let count = await getTechSepcsCounts()
            if (count <= blogs.length) setHasMore(false)
            else setHasMore(true)
        }
        getTechSepc()
    }

    let slider_settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: false,
    }

    let renderItems = techSpecs.map(m => {
        return (
            <div className="specs-card" key={m.id} onClick={(e => {
                e.preventDefault()
                setTab(m.id)
            })}>
                <div className="specs-heading">
                    <span className={`${tab === m.id ? `` : 'collapsed'}`}>
                        {m.title}
                        {tab === m.id ? <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 11L11.4711 1.20088C11.3462 1.07227 11.1767 1 11 1C10.8233 1 10.6538 1.07227 10.5289 1.20088L1 11" stroke="#DE1A1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                            : <svg width="18" height="18" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.999999 1L10.5289 10.7991C10.6538 10.9277 10.8233 11 11 11C11.1767 11 11.3462 10.9277 11.4711 10.7991L21 0.999999" stroke="#DE1A1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>}
                    </span>
                </div>
                <div className={`specs-details ${tab === m.id ? `` : 'collapse'}`}>
                    <div className="specs-body">
                        {m.description}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="product-area">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="Product-text-area d-flex   flex-column">
                                <div className="mt-auto text-center Product-text">
                                    <img src="assets/img/AI100_2 1.png" alt="" className="img-fluid" />
                                    <p>An in-vitro diagnostic device designed to automate manual microscopy in a diagnostic laboratory. <br />It uses robotics and AI to perform a microscopic review of diagnostic samples</p>

                                    <button className="d-block mx-auto px-4 ">
                                        Book a Demo
                                    </button>
                                </div>
                                <div className="m-auto text-center products-image">
                                    <img src="assets/img/product/products-ai100-landing.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="multiple-area mx-auto">
                <div className="container ptb-80">
                    <div className="Multiple-tests-slider" ref={parentRef}>
                        <Slider {...slider_settings} ref={sliderRef}>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div className="multiple-tests-text">
                                            <h1 className="text-gray fw_2 fs_50">One device, <br /><span className="fw_6">multiple tests!</span></h1>
                                            <p className="text-gray fs_24 fw_3 m-0 mt-2">Can digitize and analyse both blood and urine</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-center">
                                        <div className="multiple-tests-img">
                                            <img src="assets/img/product/multiple_tests/banner_01.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div className="multiple-tests-text">
                                            <h1 className="text-gray fw_2 fs_50">Automated, <br /><span className="fw_6">cell identification!</span></h1>
                                            <p className="text-gray fs_24 fw_3 m-0 mt-2">backed by visual evidence</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-center">
                                        <div className="multiple-tests-img">
                                            <img src="assets/img/product/multiple_tests/banner_01.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div className="multiple-tests-text">
                                            <h1 className="text-gray fw_2 fs_50">Review report from <br /><span className="fw_6">anytime & anywhere</span></h1>
                                            <p className="text-gray fs_24 fw_3 m-0 mt-2">Web-enabled reports allow WFH</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8 text-center">
                                        <div className="multiple-tests-img">
                                            <img src="assets/img/product/multiple_tests/banner_01.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="solutions-area mx-auto">
                <div className="container ptb-80">

                    <div className="row align-items-center solutions-vh vh-100">
                        <div className="col-md-5">
                            <div className="">
                                <h1 className="text-gray fw_2 fs_54">Image Analysis <br /><span className="fw_6">Solutions</span></h1>
                                <p className="text-gray fs_22 fw_3 mb-0 mt-3">Analysers with Sigtuple AI100</p>
                            </div>
                        </div>
                        <div className="col-md-7 text-center">
                            <div className="Solutions-grid grid-2">
                                <Link to="/shonit"><div className="Solutions-list">
                                    <div className="Solutions-img">
                                        <img src="assets/img/shonit.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="Solutions-text mt-4">
                                        <h4 className="text-gray fw_4">Blood <br /><span className="fw_7">Analyser</span></h4>
                                    </div>
                                </div>
                                </Link>
                                <Link to="/shrava">
                                <div className="Solutions-list">
                                    <div className="Solutions-img">
                                        <img src="assets/img/urine.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="Solutions-text mt-4">
                                        <h4 className="text-gray fw_4">Urine<br /><span className="fw_7">Analyser</span></h4>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Benefits term={"product"}/>
            <div className="techSpecs-area">
                <div className="container ptb-80">
                    <div className="row">
                        <div className="col">
                            <div className="text-center optiontitle">
                                <h2 className="text-title text-color fw_7 fs_20">Tech Specs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-12 mx-auto mt-3 position-relative">
                            <div>
                                {renderItems}
                            </div>

                            {hasMore ? <div className="mt-30 mb-30 mx-auto text-center" style={{ cursor: "pointer" }} onClick={(async e => {
                                e.preventDefault()
                                getTechSpecDetails()
                            })}>
                                <span href="" className="text-color fw_7 mx-auto ">
                                    <span>View More</span>
                                    <svg width="18" height="18" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "5px" }}>
                                        <path d="M0.999999 1L10.5289 10.7991C10.6538 10.9277 10.8233 11 11 11C11.1767 11 11.3462 10.9277 11.4711 10.7991L21 0.999999" stroke="#DE1A1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </div> : null}

                            <div className="detailed-btn mt-50 mb-30 mx-auto text-center">
                                <Link to={{ pathname: `https://sigtuple2021.s3.us-east-2.amazonaws.com/sample_caeb4040c2.pdf` }} className="fw_7 text-gray mx-auto" target="_blank">
                                    <svg width="18" height="21" className="mr-1" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3337 9.83333H22.0003L14.0003 17.8333L6.00033 9.83333H12.667V0.5H15.3337V9.83333ZM3.33366 21.8333H24.667V12.5H27.3337V23.1667C27.3337 23.5203 27.1932 23.8594 26.9431 24.1095C26.6931 24.3595 26.3539 24.5 26.0003 24.5H2.00033C1.6467 24.5 1.30756 24.3595 1.05752 24.1095C0.807468 23.8594 0.666992 23.5203 0.666992 23.1667V12.5H3.33366V21.8333Z" fill="#707070" />
                                    </svg>&nbsp;
                                    Detailed Specifications

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Client />


            <ImageFooter />
        </>
    )

}

export default Products;