document.addEventListener('click', lightbox);
function lightbox(ev) {
    var elem = ev.target,
        elemId = elem.getAttribute('id'),
        lightboxImg = document.getElementById('lightbox-image'), //아이디 lightbox-image
        lightBox = document.getElementById('lightbox-overlay'),
        newImg = new Image();
    /*
        var img = new Image();
        img.src="myimage.png"
        A.src = "b" a요소의 src의 속성의 값을 b로 교체한다.
        A.getAttribute(b) =A요소의 b라는 속성의 값을 가져온다.
        A.hasAttribute(b) = A요소가 b라는 속성이 있는지,
        없는지.true,false
        .onload 화면에 로드가 되면 할일
    */
    if (elem.hasAttribute('data-lightbox')) {
        ev.preventDefault(); //링크의 기본속성(기능)은 막고
        newImg.onload = function () {
            lightboxImg.src = this.src;
        }
        newImg.src = elem.getAttribute('data-lightbox'); //data-lightbox의 값을 가져온다
        lightBox.classList.add('visible');
    }
    /* a && b , a ||b */
    if (elemId == 'lightbox-overlay' || elemId == 'lightbox-image') {
        lightBox.classList.remove('visible');
    }

}
