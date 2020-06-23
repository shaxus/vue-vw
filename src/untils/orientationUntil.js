// 判断横竖屏
var utils = {
    debounce: function (func, delay) {
        var timer = null;
        return function () {
            var context = this,
                args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        }
    }
}
// var detectRes = document.getElementById('J_detectRes');
// var detectData = document.getElementById('J_detectData');

function detectOrient() {
    var storage = localStorage; // 不一定要使用localStorage，其他存储数据的手段都可以
    var data = storage.getItem('J-recordOrientX');
    var cw = document.documentElement.clientWidth;
    let sw,sh;
    var _Width = 0,
        _Height = 0;
    if(!data) {
        sw = window.screen.width;
        sh = window.screen.height;
        // 2.在某些机型（如华为P9）下出现 srceen.width/height 值交换，所以进行大小值比较判断
        _Width = sw < sh ? sw : sh;
        _Height = sw >= sh ? sw : sh;
        storage.setItem('J-recordOrientX',_Width + ',' + _Height);

    }else {
        var str = data.split(',');
        _Width = str[0];
        _Height = str[1];
    }
    console.log(_Width,_Height);
    if(cw == _Width) {
        // 竖屏
        console.log('shu');
        return ;
    }
    if(cw == _Height){
        // 横屏
        console.log('heng');
        return ;
    }

}

// 3.函数去抖处理
window.onresize = utils.debounce(detectOrient,300);
detectOrient();