//문서내용이 로드되면 할일
document.addEventListener('DOMContentLoaded',function(){
  //변수지정
  var $menu = document.querySelectorAll('#top_menu ul li');
  var $contents = document.querySelectorAll('#contents > section');
  var $lastPos = 0;
  //메뉴를 클릭하면 할일
  for(var i=0;i<$menu.length;i++){
    $menu[i].addEventListener('click',function(ev){
      ev.preventDefault();
      var idx = this.getAttribute('data-num');
      var tt = $contents[idx].offsetTop;

      window.scrollTo({
        top:tt,
        behavior:'smooth'
      }); //window.scrollTo({top,left,behavior}) 문서의 지정된 위치로 스크롤한다.
      //top: 세로위치, left: 가로위치, behavior: 스크롤효과속성
      });
    } //for 메뉴 반복문

  //스크롤이 생기면 메뉴활성화
  window.addEventListener('scroll',function(){
    var $sct = this.pageYOffset;

    for(var i=0; i< $contents.length; i++){
      if($contents[i].offsetTop <= $sct){
        var idx = $contents[i].getAttribute('data-num');
    //     //모든 메뉴에 on 제거하고, 인덱스번호 해당하는 메뉴에만 on 추가
        for(var a=0; a < $menu.length; a++){
          $menu[a].classList.remove('on');
        }
        $menu[idx].classList.add('on');
      }
    }//for 반복문 $content

  })

}); //DOMContentLoaded


// $(function(){
//   /* 
//   메뉴를 클릭하면, 몇번째 메뉴를 클릭했는지 순번확인, 
//   그 순번에 해당하는 내용이 화면상단에서 얼마 떨어져 있는지
//   거리를 확인(1100), 
//   html, body에 스크롤양을 확인한 수치만큼 준다. -animate 메서드
// 이용하여 애니메이션이 되게 한다.
//   */
  
//   //변수지정
//   /* 
//   메뉴(li)를 변수명 $menu에 지정
//   각 내용들을 변수명 $contents에 지정
//   */

//   var $menu = $('#top_menu ul li');
//   var $contents = $('#contents > section');
//   console.log($contents);
//   //메뉴 클릭 이동
//   /* 
//     몇번째 메뉴를 클릭했는지 순번확인해서 변수명 idx 저장합니다.
//   */
//   $menu.click(function(event){
//     event.preventDefault();
//     var idx = $(this).index();
//     console.log(idx);
//     var tt = $contents.eq(idx).offset().top
//     console.log(tt);
//  //해당 위치로 이동하도록
//  $('html, body').animate({scrollTop:tt});
//  //활성화된 메뉴 표시하기
//  /* 
//  클릭한 그 요소에만 on 추가하고 나머지 형제들은 제거한다.
//  .siblings('.strong') 형제자매요소들중에서 클래스명 strong이 있는 것들
//  */
// // $(this).addClass('on').siblings().removeClass('on');
//   });
//   //스크롤 이동 반영하기  
//   /* 
//   윈도우에 스크롤이 생기면 할일
//   */
//  $(window).scroll(function(){
//     //현재 스크롤양을 변수명 $sct 저장
//     var $sct = $(this).scrollTop();
    
//     $contents.each(function(i){
//       var tg = $(this);
//       if(tg.offset().top -10 < $sct){ //현재 스크롤을 해당컨텐츠가 화면상단에서 거리보다 많이 했다면
//         $menu.removeClass('on');
//         $menu.eq(i).addClass('on');
//       }
//     });
//  });
// });


