import {post,put,get} from "./service"

export const loginApi=data=>{
    return post({
        url:"/login/doLogin",
        data
    })
}


export const first_getuserPage=data=>{
    return get({

        url:`/appuser/first_getuserPage?size=${data}`,

    })
}
export const getuserPage=(size,number)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/appuser/getuserPage?size=${size}&number=${number}`,
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





