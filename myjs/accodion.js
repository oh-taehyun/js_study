var btnCollapse = document.getElementById('btn-collapse'),//아이디 btn-collapse
    heading = document.getElementsByClassName('panel-heading'),//클래스명 panel-heading
    question = document.getElementsByClassName('panel-question'),//클래스명 panel-question
    answer = document.getElementsByClassName('panel-body');//클래스명 panel-body

//제목을 클릭하면 할일
for (var i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function (ev) {
        for (var j = 0; j < question.length; j++) {
            question[j].classList.remove('active');
            ev.target.parentNode.classList.add('active');
            activateBody();
        }//question 마다 할일
    });
}
function activateBody() {
    //panel-body 모두 안보이도록 answer, dispaly:none;
    for (var x = 0; x < answer.length; x++) {
        answer[x].style.display = 'none';
    }
    //클래스명 active panel-question 자식중 panel-body 나타나도록
    //.panel-question.active .panel-body
    var activePanel = document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display = "block";
}
activateBody();
//collapse all 버튼을 클릭하면 모든 answer 안보이도록 함
btnCollapse.addEventListener('click', function () {
    for (var i = 0; i < answer.length; i++) {
        answer[i].style.display = 'none';
    }
});