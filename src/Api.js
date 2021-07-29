import axios from "axios";


let local=`http://localhost:1337`
let staging=`http://18.218.168.98:1337`


const Api=axios.create({
    baseURL:staging
})
export default Api;


export const getBlogs = async (fields) =>{
    let params=[]
    if(fields.start){
        params.push(`_start=${fields.start}`)
    }
    if(fields.limit){
        params.push(`_limit=${fields.limit}`)
    }
    let queryParams=params.length ? `?${params.join("&&")}`:''
    let data=await Api.get(`/blogs${queryParams}`);
    return data.data
}

export const getClients= async () =>{
    let data = await Api.get("/clients");
    return data.data;
}

export const getPublications = async () =>{
    let data = await Api.get("/publications");

    return data.data;

}

export const getBlogCounts = async () =>{
    let data=await Api.get(`/blogs/count`);
    return data.data
}