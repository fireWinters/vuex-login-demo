// 把传入的值赋值给userInfo
export default {
    login(state, v) {
        state.userInfo = v
    },
    setcustomInfo(state, v) {
        state.userstatus = v.userstatus
        state.viplevel = v.viplevel
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
