var datCal = [], pT = 0, dayTinh = "";
datCal[0] ="";
var total = 0;
var str="";
var manHinh1 = document.getElementById("dong1");
var manHinh2 = document.getElementById("dong2");
// console.log(manHinh1);
// console.log(manHinh2);
function ghiManHinh1(duLieu){
	manHinh1.value = duLieu;
}
function ghiManHinh2(duLieu){
	manHinh2.value = duLieu;
}
function updateDayTinh() {
	dayTinh = "";
	for (var i = 0; i <= pT; i++) {
		dayTinh = dayTinh + datCal[i];
	}
	return dayTinh;
}
function checkSyxtan(){
	var check = true;
	for (var i = 0; i < pT; i++) {
		if ((datCal[i]=="x" && datCal[i+1]=="x") 
			|| (datCal[i]=="x" && datCal[i+1]=="/")
			|| (datCal[i]=="/" && datCal[i+1]=="/")
			|| (datCal[i]=="/" && datCal[i+1]=="x")
			|| (datCal[i]=="." && datCal[i+1]=="."))
		{
			check = false;
		}
	}
	return check;
}
function checkDau(){
	{
		for (var i = 0; i < pT; i++) {
			if ((datCal[i]=="+" && datCal[i+1]=="+") || (datCal[i]=="-" && datCal[i+1]=="-")) {
				datCal[i] = "";
				datCal[i+1] = "+";
			}
			if ((datCal[i]=="+" && datCal[i+1]=="-") || (datCal[i]=="-" && datCal[i+1]=="+")) {
				datCal[i] = "";
				datCal[i+1] = "-";
			}
			if ((datCal[i]=="+" && datCal[i+1]=="x") || (datCal[i]=="x" && datCal[i+1]=="+")) {
				datCal[i] = "";
				datCal[i+1] = "x";
			}

			if ((datCal[i]=="+" && datCal[i+1]=="/") || (datCal[i]=="/" && datCal[i+1]=="+")) {
				datCal[i] = "";
				datCal[i+1] = "/";
			}
		}
	}
}
function thucHien(){
	for (var i = 0; i < pT+1; i++) {
		if (datCal[i] >= '0') {
			datCal[i] = parseFloat(datCal[i]);
		}
	}
	//thuc hien phep nhan
	for (var i = 1; i < pT; i++) {
		if (datCal[i] === "x") {
			total = total+datCal[i-1]*datCal[i+1];
			datCal[i-1] = 0;
			datCal[i] = "+";
			datCal[i+1] = 0;
		} else if (datCal[i] === "/") {
			total = total+datCal[i-1]/datCal[i+1];
			datCal[i-1] = 0;
			datCal[i] = "+";
			datCal[i+1] = 0;
		}
	}
	for (var i = 0; i < pT; i++) {
		if (datCal[i] == "+") {
			total = total+datCal[i-1]+datCal[i+1];
		} else if (datCal[i] == "-") {
			total = total+datCal[i-1]-datCal[i+1];
		}
	}

}
// function sapXepPT(phepTinh){
// 	for (var i = 0; i < phepTinh.length; i++) {
// 		if (phepTinh[i] == "+" || phepTinh[i] == "-" || phepTinh[i] == "x" || phepTinh[i] == "/") {
// 			pT++;
// 			datCal[pT] = "";
// 		}
// 		datCal[pT] = datCal[pT] + phepTinh[i];
// 	}
// 	for (var i = 0; i < pT; i++) {
// 		str = datCal[pT];
// 		if (str[1] == "x" || str[1] == "/") {
// 			//thuc hien phep nhan chia
// 		}
// 	}
// }
// function baLan(){
// 	var mangDat = [];
// 	var dem = 0;
// 	for (var i = 0; i < pT; i++) {
// 		if (datCal[i] != "+" || datCal[i] != "-" || datCal[i] != "x" ||  datCal[i] != "/") {
// 			datCal[i] = parseFloat(datCal[i]);
// 		}
// 	}
// 	for (var i = 0; i < pT; i++) {
// 		if (datCal[i]>=0 || datCal[i] == "x" || datCal[i] == "/") {
// 			mangDat[dem] = datCal[i];
// 			dem++;
// 		}
// 	}

// }
function clearmem() {
	datCal = [];
	datCal[0] = "";
	pT = 0;
	dayTinh = "";
}
function getPhim(tenPhim){
	switch (tenPhim) {
		case "ac":
			datCal = [];
			datCal[0] = "";
			pT = 0;
			total =0;
			dayTinh = "";
			ghiManHinh1("_");
			ghiManHinh2("0");
			break;
		case "+-":
			for (var i = pT - 1; i >= 0; i--) {
				if (datCal=="+") {
					datCal[i] = "-";
					break;
				} else if (datCal[i] =="-") {
					datCal[i] = "+";
					break;
				}
			}
			ghiManHinh1(updateDayTinh());
			break;
		case "=":
			thucHien();
			ghiManHinh2(total);
			clearmem();
			break;
		default:
			if (tenPhim == "+" || tenPhim == "-" || tenPhim =="x" || tenPhim == "/") {
				pT++;
				datCal[pT] = tenPhim;
				pT++;
				datCal[pT] ="";
			} else {
				datCal[pT] = datCal[pT] + tenPhim;
			}
			ghiManHinh1(updateDayTinh());
			break;
	}
	// var test = datCal[pT];
	// console.log(datCal);
	// console.log(total);
}
// var test = '50%';
// console.log(parseFloat(test));