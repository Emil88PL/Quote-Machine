function x(){
$.getJSON(
  "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en",
  function(data) {
  	 quote = data.quoteText;
  	 author = data.quoteAuthor;
    // Success! Do stuff with data.
    console.log(data);
   document.getElementById("quoteText").innerHTML = quote;
   document.getElementById("quoteAuthor").innerHTML = author;
  }
);};