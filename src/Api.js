import axios from "axios";


let local=`http://localhost:1337`
let staging=`http://18.217.114.77:1337`


const Api=axios.create({
    baseURL:local
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
    let queryParams=params.length ? `?${params.join("&")}`:''
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

export const getOpenings = async () =>{
    let data = await Api.get("/openings");

    return data.data;

}

export const getOpeningCounts = async () =>{
    let data = await Api.get("/openings/count");

    return data.data;

}

// export const getTechSepcs = async (fields) =>{
//     let params=[]
//     if(fields.start){
//         params.push(`_start=${fields.start}`)
//     }
//     if(fields.limit){
//         params.push(`_limit=${fields.limit}`)
//     }

//     let queryParams=params.length ? `?${params.join("&")}`:''

//     let data = await Api.get(`/tech-specifications${queryParams}`);

//     return data.data;

// }

// export const getTechSepcsCounts = async () =>{
//     let data = await Api.get("/tech-specifications/count");

//     return data.data;

// }

export const getTeams = async (fields) =>{
    let params=[]
    if(fields.start){
        params.push(`_start=${fields.start}`)
    }
    if(fields.limit){
        params.push(`_limit=${fields.limit}`)
    }

    let queryParams=params.length ? `?${params.join("&")}`:''

    let data = await Api.get(`/teams${queryParams}`);

    return data.data;

}

export const getTeamCounts = async () =>{
    let data = await Api.get("/teams/count");

    return data.data;

}