/* this function changes the innerText and the 
background color of the button in the nav.*/
function changeText(element) {
    alert("Ninja Page was clicked.");
    element.innerText = "Logout"
    element.style.backgroundColor = "orange";
}
/* this function removes the button from 
the top right container.*/
function removeText(erase) {
    erase.remove();
}
/* this function counts the number of likes of 
the top Container*/
function incrementNumber() {
    var count = document.querySelector("#counter")
    var currentNumber = parseInt(count.innerText);
    var incrementedNumber = currentNumber + 1;
    count.innerText = incrementedNumber
}

/* this function counts the number of likes of 
the bottom Container*/
function incrementNumber2() {
    var count = document.querySelector("#counter2")
    var currentNumber = parseInt(count.innerText);
    var incrementedNumber = currentNumber + 1;
    count.innerText = incrementedNumber
}
