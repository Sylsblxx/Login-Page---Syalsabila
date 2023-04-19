import { postData } from "../axios/rest"
import { LoginReq } from "../dto/login/login-req"
import { LoginRes } from "../dto/login/login-res"

const loginPost = async (data:LoginReq) =>{
    let result: LoginRes
    try{
        const resData = await postData<LoginReq>(`https://demo.globalqss.com/api/v1/auth/tokens`, data)
        .then(res=>{
          localStorage.setItem('auth', res.token);
          result = res
          
        })
    }catch(err){
        // console.log(err)
        return Promise.reject(err)
    }
    // return result
}

const getRole = (): string => {
    const data = localStorage.getItem("dataLogin")
    if (data) {
      return JSON.parse(data).roleCode
    }
    throw new Error("Role is empty")
  }

const saveDataLogin= async (data: LoginRes) =>{
    localStorage.setItem("dataLogin", JSON.stringify(data))
  }


export{loginPost}