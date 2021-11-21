//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 


//var now = clock()

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"

// var lastSecond;
// var lastMinute;
// var lastHour;
// var fade;
// var fadeAmount = 1

function setup() {

  createCanvas(800, 800);
  stroke(255, 204, 0, 10);   
  strokeWeight(2);
  noFill();
  background('black');
  translate(0, 0);
  rectMode(CENTER);
  angleMode(DEGREES);
  // fade = 0


}


function draw() {
  var now = clock()
  


  var h = now.sec
  var m = now.min
  var s = now.hours

  // lastMinute = now.min;
  // lastSecond = h;
  // lastHour = s;

  // fill(0, 0, 0, fade)

push();
translate(width / 2, height / 2);
rotate(m*6);
rectMode(CENTER);
rect(0, 0, 300, 300);
pop();

push();
translate(width / 2, height / 2);
rotate(s*6);
rectMode(CENTER);
rect(0, 0, 450, 450);
pop();

push(); 
translate(width / 2, height / 2);
rotate(h*6);
rectMode(CENTER);
rect(0, 0, 200, 200);
pop();




// if (fade<0) fadeAmount=1; 
 
//   if (fade>255) fadeAmount=-10; 
 
//   fade += fadeAmount; 
//   print(fade)


//overpaint bg after one minute
// if(lastMinute != now.min){
//   push()
//   background('black');
//   pop()
//   lastMinute = now.min;
// }

// //overpaint bg after one second
// if(lastSecond != h){
// background(b);
// lastSecond = h;
// }

//overpaint bg after one hour
// if(lastHour != s){
// background(b);
// lastHour = s;
// }

  console.log(h)


}