//setTimeout(할일,시간);
//시간이 지나면 할일 = 함수
//할일 =function(){실제로 할일}
//3초 3000
//alert('힘들죠');

//clearTimeout(할일의 이름);
var timer = setTimeout(function () {
    alert('힘들죠'
    );
}, 3000);

clearTimeout(timer); //타이머 멈추기. 3초 지나도 알람이 뜨지 않음

/* 일정시간마다 할일 */
/*
setInterval(할일, 시간);
*/

var timer2 = setInterval(function () {
    alert('힘들죠'
    );
}, 3000);

clearTimeout(timer2);

