for (var i = 2; i <= 12; i += 2) {
    document.write(i + '<br/>');
}

for (var i = 10; i >= 0; i--) {
    document.write(i + '<br/>');
}

var i = 1;
while (i < 10) {
    document.write(i + '<br/>');
    i += 2;
}

// var i = 1;
// while (i <= 9) {
//     document.write('3x' + i + '=' + (i * 3) + '<br/>');
//     i++;
// }

for (i = 1; i <= 9; i++) {
    document.write('3x' + i + '=' + 3 * i + '<br/>');
    if (i == 6) break;
}