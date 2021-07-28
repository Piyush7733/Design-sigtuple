import React, { useEffect, useState } from 'react';
import {getBlogs,getBlogCounts} from '../Api';
import moment from 'moment';
import '../css/responsive.css';
const BlogLists = () =>{
    const [blogList,setBlogList]=useState([])
    const [hasMore,setHasMore]=useState(false)
    
    useEffect(()=>{
        const getBlog = async () =>{
          let data = await getBlogs({limit:10});
          if(data.length==10){
              let count=await getBlogCounts()
              if(count<=10) setHasMore(false)
              else setHasMore(true)

          } 
          setBlogList(data)
        }
        getBlog()
      },[])

   const getBlogDetails = () =>{
    const getBlog = async () =>{
        let data=await getBlogs({start:`${blogList.length}`,limit:10})
        let blogs = blogList.concat(data) 
        setBlogList(blogs)
        let count=await getBlogCounts()
        if(count<=blogs.length) setHasMore(false)
        else setHasMore(true)
    }
    getBlog()
   }   

     const renderItems=blogList.map(b=>{
         return (
            <div class="lab-card position-relative" key={b.id}>
            <img src={`${b.cover_image && b.cover_image.length ? b.cover_image[0].url : `assets/img/lab-1.png`}`} class="img-fluid" style={{width:"320px",height:"418px",objectFit:"cover"}}/>
            <div class="lab-text">
                <span>{b.duration} min read</span>
                <h3 class="text-sub mb-1 fw_6">{b.title}</h3>
                <div class="description-blog-hide">
                    <span class="text-70 fw_4 d-block">{`${b.description.slice(0,100)}...`}</span>
                    <span class="text-70 fw_4 d-block mt-2 mb-3">{moment(b.publish_at).format("MMM DD,YYYY")}</span>
                    <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Read More
                        <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "5px"}}>
                            <path d="M14.1935 7.87501L8.159 1.84051L9.74975 0.249756L18.5 9.00001L9.74975 17.7503L8.159 16.1595L14.1935 10.125H0.5V7.87501H14.1935Z" fill="#DE1A1B"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div> 
        
         )
     }) 


   
      return(
        <div class="Blog-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="text-center blog-titles"> 
                                <span class="text-color text-small-name fw_bold fs_18">Blogs</span>
                                <h1 class="fw_4 text-gray mt-4">                                     
                                    <span class="fw_5">Get all the latest updates & news</span> 
                                    <span class="fw_3">from the world of pathology here</span>
                                </h1> 
                            </div>                            
                        </div>
                    </div>
                     <div class="row">
                        <div class="col-md-11 col-12 mx-auto mt-4">
                            <div class="Blog-list-grid grid-3 mtb-50"> 
                                {renderItems}
                            </div>
                            {hasMore ? <div class="text-center mb-100">
                                <span class="text-color mx-auto text-center" style={{cursor:"pointer"}} onClick={(async e=>{
                                    e.preventDefault()
                                    getBlogDetails()                                   
                                })}>
                                    <strong>View More </strong>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6935 7.62525L7.659 1.59075L9.24975 0L18 8.75025L9.24975 17.5005L7.659 15.9097L13.6935 9.87525H0V7.62525H13.6935Z" fill="#DE1A1B"/>
                                    </svg>
                                </span>
                            </div> : null }
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BlogLists;