/* USER HELP: NEW QUOTE CALCULATOR INSIDE CLICK HANDLER!
USER HELP: HREF CHANGE INSIDE CLICK HANDLER*/
$(document).ready(function() {
$("#quoteButton").on("click", function() {

    var quotes = ["Don't cry because it's over, smile because it happened. - Dr. Seuss", "Be yourself; everyone else is already taken. - Oscar Wilde", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. - Marilyn Monroe", "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr Seuss"];

    var authors = ["Dr. Seuss", "Oscar Wilde", "Albert Einstein", "Marilyn Monroe", "Dr Seuss"];

    var newQuote = quotes[Math.floor(Math.random() * quotes.length)];

    $(".quote").html(newQuote);
    $("a").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(newQuote));
});
});
