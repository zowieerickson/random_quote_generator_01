/***
 * selectors
 ***/
const quoteBox = document.querySelector("#quote-box");
const quote = document.querySelector(".quote");
const source = document.querySelector(".source");
const citation = document.querySelector(".citation");
const body = document.querySelector("body");
const year = document.querySelector(".year");

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "We are what we pretend to be, so we must be careful about what we pretend to be.",
    source: "Kurt Vonnegut",
    citation: "Mother Night",
    year: 1970,
    tag: "Inspiration",
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Eleanor Roosevelt",
    year: 1997,
    tag: "Inspiration",
  },
  {
    quote: "What's meant to be will always find a way.",
    source: "Trisha Yearwood",
    tag: "Inspiration",
  },
  {
    quote:
      "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    source: "Maya Angelou",
    tag: "Inspiration",
  },
  {
    quote:
      "The flower that blooms in adversity is the rarest and most beautiful of all.",
    source: "Walt Disney Company",
    citation: "Mulan",
    tag: "Inspiration",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart",
    tag: "Motivation",
  },
  {
    quote:
      "Instead of worrying about what you cannot control, shift your energy to what you can create.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart",
    tag: "Motivation",
  },
  {
    quote:
      "I was never really insane except upon occasions when my heart was touched.",
    source: "Edgar Allan Poe",
    tag: "Inspiration",
  },
  {
    quote:
      "It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.",
    source: "Vincent Van Gogh",
    tag: "Love",
  },
  {
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    source: "Marcus Aurelius",
    citation: "Meditations",
    tag: "Motivation",
  },
  {
    quote:
      "You must not ever stop being whimsical. And you must not, ever, give anyone else the responsibility for your life.",
    source: "Mary Oliver",
    citation: "Wild Geese",
    tag: "Inspiration",
  },
  {
    quote:
      "Aerodynamically, the bumble bee shouldn't be able to fly, but the bumble bee doesn't know it so it goes on flying anyway.",
    source: "Mary Kay Ash",
    tag: "Motivation",
  },
  {
    quote:
      "There is no dishonor in losing the race. There is only dishonor in not racing because you are afraid to lose.",
    source: "Garth Stein",
    citation: "The Art of Racing in the Rain",
    tag: "Inspiration",
  },
  {
    quote:
      "Risks must be taken because the greatest hazard in life is to risk nothing.",
    source: "Leo F. Buscaglia",
    tag: "Motivation",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
    tag: "Motivation",
  },
  {
    quote:
      "Business opportunities are like buses, there’s always another one coming.",
    source: "Richard Branson",
    tag: "Business",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    source: "Henry David Thoreau",
    tag: "Business",
  },
  {
    quote:
      "There’s no shortage of remarkable ideas, what’s missing is the will to execute them.",
    source: "Seth Godin",
    tag: "Business",
  },
  {
    quote:
      "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs",
    tag: "Business",
  },
  {
    quote:
      "Even if you are on the right track, you’ll get run over if you just sit there.",
    source: "Will Rodgers",
    tag: "Business",
  },
];

/***
 * `colors` array
 ***/
const colors = [
  "rgb(58, 193, 98)",
  "#3b1f2b",
  "#db162f",
  "#dbdfac",
  "#19297c",
  "#a1867f",
  "#D1BCE3",
  "#004f2d",
  "#0a8754",
  "#508ca4",
  "#8ed081",
  "#b4d2ba",
  "#e2856e",
  "#88A2AA",
  "#e2856e",
  "#e3f09b",
  "#f7d08a",
  "#87b6a7",
  "#5b5941",
  "#2c0735",
  "#272932",
  "#30292f",
  "#0c090d",
];

/********************************************************
 * Retrieving random color and displaying it
 ***/
function getRandomColor(arr) {
  // finds a random number based on amount of colors in 'colors' array
  let random = Math.floor(Math.random() * colors.length);
  // returns random color based on its index value, AKA the number from 'random'
  return arr[random];
}

function displayRandomColor() {
  // assigns the random color to a variable "randomColor"
  let randomColor = getRandomColor(colors);
  // change the background color
  body.style.backgroundColor = randomColor;
}

/**********************************************************
 * Retrieving random color and displaying it
 ***/
function getRandomQuote(arr) {
  // finds a random number based on number of quote objects in 'quotes' array
  let random = Math.floor(Math.random() * quotes.length);
  // returns random color based on its index value, AKA the number from 'random'
  return arr[random];
}

/***
 * timers
 ***/
let timers = setInterval(function () {
  printQuote();
  displayRandomColor();
}, 20000);

/**********************************************************
 * print html
 ***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);

  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;

  // if quote obj has citation/year/tag, will display it
  if (randomQuote.citation !== undefined) {
    html += `
    <span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year !== undefined) {
    html += `
    <span class="citation">${randomQuote.year}</span>`;
  }

  if (randomQuote.tag !== undefined) {
    html += `
      <div class="tag-container">
        <img class="icon" src="img/tag.svg" alt="" />
        <span class="tag">${randomQuote.tag}</span>
      </div>`;
  }

  html += `
  </p>`;
  quoteBox.innerHTML = html;

  // reset the interval timer
  clearInterval(timers);
  timers = setInterval(function () {
    printQuote();
    displayRandomColor();
  }, 20000);
}

/***
 * event listeners
 ***/
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

document
  .getElementById("load-quote")
  .addEventListener("click", displayRandomColor, false);
