//js練習
//
var header = document.getElementById('header1-id');
var degree = 0;
function rollingheader()
    {
        degree = degree + 6;
        degree = degree % 360;
        if (90 <= degree && degree < 270)
            {
                header.className = 'midashi-class-ura';
            }
        else
            {
                header.className = 'midashi-class';
            }

        header.style.transform = 'rotateX(' + degree + 'deg)';
    }
setInterval(rollingheader,30);




// ストップウォッチ
//
// var startTime = null;

// function start() {
//   startTime = Date.now();
//   document.body.onkeydown = stop;
// }
// function stop() {
//   var currentTime = Date.now();
//   var seconds = (currentTime - startTime) / 1000;
//   if (9.5 <= seconds && seconds <= 10.5) {
//     document.write(seconds + '秒でした。すごい。');
//   } else {
//     document.write(seconds + '秒でした。残念。');
//   }
// }
// if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
//   start();
// }