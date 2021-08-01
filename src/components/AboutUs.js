
import { useEffect, useState } from "react";
import ImageFooter from "./ImageFooter";
import Counters from "./Products/Counters";
import { getTeams, getTeamCounts } from "../Api";
import Slider from "react-slick";

const AboutUs = () => {
    const [teams, setTeams] = useState([])
    const [tab, setTab] = useState({})
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        const getTeam = async () => {
            let data = await getTeams({ limit: 4 })
            if (data.length === 4) {
                let count = await getTeamCounts()
                if (count <= 4) setHasMore(false)
                else setHasMore(true)
            }
            setTeams(data)
            setTab(data[0])
        }
        getTeam()
    }, [])

    const getTeamDetails = () => {
        const getTeam = async () => {
            let data = await getTeams({ start: `${teams.length}`, limit: 4 })
            let blogs = teams.concat(data)
            setTeams(blogs)
            let count = await getTeamCounts()
            if (count <= blogs.length) setHasMore(false)
            else setHasMore(true)
        }
        getTeam()
    }

    let renderTeams = teams.map(t => {
        return (
            <li key={t.id} onClick={(e => {
                setTab(t)
            })}>
                <span className={`d-flex align-items-center ${(tab && tab.id === t.id) ? `core-active` : ''}`}>
                    <div className="">
                        <img src={`${t.profilepic && t.profilepic[0] ? t.profilepic[0].url : `assets/img/carbon_user-avatar-filled.png`}`} alt="" className="img-fluid" width="60px" />
                    </div>
                    <div className="text-gray mt-3 ml-4">
                        <h6 className="mb-1">{t.name}</h6>
                        <p>{t.position}</p>
                    </div>
                </span>
            </li>
        )
    })

    let slider_settings = {
        arrows: true,
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: false
    }
    return (
        <>
            <div className="Careers-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-10 col-12">
                            <div className="Careers-section d-flex vh-100 flex-column justify-content-center">
                                <div className="text-center">
                                    <div className="text-center blog-titles">
                                        <span className="text-color text-small-name fw_bold fs_18">About us</span>
                                        <h1 className="fw_4 text-gray mt-4">
                                            <span className="fw_3">Amplifying reach, speed and </span>
                                            <span className="fw_6">accuracy of Healthcare.</span>
                                        </h1>
                                        <p className="text-gray mt-3 fs_18 fw_3 ls_7">The microscopic examination continues to be the gold standard for diagnosing several critical diseases. Unfortunately, microscopy is an entirely manual process, suffering from common pitfalls of inconsistency and inefficiency. With only 1 qualified pathologist per million people, this problem can only get worse over time.</p>
                                        <p className="text-gray mt-3 fs_18 fw_3 ls_7">SigTuple democratizes microscopy by automating it through advanced AI and robotics. AI-assisted digital microscopy, enabled through the cloud, takes the drudgery out of the current process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Counters />

            <div className="mission-area">
                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-6 col-12">
                            <div className="mission-text">
                                <span className="text-color ls_7 fw_6">MISSION</span>
                                <h6 className="text-gray mt-2">To democratize microscopy by enabling AI-assisted remote review unhindered by geographical boundaries</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-md-last order-first">
                            <div className="mission-images">
                                <img src="assets/img/mission.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 align-items-center visiton-box">
                        <div className="col-md-6 col-12">
                            <div className="mission-images">
                                <img src="assets/img/vision.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="mission-text">
                                <span className="text-color ls_7 fw_6">VISION</span>
                                <h6 className="text-gray mt-2">To be a global leader in the automation of manual processes in clinical laboratories</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="values-area">
                <div className="container">
                    <div className="row align-items-center justify-content-center solutions-vh vh-100">
                        <div>
                            <div className="col-12">
                                <div className="text-center">
                                    <h1 className="text-title"><strong>Our values</strong> keep us focused!</h1>
                                </div>
                            </div>
                            <div className="col-md-8 col-12 mx-auto">
                                <div className="values-grid  grid-3 mt-80">
                                    <div className="values-list">
                                        <div className="values-text text-gray mt-3">
                                            <h5 className="text-color text-uppercase ls_7 fw_6">Sovel</h5>
                                            <p className="text-gray">real clinical problems affecting billions of lives across the globe.</p>
                                        </div>
                                    </div>
                                    <div className="values-list value-center">
                                        <div className="values-text text-gray mt-3">
                                            <h5 className="text-color text-uppercase ls_7 fw_6">Be</h5>
                                            <p className="text-gray">the market leader in innovation with the primary focus on R&D and provide continuing value to the customer</p>
                                        </div>
                                    </div>
                                    <div className="values-list pl-50">
                                        <div className="values-text text-gray mt-3">
                                            <h5 className="text-color text-uppercase ls_7 fw_6">Provide</h5>
                                            <p className="text-gray">great quality at an affordable price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Story-area">
                <div className="container">
                    <div className="row align-items-center justify-content-center Story-vh vh-100">
                        <div className="col-md-9 col-12">
                            <div className="story-box story-grid">
                                <div className="Story-left-slider">
                                    <div className="story-slider">
                                        <Slider {...slider_settings}>
                                        <div className="item">
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <div className="Story-year-list">
                                                        <h1 className="text-color fw_6 fs_82">2015 </h1>
                                                        <div className="Story-year-text mt-4">
                                                            <div className="d-flex Story-month-data">
                                                                <div className="Story-month">
                                                                    <span className="text-gray fw_6 fs_18">JUl</span>
                                                                </div>
                                                                <div className="Story-month-description">
                                                                    <span className="text-gray fs_18">Our journey towards innovation begins</span>
                                                                </div>
                                                            </div>

                                                            <div className="d-flex mt-4 Story-month-data">
                                                                <div className="Story-month">
                                                                    <span className="text-gray fw_6 fs_18">Nov</span>
                                                                </div>
                                                                <div className="Story-month-description">
                                                                    <span className="text-gray fs_18">Received Seed funding of $740K</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <div className="Story-year-list">
                                                        <h1 className="text-color fw_6 fs_82">2015 </h1>
                                                        <div className="Story-year-text mt-4">
                                                            <div className="d-flex Story-month-data">
                                                                <div className="Story-month">
                                                                    <span className="text-gray fw_6">JUl</span>
                                                                </div>
                                                                <div className="Story-month-description">
                                                                    <span className="text-gray">Our journey towards innovation begins</span>
                                                                </div>
                                                            </div>

                                                            <div className="d-flex mt-4 Story-month-data">
                                                                <div className="Story-month">
                                                                    <span className="text-gray fw_6">Nov</span>
                                                                </div>
                                                                <div className="Story-month-description">
                                                                    <span className="text-gray">Received Seed funding of $740K</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className="storyright-image">
                                    <div className="storyright-image-box">
                                            <div className="slider-images">
                                                <img src="https://dummyimage.com/500x500" className="img-fluid" alt="" />
                                            </div>
                                            <div className="slider-images active">
                                                <img src="https://dummyimage.com/500x500" className="img-fluid" alt="" />
                                            </div>
                                            <div className="slider-images">
                                                <img src="https://dummyimage.com/500x500" className="img-fluid" alt="" />
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="coreteam-area ptb-150">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center optiontitle">
                                <h2 className="text-title text-color fw_8 fs_24">The Core</h2>
                                <h1 className="text-gray fw_6">Our Team</h1>
                                <p className="text-gray mt-4 fs_18 fw_3 ls_7">Meet our team of visionary leaders who are creating a real<br /> impact on the healthcare world today</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8 col-12 mx-auto">
                            <div className="Core-grid grid-2">
                                <div className="Core-list">
                                    <div className="Core-team-list">
                                        <ul className="m-0">
                                            {renderTeams}
                                        </ul>
                                    </div>
                                </div>
                                <div className="Core-list">
                                    <div className="Core-team-details">
                                        <div className="Core-team-details-list">
                                            <p className="text-gray">{tab && tab.description ? tab.description.slice(0, 315) : null}</p>
                                            {tab && tab.description && tab.description.length > 315 ? <p className="text-gray"> {tab.description.slice(315, tab.description.length)}</p> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {hasMore ? <div className="row" onClick={(e => {
                            e.preventDefault()
                            getTeamDetails()
                        })}>
                            <div className="col-12 text-center mt-5">
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">View All
                                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "5px", marginTop: "-3px" }}>
                                        <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B"></path>
                                    </svg>
                                </a>
                            </div>
                        </div> : null}

                    </div>
                </div>
            </div>

            <div className="Investors-area ptb-150">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center optiontitle">
                                <h2 className="text-title text-color fw_8 fs_24 mb-20">Our Investors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 col-12 mx-auto">
                            <div className="Investors-grid grid-4">
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/01.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/02.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/03.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/04.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/05.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/06.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/07.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="Investors-list">
                                    <div className="Investors-img">
                                        <img src="assets/img/investors/08.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageFooter />

        </>
    )

}

export default AboutUs;