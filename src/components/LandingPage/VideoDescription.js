import React, { useRef, useState } from 'react';

const VideoDescription = () =>{
    const [show,setShow] = useState(true)
    const ref=useRef()
    return (
        <div className="work-area py-100">
        <div className="container-fluid px-0 position-relative video-section">
            <video id="media-video" poster="assets/img/video_section.png" ref={ref}>
                <source src="assets/video/video.mp4" type="video/mp4" />
                </video>
            <div className="video-text container">
                <h1>
                    SigTuple Combined Robotics &amp;<br />
                    <b>Artificial Intelligence</b>
                </h1>
                <p className="textdescription">
                    to build a smart screening solution.<br />
                    Healthcare made accessible, accurate, and affordable.
                </p>
            </div>
            <div id="play-pause-button" className="play-btn" onClick={(e=>{
            if(show){
                setShow(false)
                ref.current.play()
            }
            else{
                setShow(true)
                ref.current.load()
            }
        })}>
            
            {show ? <i className="fa fa-play" aria-hidden="true"></i> :  <i className="fa fa-pause" aria-hidden="true" style={{marginLeft:"15px"}}></i> }
            </div>
        </div>
    </div>

    //      <div className="container-fluid px-0 position-relative video-section">
    //     <video muted id="media-video" poster="assets/img/video_section.png" ref={ref}>
    //         <source src="assets/video/video.mp4" type="video/mp4"/>
    //     </video>
    //     <div className="video-text container">
    //         <h1>
    //             SigTuple Combined Robotics &
    //             <br/>
    //             <b>
    //                 Artificial Intelligence
    //             </b>
    //         </h1>
    //         <p className="textdescription">
    //             to build a smart screening solution.
    //             <br/>
    //             Healthcare made accessible, accurate, and affordable.
    //         </p>
    //     </div>
    //     <div id="play-pause-button" className="play-btn" onClick={(e=>{
    //         if(show){
    //             setShow(false)
    //             ref.current.play()
    //         }
    //         else{
    //             setShow(true)
    //             ref.current.load()
    //         }
    //     })}>
    //         {show ? <i className="bi bi-play-fill"></i> :  <i className="bi bi-pause-fill"></i> }
    //     </div>
    // </div>
    )
}

export default VideoDescription;