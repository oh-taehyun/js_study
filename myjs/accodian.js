var btnCollapse = document.getElementById('btn-collapse'),//아이디 btn-collapse
    heading = document.getElementsByClassName('panel-heading'),//클래스명 panel-heading
    question = document.getElementsByClassName('panel-question'),//클래스명 panel-question
    answer = document.getElementsByClassName('panel-body');//클래스명 panel-body

//제목을 클릭하면 할일
for (var i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function () {
        for (var j = 0; j < question.length; j++) {
            question[j].classList.remove('active');
        }
    });
}