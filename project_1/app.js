quotes = [
  {
    "quote": "Keep your eyes on the stars and your feet on the ground.",
    "author": "Theodore Roosevelt" 
  },
  {
    "quote": "The only person you should try to be better than is the person you were yesterday.",
    "author": "Anonymous" 
  },
  {
    "quote": "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    "author": "Harvey Fierstein" 
  },
  {
    "quote": "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    "author": "Sador, Children of Húrin" 
  },
  {
    "quote": "Life's too mysterious to take too serious.",
    "author": "Mary Engelbreit" 
  },
  {
    "quote": "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    "author": "Albert Einstein" 
  },
  {
    "quote": "There isn't a way things should be. There's just what happens, and what we do.",
    "author": "Terry Pratchett, A Hat Full of Sky" 
  },
  {
    "quote": "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    "author": "Rocky Balboa, Rocky" 
  },
  {
    "quote": "If you want to go fast, go alone. If you want to go far, go together.",
    "author": "African proverb" 
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "author": "T. Roosevelt" 
  },
  {
    "quote": "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
    "author": "Jose Luis Borges" 
  },
  {
    "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "author": "Ralph Waldo Emerson"
  }
]

// variables

let btn = document.querySelector("#nextQuote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].author;
})























