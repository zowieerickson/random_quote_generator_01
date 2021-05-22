/***
 * selectors
 ***/
const quote = document.querySelector(".quote");
const source = document.querySelector(".source");
const citation = document.querySelector(".citation");

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "We are what we pretend to be, so we must be careful about what we pretend to be.",
    source: "Kurt Vonnegut",
    citation: "Mother Night",
  },
  {
    quote: "Do one thing every day that scares you.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "What's meant to be will always find a way.",
    source: "Trisha Yearwood",
  },
  {
    quote:
      "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    source: "Maya Angelou",
  },
  {
    quote:
      "The flower that blooms in adversity is the rarest and most beautiful of all.",
    source: "Walt Disney Company",
    citation: "Mulan",
  },
  {
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart",
  },
  {
    quote:
      "Instead of worrying about what you cannot control, shift your energy to what you can create.",
    source: "Roy T. Bennett",
    citation: "The Light in the Heart",
  },
  {
    quote:
      "I was never really insane except upon occasions when my heart was touched.",
    source: "Edgar Allan Poe",
  },
  {
    quote:
      "It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.",
    source: "Vincent Van Gogh",
  },
  {
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    source: "Marcus Aurelius",
    citation: "Meditations",
  },
  {
    quote:
      "You must not ever stop being whimsical. And you must not, ever, give anyone else the responsibility for your life.",
    source: "Mary Oliver",
    citation: "Wild Geese",
  },
  {
    quote:
      "Aerodynamically, the bumble bee shouldn't be able to fly, but the bumble bee doesn't know it so it goes on flying anyway.",
    source: "Mary Kay Ash",
  },
  {
    quote:
      "There is no dishonor in losing the race. There is only dishonor in not racing because you are afraid to lose.",
    source: "Garth Stein",
    citation: "The Art of Racing in the Rain",
  },
  {
    quote:
      "Risks must be taken because the greatest hazard in life is to risk nothing.",
    source: "Leo F. Buscaglia",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
  },
];

console.log(quotes);

/***
 * `getRandomQuote` function
 ***/

let random = Math.floor(Math.random() * quotes.length);

function getRandomQuote(arr) {
  // Number between 0 and length of quotes array
  return arr[random].quote;
}

console.log(random);
console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
 ***/
function printQuote(arr) {
  let randomQuote = getRandomQuote(quotes);
  quote.innerHTML = randomQuote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
