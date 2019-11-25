const quoteBtn = document.querySelector(#quoteBtn);
const quoteAuthor = document.querySelector
('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventlistener('click',displayQuote);

function displyQuote (){

    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes(number).name;
    quote.innerHTML = quotes[number].quote;
}