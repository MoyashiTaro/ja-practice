// 時間あてゲーム機能

// ・「10 秒だと思ったら何かキーを押して下さい」というダイアログを表示する
// ・ダイアログで OK を押すと、時間あてゲームがスタートする
// ・何かキーを押すと、時間あてゲームが停止する
// ・9.5 秒から 10.5 秒の間なら「すごい」、そうでないなら「残念」と表示する


var game = {
    starttime :null,
    displayArea :document.getElementById('display-area'),
    start: function() {
        starttime = Date.now();
        console.log('It`s Started')
        document.body.onkeydown = game.stop;
    },
    stop: function() {
        var currenttime = Date.now();
        var time = (currenttime-starttime)/1000;
        if (time <10.5 && time > 9.5){
            displayArea.innerText = time + '秒。すごい！'
        }
        else{
            displayArea.innerText = time + '秒。残念！'
        }
    }
}

if(confirm('OKを押して10秒経過後に任意のキーを押してください')){
    game.start();
}