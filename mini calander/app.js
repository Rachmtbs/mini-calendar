//bringing the elemnts from the html to the javascript  getelement by id because we are using the id element in the js
const  monthNameEl = document.getElementById('month-name');
const  dayNameEl = document.getElementById('day-name');
//can say dayNum or dayNumber
const  dayNumEl = document.getElementById('day-number');
const  yearEl = document.getElementById('year');

//el is the element
//date function to get the correct dat
 const date = new Date(); //new date gets the data
 const mont = date.getMonth();

 monthNameEl.innerText = date.toLocaleString ("en", {month: "long"})
 dayNameEl.innerText = date.toLocaleString("en", {weekday: "long"});
 //dayNumEl.innerText = date.toLocaleString("en", {num: "long"}); gave the daye including the time
 dayNumEl.innerText = date.getDate(); //at first left out the() made the live server show functiongetFullyear(){[native code]}
 yearEl.innerText = date.getFullYear();
 

  
