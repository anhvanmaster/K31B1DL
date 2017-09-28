// Bài 1:
alert(`Nhập một số và tìm bội số của nó trong khoảng từ 1-15.`);
var a = prompt('Nhập số a:');
// a = parseInt(a);
document.writeln(`Bài 1:<br> Bội số của a với các số trong khoảng từ 1-15 là: <br>`)
for (var i = 1; i <= 15; i++) {
	document.write(`${a} x ${i} = ${i*a} <br>`);
}
document.write('<br>');
// Bài 2
alert(`Nhập câu a và dòng kí tự b. xét xem trong a chứa bao nhiêu kí tự của b.`);
var a = prompt(`Nhập chuỗi a:`,"");
var b = prompt(`Nhập dòng kí tự b:`,'');
var d = 0;
for (var i = 0; i < b.length; i++) {
	for (var j = 0; j < a.length; j++) {
		if (b[i]===a[j]) {
				++d;
				break;
		}
	}
}
document.write(`Bài 2:<br> Có ${d} kí tự của b nằm trong a`);
document.write('<br>');
// Bài 3
alert(`Hiện ra bảng cửu chương`);
document.write(`Bài 3:<br>`)
for (var i = 2; i <= 9; i++) {
	for (var j = 2; j <= 9; j++) {
		document.write(`${i} x ${j} = ${i*j} <br>`);
	}
	document.write('<br>');
}