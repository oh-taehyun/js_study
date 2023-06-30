//객체 = 변수+함수
// var obj = new Object();첫번째방법
// var obj = {}; 두번째방법

// var baby = {};
// baby.age = "2살";
// baby.sex = "남자";
// baby.birthday = "5월 1일";
var baby = {
    age: '2살',
    sex: '남자',
    birthday: '5월1일',
    getAge: getAge
}

function getAge() {
    return this.age;
}
var age = baby.getAge();
//document.write(baby.age);
document.write(age);
document.write(baby.birthday);