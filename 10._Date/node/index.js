//one way to create a date object
console.log(new Date().toLocaleString());

//another way to create a date object with location time zone
console.log(Date());

//unix epoch time in seconds
console.log(Date.now());

//remember ISO 8601 standard, javascript and python use this standard
//ISO stands for International Organization for Standardization


const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-DK").format(date);
console.log(danishDate);

const americanDate = new Intl.DateTimeFormat("en-US").format(date);
console.log(americanDate);

//in the terminal it will show 22.2.2024 in danish and 2/22/2024 in american, so its different formats


//the Z at the end of the date string means that the date is in UTC time zone, also called zulu time
//the T in the date string is just a separator between the date and time