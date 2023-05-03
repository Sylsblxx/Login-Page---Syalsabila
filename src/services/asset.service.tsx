import axios from "axios"
import { postData, resData } from "../axios/rest"
import { AssetReq } from "../dto/asset/asset-req"
import { AssetRes } from "../dto/asset/asset-res"

const getAsset = async () =>{
    let result: AssetRes[] = []
    try{
        const res = await resData(`/api/v1/models/a_asset`)
        result = res?.data.records
    }catch(err){
        return Promise.reject(err)
    }
    return result
}

const postAsset = async(data:AssetReq) => {
    try{
        const resData = await axios.post<AssetReq>('/api/v1/models/a_asset',data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('auth')}`
            }
        })
        

    }catch(err){
        return Promise.reject (err)
    }
}

export{getAsset, postAsset}