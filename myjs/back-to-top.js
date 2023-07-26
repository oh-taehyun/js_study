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
})

            // 클릭 이벤트 추가
