console.log("connected to js");

function changeTextColor(input) {
    input.style.color = "lime";
}

function danger() {
    document.querySelector('.rec-info p').style.color = "red";

}
function safe() {
    document.querySelector('.rec-info p').style.color = "black";

}