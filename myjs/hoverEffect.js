const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';
for (const link of links) {
    const img = new Image();
    img.src = link.dataset.bg;// link.getAttribute('data-bg')와 같은 뜻으로 
    // 해당 요소의 속성중 data - bg의 값을 새로 생성한 이미지요소의 src로 지정하라
    console.log(img);
    link.addEventListener('mouseenter', function () {
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
        document.body.classList.add(showClass);
    });
    link.addEventListener('mouseleave', function () {
        document.body.classList.remove(showClass);
    });
}