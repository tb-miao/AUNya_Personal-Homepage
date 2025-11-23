layui.use(function() {
    var layer = layui.layer;
    var util = layui.util;
    util.on('layui-popup', {
        
        // 鑱旂郴鎴戜滑寮圭獥
        contact: function() {
            layer.alert(
                '<div class="layui-text">锛憋急锛�9098603<br>閭锛歝oolcat@email.cn</div>',
                {
                    title: '鑱旂郴鎴戜滑',
                    btn: ['纭畾']  // 鎸夐挳閰嶇疆
                }
            );
        },

        // 寰俊瀹㈡湇寮圭獥
        weixin: function() {
            layer.photos({
                photos: {
                    title: "CoolCat",
                    start: 0,
                    data: [{
                        alt: "CoolCat 寰俊瀹㈡湇",
                        pid: 1,
                        src: "static/images/weixin.png"
                    }]
                }
            });
        },
    });
});