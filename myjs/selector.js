var firstTitle = document.getElementById('title'),
    myList = document.getElementsByClassName('list'),
    paragraphs = document.getElementsByTagName('p'),
    myList2 = document.querySelector('.list .red');

firstTitle.style.color = 'red';
//firstTitle.style.display = 'none';
myList[0].style.display = 'none';
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'red';
}
// console.log(firstTitle);
// console.log(myList);
console.log(paragraphs);
// console.log(myList2);
