import React, { useState } from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';

const BlogContents= [
    {
        id:1,
        title:"Top 10 companies",
        description:"here is some of top 10 company like,google,fb,amazon..",
        duration:"2 min",
        date:"Jan 2.02021"
    },
    {
        id:2,
        title:`Winner of India’s biggest AI solution`,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"2 min",
        date:"Jan 2.02021"
    },
    {
        id:3,
        title:"SigTuple CEO says",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    },
    {
        id:4,
        title:"top 20 medicine",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"2 min",
        date:"Jan 2.02021"
    },
    {
        id:5,
        title:"what to do in covid 19",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    },
    {
        id:6,
        title:"what to do in covid 19",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    },
    {
        id:7,
        title:"what to do in covid 19",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    },
    {
        id:8,
        title:"what to do in covid 19",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting...",
        duration:"1 min",
        date:"Jan 2.02021"
    }
]

let blogLen=BlogContents.length

const Blogs = () =>{
    const [showBlog,setBlogShow]= useState(null)
    const [currentIndex,setCurrentIndex]=useState(1)

    let blog_next = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        width:"66px",
        height:"66px",
        position: "absolute",

        opacity: currentIndex < blogLen ? "1" : "0.5",
        border: "3px solid rgb(112, 112, 112)",
        boxSizing: "border-box",
        borderRadius: "41px",
        left: "1100px"
    }

    let blog_prev = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        width:"66px",
        height:"66px",
        position: "absolute",

        opacity: currentIndex == 1 ? "0.5" : "1",
        border: "3px solid rgb(112, 112, 112)",
        boxSizing: "border-box",
        borderRadius: "41px",

        left:"-90px"
    }

    const settings_blog = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: (current) =>{
            console.log(currentIndex,current)
            if(current==0){
                setCurrentIndex(1)
            }else{
                setCurrentIndex(current+3)
            }
            console.log(currentIndex,current)
            
        },
        nextArrow: <NextArrow blogNext={blog_next} ARROW_NEXT={`assets/img/right-arrow-black.svg`} ARROW_SIZE={"20px"}/>,
        prevArrow: <PrevArrow blogPrev={blog_prev} ARROW_PREW={`assets/img/left-arrow-black.svg`} ARROW_SIZE={"20px"}/>

        // nextArrow: <NextArrow blogNext={blog_next} ARROW_NEXT={currentIndex < blogLen ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex <  blogLen ? "20px" : "12px"}/>,
        // prevArrow: <PrevArrow blogPrev={blog_prev} ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"}/>

    };

    const renderItems=BlogContents.map(b=>{
        return (<div class="p-3" key={b.id}>
        <div class="lab-card position-relative ">
          <img src="assets/img/lab-1.png" class="img-fluid" />
            <div class="lab-text">
              <span>{b.duration} read</span>
              <h3 class="text-sub mb-1">{b.title}</h3>
              <div class="description-blog-hide">
                <span class="text-70 fw-normal d-block">{b.description}</span>
                <span class="text-70 fw-light d-block mt-2 mb-3">{b.date}</span>
                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Read More
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B"></path>
                  </svg>
                </a>
              </div>
            </div>
            </div>
        </div>)

        // if(b.id==showBlog){
        //     return(
        //         <div className="p-3" key={b.id} >
        //         <div className="lab-card position-relative">
        //             <img src="assets/img/lab-1.png" className="img-fluid"/>
        //             <div className="lab-text" onMouseEnter={(e=>{
        //                     e.preventDefault();
        //                     setBlogShow(b.id)
        //                 })} onMouseLeave={(e=>{
        //                     e.preventDefault();
        //                     console.log("hello 1")
        //                     setBlogShow(null)
        //                 })}>
        //                 <span>{b.duration} read</span>
        //                 <h3 className="text-sub mb-1">{b.title}</h3>
        //                  <div className='description-blog-show'>
        //                 <span className="text-70 fw-normal d-block">
        //                     {b.description}
        //                 </span>
        //                 <span className="text-70 fw-light d-block mt-2 mb-3">
        //                     {b.date}
        //                 </span>
        //                 <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Read More
        //                     <i className="bi bi-arrow-right-short"></i>
        //                 </a>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        //     )   
        // }
        // else{
        //     return(
        //         <div className="p-3" key={b.id}>
        //         <div className="lab-card position-relative">
        //             <img src="assets/img/lab-1.png" className="img-fluid"/>
        //             <div className="lab-text" onMouseEnter={(e=>{
        //                     e.preventDefault();
        //                     setBlogShow(b.id)
        //                 })}>
        //                 <span>{b.duration} read</span>
        //                 <h3 className="text-sub mb-1">{b.title}</h3>
        //                  <div className='description-blog-hide'>
        //                 <span className="text-70 fw-normal d-block">
        //                     {b.description}
        //                 </span>
        //                 <span className="text-70 fw-light d-block mt-2 mb-3">
        //                     {b.date}
        //                 </span>
        //                 <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Read More
        //                     <i className="bi bi-arrow-right-short"></i>
        //                 </a>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        //     )
        // }  
    })



    return (
 <Slider {...settings_blog}>
     {renderItems}
 </Slider>    )
}

export default Blogs;