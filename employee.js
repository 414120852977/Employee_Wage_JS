console.log("welcome to employee wage");
const IS_PRESENT= 1;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;
const MONTHLY_WORKING_DAYS = 10;
const MAX_HOUR_IN_MONTHS = 100;
let totalEmphr = 0;
let totalWorkingDays = 0;
let empCheck = Math.floor(Math.random()*3);

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1:
            return FULL_TIME_HOUR;
            break;
        case 2:
            return PART_TIME_HOUR;    
        default:
            return 0;
            break;
    }
    
}
emphr = getWorkingHours(empCheck);
let empWage = emphr * WAGE_PER_HOUR;
console.log("employee wage:"+empWage);

for(let i = 1; i <= MONTHLY_WORKING_DAYS; i++) {
let empCheck = Math.floor(Math.random()*10)%3;
emphr += getWorkingHours(empCheck);
}
let empWage1 = emphr * WAGE_PER_HOUR;
console.log("total hours"+emphr +"employee wage"+empWage1);

while (totalEmphr <= MAX_HOUR_IN_MONTHS && totalWorkingDays < MONTHLY_WORKING_DAYS) {
 totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
totalEmphr += getWorkingHours(empCheck);
}
let employeeWage = totalEmphr * WAGE_PER_HOUR;
console.log("total days:"+totalWorkingDays+"total hours"+totalEmphr+"employee wage "+employeeWage)