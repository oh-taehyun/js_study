/*
           * - 변수 지정하기
           * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
           * - 스크롤과 클릭 이벤트 작성하기
           */
var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;
// 문서 높이 계산하기
//docHeight = docElem.scrollHeight;
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
if (docHeight != 0) {
    offset = docHeight / 4;

}
// 스크롤 이벤트 추가
window.addEventListener('scroll', function () {
    scrollPos = docElem.scrollTop;
    console.log(scrollPos);

    //btt.className = (scrollpos > offset)? 'visible' : '';
    btt.className = (scrollPos > offset) ? 'visible' : '';

});
//btt.className = 'test';
// 클릭 이벤트 추가
btt.addEventListener('click', function (ev) {
    ev.preventDefault(); //링크의 본연의 기능을 막는다.
    docElem.scrollTop = 0;
});
function scrollToTop() {
    //일정시간 마다 할일
    //setInterval(할일, 시간);
    //0.0015s=15
    //할일 = function(){실제로 할일}
    //실제로 할일 윈도우 스크롤이 0이 아닐 때 window.scrollBy(0,-55);
    //스크롤이 0이면 setInterval 멈춰라/ clearInterval(이름);

    var scrollInterval = setInterval(function () {
        if (scrollPos != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
