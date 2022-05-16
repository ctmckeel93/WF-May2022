console.log("Connected to js");
var img = document.querySelector('#phxPic')


function changePic() {
    // What you want to do
    img.src = "images/phx2.jpg";
}

function changeBox(element) {
    console.log(element);
    element.style.backgroundColor = "purple";
}

function selectPic(dropdown) {
    // When the value of the dropdown changes, I will change the image displayed to the matching name
    console.log(dropdown.value);
    img.src = `images/${dropdown.value}.jpg`; 
}

// sendMessage();