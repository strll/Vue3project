import {post,put,get} from "./service"
//删除
export const getmessagedeleteGroup=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/allmessagedelete`,
    })
}
export const addmessagedeleteGroup=(addmessagedelete)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/addmessagedelete?addmessagedelete=${addmessagedelete}`,
    })
}
export const deletemessagedeleteGroup=(deletemessagedelete)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/deletemessagedelete?deletemessagedelete=${deletemessagedelete}`,
    })
}


//GPT功能
export const getgroup_talkGroup=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/allgroup_talk`,
    })
}
export const addgroup_talkGroup=(addgroup_talk)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/addgroup_talk?addgroup_talk=${addgroup_talk}`,
    })
}
export const deletegroup_talkGroup=(deletegroup_talk)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/deletegroup_talk?deletegroup_talk=${deletegroup_talk}`,
    })
}

//普通群聊
export const getgroupStudyGroup=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/allgroupStudy`,
    })
}
export const addgroupStudyGroup=(addgroupStudy)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/addgroupStudy?addgroupStudy=${addgroupStudy}`,
    })
}
export const deletegroupStudyGroup=(deletegroupStudy)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/deletegroupStudy?deletegroupStudy=${deletegroupStudy}`,
    })
}



export const getgroupReplyGroup=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/allgroupReply`,
    })
}
export const addgroupReplyGroup=(addgroupReply)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/addgroupReply?addgroupReply=${addgroupReply}`,
    })
}
export const deletegroupReplyGroup=(deletegroupReply)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/deletegroupReply?deletegroupReply=${deletegroupReply}`,
    })
}



export const getblackGroup=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/allblack`,
    })
}
export const addblackGroup=(addblack)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/addblack?addblack=${addblack}`,
    })
}
export const deleteblackGroup=(deleteblack)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/deleteblack?deleteblack=${deleteblack}`,
    })
}


export const gettodayEatGroup=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/alltodayEat`,
    })
}
export const addtodayEatGroup=(addtodayeat)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/addtodayEat?addtodayeat=${addtodayeat}`,
    })
}
export const deletetodayEatGroup=(deletetodayeat)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/group/deletetodayEat?deletetodayeat=${deletetodayeat}`,
    })
}



export const getTodayEat=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/todayeat/alltodayeat`,
    })
}


export const selectlikeTodayEat=(message)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/todayeat/selectliketodayeat?message=${message}`,
    })
}

export const deleteTodayEat=(id)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/todayeat/deletetodayeat?id=${id}`,
    })
}
export const loginApi=data=>{
    return post({
        url:"/login/doLogin",
        data
    })
}
export const loginOutApi=data=>{
    return post({
        url:"/login/LoginOut",
        data
    })
}
export const getAdmin=()=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/admin/getAllAdmin`,
    })
}

export const updataAdmin=(account,permission)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/admin/updateAdmin?account=${account}&permission=${permission}`,
    })
}

export const  addAdmin=(account,permission)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/admin/addAdmin?account=${account}&permission=${permission}`,
    })
}

export const deleteAdmin=(account,permission)=>{
    // eslint-disable-next-line no-undef
    return get({
        url:`/admin/deleteAdmin?account=${account}&permission=${permission}`,
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





