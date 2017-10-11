//khai báo
var obKey = document.getElementsByTagName('button');
var total = 0, cache = '';

 // tác động phần màn hình
var manHinh = document.getElementById('man-hinh');
console.log(manHinh);
function refreshScreen(typeData) {
	switch (typeData) {
		case 'reset':
			manHinh.value = 1;
			break;
		case 'doidau':
		{
			var chuManHinh = manHinh.value;
			chuManHinh.replace('+', '?');
			chuManHinh.replace('-', '+');
			chuManHinh.replace('?', '+');
			manHinh.value = chuManHinh;
		}
		break;

	}
}
//nút AC, tác động của nút AC
var pAC = obKey['pac'];
pAC.addEventListener('click', function (){
	typeData = 'reset';
	refreshScreen(typeData);
});
//nút đổi dấu
var pPM = obKey['p+-'];
pPM.addEventListener('click', function (){
	typeData = 'doidau';
	refreshScreen(typeData);
})
//nút số 1

