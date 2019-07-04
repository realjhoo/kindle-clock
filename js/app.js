const date = document.getElementById("xdate"),
   time = document.getElementById("time"),
   greeting = document.getElementById("greeting");

function showDate() {
   const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
   ];
   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
   ];
   const xdate = document.getElementById("xdate");

   let today = new Date(),
      day = today.getDay(),
      dato = today.getDate(),
      month = today.getMonth(),
      year = today.getFullYear();

   let fullDate =
      days[day] + ", " + [dato] + " " + months[month] + " " + [year];

   xdate.innerHTML = fullDate;
}

function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes();

   hour = hour % 12 || 12;
   time.innerHTML = `${hour}<span>:</span>${addZero(min)}`;
   setTimeout(showTime, 5000);
}

function addZero(n) {
   // This forces display of zeros
   return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setGreet() {
   let today = new Date(),
      hour = today.getHours();

   if (hour < 12) {
      // morning
      greeting.textContent = "Good Morning, ";
   } else if (hour < 18) {
      //afternoon
      greeting.textContent = "Good Afternoon, ";
   } else {
      //evening
      greeting.textContent = "Good Evening, ";
   }
}

showDate();
showTime();
setGreet();
