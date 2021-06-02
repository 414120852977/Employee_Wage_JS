console.log("welcome to employee wage");
const IS_PRESENT= 1;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR= 20;
const MONTHLY_WORKING_DAYS = 10;
const MAX_HOUR_IN_MONTHS = 100;
let totalEmphr = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empCheck = Math.floor(Math.random()*3);
function calcDailyWage(emphr) {
    return emphr * WAGE_PER_HOUR;
}

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
let emphr = getWorkingHours(empCheck);
totalEmphr += emphr;
empDailyWageArr.push(calcDailyWage(emphr));
empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
let employeeWage = totalEmphr * WAGE_PER_HOUR;
console.log("total days:"+totalWorkingDays+"total hours"+totalEmphr+"employee wage "+employeeWage)

let emplWage = calcDailyWage(totalEmphr);
console.log("total days"+totalWorkingDays+"total hours"+totalEmphr+"emp wage"+emplWage);

// UC 7A -Calc total Wage Using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
    console.log(empDailyWageMap);
function totalWages(totalWages, dailyWage){
    return totalWages + dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A -Toatal Days: " + totalWorkingDays + 
            "Total Hrs: " + totalEmphr + "Emp Wage: " + totEmpWage);
console.log("UC8- Emp Wage Map totalHrs: "+
                Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

function totolWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC-7A -Emp Wage with reduce:" + empDailyWageArr.reduce(totolWages,0));

//UC 7B - Show the Day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " +dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B - Daily Wage Map;");
console.log(mapDayWithWageArr);

//UC 7C - Show Days When Full time wage of 160 wew earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC-7C - Daily Wage Filter When Fulltime Wage Earned:");
console.log(mapDayWithWageArr);

//UC 7D - Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
} 
console.log("UC-7D - First time Fulltime wage was earned on day:"+
                fullDayWageArr.find(findFulltimeWage));

//UC-7E -Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
} 
console.log("UC-7E - Check All Element Have Full Time wage :"+
                fullDayWageArr.every(isAllFulltimeWage));

//UC-7F -Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
} 
console.log("UC-7F - Check If Any Part Time wage :"+
                mapDayWithWageArr.some(isAnyPartTimeWage));

//UC-7G -Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage >0) return numOfDays+1;
    return numOfDays;
} 
console.log("UC-7G - Number of Days Emp Worked :"+
                empDailyWageArr.reduce(totalDaysWorked, 0));

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;

}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow.:" + " Total Hours: " + totalHours + " Total Wages : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (values , key ,map) => {
    if( values == 8 ) fullWorkingDays.push(key);
    else if (values == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: " +fullWorkingDays);
console.log("Part Working Days: " +partWorkingDays);
console.log("Non Working Days: " +nonWorkingDays);

 //uc-10
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return '\n Day ' + this.dayNum + ' => Working Hour is ' + this.dailyHours +
                                    'And Wage Earned = ' + this.dailyWage
        },
    });