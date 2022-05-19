console.log(document);

var count = document.getElementById("count");
function delayedAlert() {
    alert("This is a delayed response")
    clearInterval(countDown);
}

function countdown() {
    count.innerText--
}

function countup(e) {
    console.log(e)
    e.target.innerText++;
}
setTimeout(delayedAlert, 5000);
var countDown = setInterval(countdown, 1000)

var buttons = document.querySelectorAll("button");
console.log(buttons);

for (var b of buttons) {
    b.addEventListener("click", countup)
}


