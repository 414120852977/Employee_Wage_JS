console.log("welcome to employee wage");
const Is_Present = 1;
let emphr=0 ;
const wage_per_hr = 20;
let empCheck = Math.floor(Math.random()*3);
switch(empCheck) {
    case 0:
    console.log("employee is abscent");
    emphr = 0;
    break;
    case 1:
    console.log("employee is full time");
    emphr = 8;
    break;
    case 2:
    console.log("employee is part time");
    emphr = 4;
    break;
}
let dailyWage = wage_per_hr * emphr;
console.log("total daily wage of a employee is:"+dailyWage)
