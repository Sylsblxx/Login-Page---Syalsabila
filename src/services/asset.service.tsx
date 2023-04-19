import { resData } from "../axios/rest"
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

export{getAsset}