// /* 复制提醒 */
// document.addEventListener("copy",function(e){
//     new Vue({
//         data:function(){
//             this.$notify({
//                 title:"嘿！复制成功",
//                 message:"若要转载请务必保留原文链接！爱你呦~",
//                 position: 'top-left',
//                 offset: 50,
//                 showClose: false,
//                 type:"success"
//             });
//             return{visible:false}
//         }
//     })
// })
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.keyCode == 123) {
//         Snackbar.show({
//             text: '已打开开发者模式，扒源请谨记GPL协议！',
//             pos: 'top-left',
//             onActionClick: function (element) {
//                 window.open("/license")
//             },
//             actionText: "查看博客声明",
//         });
//     }
// }
document.addEventListener("copy", (function (e) {
    new Vue({
        data: function () {
            return this.$notify({
                title: "哎嘿！复制成功",
                message: "若要转载请务必保留原文链接！爱你呦~",
                position: "top- left",
                offset: 50,
                showClose: !0,
                type: "success"
            }), {visible: !1}
        }
    })
})), document.onkeydown = function () {
    window.event && 123 == window.event.keyCode && new Vue({
        data: function () {
            this.$notify({
                title: "喂喂，我看见你在扒源码了！",
                message: "小伙子，开发者模式打开后请遵循GPL协议！",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "warning"
            })
        }
    })
};