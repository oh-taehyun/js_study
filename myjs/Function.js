function send() {
    alert('경고');
}
send();

var a = 10;
var b = 20;//전역변수

//이름이 있는 함수는 익명함수보다 먼저처리됨
function add(x, y) {
    var sum = x + y;//지역변수
    return sum;
}
var sum = add(a, b);
document.write(sum);