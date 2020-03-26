// 把传入的值赋值给userInfo
export default {
    login(state,v){
        state.userInfo=v
    }
}
// export default {
//     login(state, v) {
//         state.userInfo = v
//     },
//     setMemberInfo(state, v) {
//         state.userStatus = v.userStatus
//         state.vipLevel = v.vipLevel
//     }
// }
