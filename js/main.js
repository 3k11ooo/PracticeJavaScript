var timer1; //タイマーを格納する変数（タイマーID）の宣言
var startTime;

//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart(num)
{
    switch (num) {
    case 0: //タイマー開始関数
        document.timer.style.visibility="hidden"; // テキストボックス
        // document.timer.elements[1].style.visibility="hidden"; // テキストボックス秒
        document.timerButton.elements[0].disabled=true; // スタートボタン
        document.timerButton.elements[2].disabled=true; // リセットボタン
        // テキストボックスの値を取得している。
        var min=document.timer.elements[0].value;
        var sec=document.timer.elements[1].value;
        
        if (min=="") min=0;
        min=parseInt(min);
        
        if (sec=="") sec=0;
        sec=parseInt(sec);

        startTime = min * 60 + sec;
        // alert(startTime);
        circle();
        timer1=setInterval("countDown()",1000);
        break;

    case 1: //タイマー停止関数
        document.timer.style.visibility="visible";
        // document.timer.elements[1].style.visibility="visible";
        document.timerButton.elements[0].disabled=false; // スタートボタン
        document.timerButton.elements[2].disabled=false; // リセットボタン
        clearInterval(timer1);
        break;

    default:
        break;
    }
}

//カウントダウン関数
function countDown()
{
   
    // テキストボックスの値を取得している。
    var min=document.timer.elements[0].value;
    var sec=document.timer.elements[1].value;
    
    if( (min=="") && (sec=="") )
    {
        alert("時刻を設定してください！");
        reSet();
    }
    else
    {
        if (min=="") min=0;
        min=parseInt(min);
        
        if (sec=="") sec=0;
        sec=parseInt(sec);
        
        tmWrite(min*60+sec-1);
        makeTime(min*60+sec-1);
    }
}

//残り時間を書き出す関数
function tmWrite(int)
{
    
    document.getElementById("displayTimer").innerHTML = "";
    int = parseInt(int);
    if (int<0)
    {
        alert("時間です！");
        reSet();
    }
    else
    {
        var min = Math.floor(int/60); // // 残り分数はintを60で割って切り捨てる。
        var sec = int % 60; // 残り秒数はintを60で割った余り
        document.timer.elements[0].value=min;
        document.timer.elements[1].value=sec;
        document.getElementById("displayTimer").innerHTML = min + ":" + sec;
        // alert(display);

        // document.timer.elements[0].value=
        // document.timer.elements[0].disabled=false;
        // 残り秒数はintを60で割った余り
        // document.timer.elements[1].value=int % 60;
    }
}

// setInterval("hyoji()",1000);

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
    document.getElementById("displayTimer").innerHTML = "時刻を設定してください！";
    document.timer.elements[0].value="";
    document.timer.elements[1].value="";
    document.timer.style.visibility="visible";
    document.timerButton.elements[0].disabled=false;
    document.timerButton.elements[2].disabled=false;
    circle();
    viewTimer(0, 0);
    clearInterval(timer1);
}  
    
// time変数作成
function makeTime(time) {
    // 360 - ((360 / 設定秒数) * (設定秒数 ― 現在秒数))
    timeAngle = 360 - ((360 / startTime) * (startTime - time)) ;
    // 角度
    var startAngle = timeAngle + 270;
    var endAngle = -90;
    console.log(timeAngle);
    viewTimer(startAngle, endAngle);
}

// サークル描画動くほう
function viewTimer(startAngle, endAngle){

    const viewElm = document.getElementById("visual");

    // 縦横の短い辺を取得
    var minSide = Math.min( viewElm.clientWidth, viewElm.clientHeight);
    // 時計の半径を取得
    var radius = minSide / 2 - 10;
    // キャンバスの中心を求める
    var x = viewElm.clientWidth / 2;
    var y = viewElm.clientHeight / 2;

    // キャンパスを作成
    // const cvs = document.createElement('canvas');

    // キャンバスの描画コンテキストを取得
    const context = viewElm.getContext('2d');

    // パスをリセット
    context.beginPath () ;


    // alert("start" + startAngle + "end" + endAngle);

    // 方向: true=反時計回りの円、false=時計回りの円
    context.arc( x, y, radius, startAngle * Math.PI / 180, endAngle * Math.PI / 180, false ) ;

    /*
    // 塗りつぶしの色
    context.fillStyle = "rgba(255,0,0,0.8)" ;

    // 塗りつぶしを実行
    context.fill() ;
    */

    // 線の色
    context.strokeStyle = "white" ;

    // 線の太さ
    context.lineWidth = 9 ;

    // 線を描画を実行
    context.stroke() ;

}

// サークル描画動かないほう
function circle(){
    

    const viewElm = document.getElementById("visual");

    /*
    // キャンパスを作成
        const cvs = document.createElement("canvas");

        // キャンバスの描画コンテキストを取得
        const context = cvs.getContext('2d');
    */


    // 縦横の短い辺を取得
    var minSide = Math.min( viewElm.clientWidth, viewElm.clientHeight);
    // 時計の半径を取得
    var radius = minSide / 2 - 10;
    // キャンバスの中心を求める
    var x = viewElm.clientWidth / 2;
    var y = viewElm.clientHeight / 2;

    // キャンパスを作成
    // const cvs = document.createElement('canvas');

    // キャンバスの描画コンテキストを取得
    const context = viewElm.getContext('2d');

    // パスをリセット
    context.beginPath () ;


    // alert("start" + startAngle + "end" + endAngle);

    // 方向: true=反時計回りの円、false=時計回りの円
    context.arc( x, y, radius, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;

    /*
    // 塗りつぶしの色
    context.fillStyle = "rgba(255,0,0,0.8)" ;

    // 塗りつぶしを実行
    context.fill() ;
    */

    // 線の色
    context.strokeStyle = "orange" ;

    // 線の太さ
    context.lineWidth = 8 ;

    // 線を描画を実行
    context.stroke() ;
}