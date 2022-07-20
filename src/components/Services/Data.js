import axios from "axios";

export const getData = async (access_token) => {
    
    let resp = await axios.get('http://127.0.0.1:8000/api/users/profileView/', 
    {headers : {
        'authorization' : `Bearer ${access_token}`,
    }})
    console.log(resp.data)
    return resp.data
}


export const deleteData = async (access_token) => {
    
    let resp = await axios.delete('http://127.0.0.1:8000/api/users/profileView/', 
    {headers : {
        'authorization' : `Bearer ${access_token}`,
    }})
    return resp.data
}