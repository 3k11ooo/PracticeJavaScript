// definition
const animationWaku01 = document.getElementById("waku"); // divのid取得
const baseEl = document.getElementById("waku");
const cxt = animationWaku01.getContext('2d'); // キャンバスの描画コンテキストを取得
const cir = baseEl.getContext('2d');
var timerAnimation = '';
var nowDegree = 0; // 描画枚数

// 360 - ((360 / 設定秒数) * (設定秒数 ― 現在秒数) = nowDegree


document.getElementById("waku").style.color = "white";
document.getElementById("waku").innerHTML = "タイマー";

baseView();


// // ベース円描画
function baseView(){
    cir.beginPath () ;
    for(let i = 0; i < 360; i++){
        cir.save() ;
        fordegree = (i * Math.PI / 180);
        cir.translate( baseEl.width/2, baseEl.height/2 ) ;
        cir.rotate( fordegree) ;
        cir.translate( -baseEl.width/2, -baseEl.height/2 ) ;
        cir.fillStyle = "white";
        cir.fillRect( baseEl.width / 2, 20, 10, 10 ) ;
        cir.restore() ;
    }
}

// スタートボタン
function startAnimation(){

    nowDegree = 0;
    clearInterval(timerAnimation);
    baseView();
    var st = 30; // 設定時間(s)
    var maxDegree = 3600; // 最大描画枚数
    var loop = (st / maxDegree) * 1000; // 1枚あたりの時間(ms)
    console.log(st);
    timerAnimation = setInterval("rotateAnimation()", loop );
}

// ストップボタン
function stopAnimation() {
    clearInterval(timerAnimation);
}

// リセットボタン
function resetAnimation() {
    location.reload();
}


// アニメーション描画
function rotateAnimation(){
    cxt.save() ;
    // パスをリセット
    cxt.beginPath () ;

    //サークルを描画する
    rotateDegree = (--nowDegree * Math.PI / 180) / 10; // 360枚
    cxt.translate( animationWaku01.width/2, animationWaku01.height/2 ) ;
    cxt.rotate( rotateDegree) ;
    //console.log("nowDegree = " + nowDegree);
    cxt.translate( -animationWaku01.width/2, -animationWaku01.height/2 ) ;
    if(nowDegree == -3600) stopAnimation();

    // レクタングルを作成
    cxt.fillStyle = "red";
    cxt.fillRect( animationWaku01.width / 2 - 5, 19, 10, 12 ) ;

    cxt.restore() ;
}