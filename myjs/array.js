/*
    배열 만들기
    var arr=[];

    var arr=new Array();
    배열은 0= 첫번째.
*/
// var fruits = [];
// fruits[0] = '사과';
// fruits[1] = '배';
// fruits[2] = '바나나';
// document.write(fruits);

var fruits = ['사과', '배', '바나나', '딸기'];
var amount = fruits.length;
var newStr = fruits.join('/');
//var newArr = fruits.reverse(); /* 원본 fruits의 순서를 역순으로 변경해놓음 */
var newArr2 = fruits.sort(function (a, b) { /* sort는 숫자의 배열만 sorting이 됨. */
    return b - a;
});

var animals = ['사자', '호랑이', '곰'];

var newArr3 = fruits.concat(animals);
var newArr4 = fruits.slice(1, 3); /*인덱스1번부터 3번 앞까지 */
var newArr5 = fruits.splice(1, 3); //원본손상, 1번째부터 3번째

document.write('원본배열:' + fruits);
document.write('<hr/>');
document.write('fruits[0]=' + fruits[0] + '<br/>');
document.write('amount : ' + amount + '<br/>');
document.write(newStr + '<br/>');
//document.write(newArr + '<br/>');
document.write('<hr/>');
document.write('순서가 변경되지 않음:' + newArr2);
document.write('<hr/>');

var nums = [5, 10, 1, 20, 50];
nums.sort(function (a, b) { return b - a; });
document.write('숫자는 변경되어 정렬됨 : ' + nums);
document.write('<hr/>');
document.write(newArr3);
document.write('<hr/>');
document.write(newArr4);
document.write('<hr/>');
document.write(newArr5);


