var btn = document.getElementById('submit')
    , container = document.querySelector('.container');
//할일(함수)=function(){}
btn.addEventListener('click', function () {
    //클릭하면 실제로 할일
    btn.style.color = 'red';
    console.log('버튼이 클릭되었습니다.');
});
container.addEventListener('mouseenter', function () {
    console.log('마우스가 들어왔습니다.');
});
container.addEventListener('mouseleave', function () {
    console.log('마우스가 나갔음.');
});
window.addEventListener('keydown', function (event) {
    console.log(event.key);
    console.log(event.code);
});