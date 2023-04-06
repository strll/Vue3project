import {post,put,get} from "./service"

export const loginApi=data=>{
    return post({
        url:"/login/doLogin",
        data
    })
}



export const getuserPage=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/appuser/getuserPage`,
    })
}

export const getRolesApi=data=>{
    return get({
        url:`roles`,
        data
    })
}
// 更改用户信息
export const userChangeInfoApi=data=>{
    return put({
        url:`users/${data.id}`,
        data
    })
}





