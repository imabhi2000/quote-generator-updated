//get quotes from API
var btn = document.getElementById('btn');
var quote = document.getElementById('quoteplace');
var author = document.getElementById("authorplace");
var twitter = document.getElementById('tweet');
var textplace = document.getElementById('textplace');
function getQuotes() {
    console.log('button pressed');
    const url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
    const xhreq = new XMLHttpRequest();

    xhreq.onload = function () {

        if (xhreq.status === 200) {
            console.log(xhreq.status);

            var data = JSON.parse(xhreq.response);
            var obj = data.quotes[0];
            if (!obj.author) {
                obj.author = 'unknown';
            }
            if (obj["text"].length > 120) {
                textplace.style.fontSize = "3.2rem";
            }

            quote.innerHTML = obj.text;
            author.innerHTML = obj.author;
            console.log(obj.text);
            console.log(obj.text.length);
            console.log(obj.author);

        } else {
            console.log(xhreq.status);
            console.log('error establishing the connection');
        }
    }

    xhreq.open('get', url);
    xhreq.send();
}
function newpage() {
    let q1 = quote.innerHTML;
    let a1 = author.innerHTML;
    let turl = `https://twitter.com/intent/tweet?text=${q1}-${a1}`;
    window.open(turl, "-blank");
};
btn.addEventListener('click', getQuotes);
twitter.addEventListener('click', newpage);
console.log("script working");