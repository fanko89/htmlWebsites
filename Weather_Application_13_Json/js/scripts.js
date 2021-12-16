const d = new Date();
console.log(d);

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

let forecastDayNumber = todayDayNumber;
console.log(forecastDayNumber)

const weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
 
console.log(weekday[todayDayNumber]);

const apiURL= "//api.openweathermap.org/data/2.5/forecast?zip=75217,us&appid=06f5a76cf4c32305c78ec029d6b5e645&units=imperial"
console.log(apiURL)
fetch(apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

document.getElementById("townName").textContent = 
weatherInfo.city.name
let mylist = weatherInfo.list;

for (i=0; i < mylist.length; i++) {
let time= mylist[i].dt_txt;

if(time.includes('21:00:00')) {
    console.log("found an entry with 21:00:00 in the time it was repot "+i+" from the mylist of 40")


forecastDayNumber += 1;
if (forecastDayNumber === 7) {forecastDayNumber = 0;}
console.log("Forecast Day Number" + 
forecastDayNumber+" which is"+weekday[forecastDayNumber]);

let theDayName = document.createElement("span");
theDayName.className ='dayTag'
theDayName.textContent = weekday[forecastDayNumber];
console.log(">"+weekday[forecastDayNumber])

let theTemp = document.createElement("p");
theTemp.className ='tempTag'
theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
console.log("TEMPERATURE>"+weatherInfo.list[i].main.temp);

const iconcode=weatherInfo.list[i].weather[0].icon;
const iconPath="//openweathermap.org/img/w/" + iconcode + ".png";
let theIcon=document.createElement("img")
theIcon.className ='iconTag'
theIcon.src=iconPath;

let theday = document.createElement("div");
theday.className ='weatherBox'
theday.appendChild(theIcon);
theday.appendChild(theDayName);
theday.appendChild(theTemp);
theday.appendChild(theIcon);

document.getElementById('weatherforecast').appendChild(theday);
}
}
});