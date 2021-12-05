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
  colorMode(RGB)
  createCanvas(800, 800);
  strokeWeight(2);
  noFill();
  background('black');
  translate(0, 0);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function drawRectangle(tick, maxTick, size) {

  push();
  if (tick < maxTick/2) {
    rgb = (tick * 510) / maxTick;
  } else {
    rgb = ((maxTick - tick) * 510) / maxTick;
  }
  stroke(rgb, 255-rgb, rgb);
  translate(width / 2, height / 2);
  rotate(tick * 6);
  rectMode(CENTER);
  rect(0, 0, size, size);
  pop();
}

function draw() {
  var now = clock()

  drawRectangle(now.hour,24, 450)
  drawRectangle(now.min,60, 300)
  drawRectangle(now.sec,60, 200)

  console.log(now.sec)


}