import { useEffect, useState } from "react";
import career_json from "../contents_json/careers";
import { getOpenings } from "../Api";
import { Link } from "react-router-dom";
const Careers = () =>{
const [code,setCode]=useState(career_json[0])
const [openings,setOpenings]=useState([])

useEffect(()=>{
    const getOpening = async() =>{
        let data=await getOpenings()
        setOpenings(data)
    }
    getOpening()
},[])

let renderItems=openings.map(o=>{
    return (
        <div className="Positions-list" key={o.id}>
                            <a href="" className="text-gray">
                                <p className="m-0 d-flex justify-content-between align-items-center">
                                    <span className="fs_22 fe_8">{o.title}</span>
                                    <Link to={{pathname:`${o.url}`}} target="_blank"><span>                                                
                                        <svg width="15" height="15" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6427 8.27861L8.27298 1.72705L9.9521 1.70713e-06L19.1885 9.5L9.9521 19L8.27297 17.2729L14.6427 10.7214L0.188475 10.7214L0.188475 8.2786L14.6427 8.27861Z" fill="#DE1A1B"/>
                                        </svg>
                                    </span>
                                    </Link>
                                </p>
                                <p className="m-0 fw_3">{o.experience}</p>
                            </a>
                        </div>
    )
})

return (
    <>
    <div className="Careers-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-10 col-12">
                    <div className="Careers-section d-flex vh-100 flex-column justify-content-center">
                        <div className="text-center">  
                            <div className="text-center blog-titles"> 
                                <span className="text-color text-small-name fw_bold fs_18">Careers</span>
                                <h1 className="fw_4 text-gray mt-4">
                                    <span className="fw_3">Join us. Invent with us.</span> 
                                    <span className="fw_6">Grow with us.</span>
                                </h1> 
                                <p className="text-gray mt-3 fs_18 fw_3 ls_7">At Sigtuple, working is more than just a job, it's a calling to discover, to invent, to bring a revolution in pathology. Here, we don't just do something better but attempt to create things the world has never thought about.</p>
                                {openings && openings.length ? <a href="#opening_job"><button className="d-block mx-auto px-4 explore">See Openings</button></a>: null}
                            </div>
                        </div>
                        <div className="text-center check-products">
                            <div className="verticle"></div> 
                            <div className="eye-section">
                                <span className="text-danger font-regular fw-bold">Scroll Down</span>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="Values-area d-flex ptb-100">
        <div className="container "> 
            <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-12"> 
                    <div className="text-left">
                        <h1 className="text-title">Growth oriented <strong>Values & Culture</strong></h1> 
                        <p className="text-gray">Our culture is born from our values when put into action. Sigtuple s team members are essential to the success stories of its work in transformingpath diagnosis. We strive to empower our teams by creating rewarding careers at Sigtuple, driven by a culture of commitment and collaboration.</p>
                    </div>
                </div>
                <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-12"> 
                    <div className="Values-img">
                        <img src="assets/img/career_01.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="experts-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <h1 className="text-title">At Sigtuple, you work <strong>with the experts</strong></h1>                                 
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="experts-grid grid-4 mt-80">
                        <div className="experts-list text-center">
                            <div className="experts-img">
                                <img src="assets/img/export/export_01.png" alt="" className="img-fluid" />
                            </div>
                            <div className="experts-text text-gray mt-3">
                                <h6 className="mb-1">Tathagato Rai Dastidar</h6>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                        <div className="experts-list text-center">
                            <div className="experts-img">
                                <img src="assets/img/export/export_02.png" alt="" className="img-fluid" />
                            </div>
                            <div className="experts-text text-gray mt-3">
                                <h6 className="mb-1">Ashes Ganguly</h6>
                                <p>CTO</p>
                            </div>
                        </div>
                        <div className="experts-list text-center">
                            <div className="experts-img">
                                <img src="assets/img/export/export_03.png" alt="" className="img-fluid" />
                            </div>
                            <div className="experts-text text-gray mt-3">
                                <h6 className="mb-1">Dr. Renu Ethirajan</h6>
                                <p>Chief Medical Evangelist</p>
                            </div>
                        </div>
                        <div className="experts-list text-center">
                            <div className="experts-img">
                                <img src="assets/img/export/export_04.png" alt="" className="img-fluid" />
                            </div>
                            <div className="experts-text text-gray mt-3">
                                <h6 className="mb-1">Amit Mangal</h6>
                                <p>CFO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {openings && openings.length ? <div className="Positions-area py-100" id="opening_job">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="text-center optiontitle">
                        <h2 className="text-title text-color fw_8 fs_24 mb-20">Open Positions</h2> 
                        <p className="text-gray mt-4 fs_18 fw_3 ls_7">So, are you ready to lead in this era of technology and help empower the <br /> healthcare industry with AI?</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11 col-12 mx-auto">
                    <div className="Positions-grid grid-2">
                       {renderItems}
                       </div>
                </div>                        
            </div>
        </div> 
    </div> : null }



    <div className="Code-area ptb-150">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="text-center optiontitle">
                        <h2 className="text-title text-color fw_8 fs_24 mb-20">Our Code</h2>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11 col-12 mx-auto mt-5">
                    <div className="Code-box-data">
                        <div className="Code-top">
                            <ul className="list-inline m-0 d-flex justify-content-between">
                                <li className="list-inline-item">
                                    <span className={`code-name ${code.title==='Raise' ? `Code-active`:''}`} onClick={(e=>{
                                        let data=career_json.find(f=>{return f.id==1})
                                        setCode(data)
                                    })}>
                                        <img src="assets/img/code/icon_01.png" className="img-fluid" alt="" />
                                        <span>Raise</span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                <span className={`code-name ${code.title==='Superlative' ? `Code-active`:''}`} onClick={(e=>{
                                        let data=career_json.find(f=>{return f.id===2})
                                        setCode(data)
                                    })}>
                                        <img src="assets/img/code/icon_02.png" className="img-fluid" alt="" />
                                        <span>Superlative</span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                <span className={`code-name ${code.title==='Innovate' ? `Code-active`:''}`} onClick={(e=>{
                                        let data=career_json.find(f=>{return f.id===3})
                                        setCode(data)
                                    })}>
                                        <img src="assets/img/code/icon_03.png" className="img-fluid" alt="" />
                                        <span>Innovate</span>
                                    </span>
                                </li>
                                <li className="list-inline-item">
                                <span className={`code-name ${code.title==='Transform' ? `Code-active`:''}`} onClick={(e=>{
                                        let data=career_json.find(f=>{return f.id===4})
                                        setCode(data)
                                    })}>
                                        <img src="assets/img/code/icon_04.png" className="img-fluid" alt="" />
                                        <span>Transform</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="Code-bottom">
                            <div className="Code-data">
                                <div className="Code-data-list d-flex"> 
                                    <div className="Code-data-first d-flex">
                                        <div className="">
                                            <img src={`${code.image}`} className="mr-3 img-fluid" width="60px" />
                                        </div>
                                        <div>
                                            <h2 className="fw-6">
                                                <span className="text-color" style={{fontSize:"25px"}}>{code.title}</span>
                                                <br /> 
                                                <span className="text-gray">the bar</span>
                                            </h2>
                                        </div>
                                    </div> 
                                    <div className="Code-data-second">
                                        <p className="text-gray m-0">{code.description_left}</p>
                                    </div>
                                    <div className="Code-data-third">
                                        <p className="text-gray m-0">{code.description_right}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="fun-area py-100">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="text-center optiontitle">
                        <h2 className="text-title text-color fw_8 fs_24 mb-20">Fun At Work</h2>  
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-11 col-12 mx-auto mt-5">
                    <div className="funatwork">
                        <div className="fun-left">
                            <div className="fun-box-top">
                                <div className="fun-left-top-first">
                                    <img src="assets/img/fun/1.png" alt="" className="img-fluid" />                                    
                                </div>
                                <div className="fun-left-top-two">
                                    <img src="assets/img/fun/2.png" alt="" className="img-fluid" />
                                </div>                                
                            </div>
                            <div className="fun-box-bottom">
                                <div className="fun-left-bottom-first">
                                    <img src="assets/img/fun/4.png" alt="" className="img-fluid" />                                    
                                </div>
                                <div className="fun-left-bottom-two">
                                    <img src="assets/img/fun/5.png" alt="" className="img-fluid" />
                                </div>                                
                            </div>                                    
                        </div>
                        <div className="fun-right">
                            <div className="fun-box">
                                <div className="fun-right-first">
                                    <img src="assets/img/fun/3.png" alt="" className="img-fluid" />                                    
                                </div>
                                <div className="fun-right-two">
                                    <img src="assets/img/fun/6.png" alt="" className="img-fluid" />
                                </div>                                
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Careers;