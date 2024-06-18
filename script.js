const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// this function adds a Task if the input box's value isn't empty
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something.");
    } else {
        /* if input box value isn't empty this
        creates an li element and assigns the 
        innerHTML property to the value of the
        input box. then it adds the li element
        to the listContainer id. and it creates a
        span element and changes the innerHTML
        property to the x and adds the span element
        as a child to the parent li element
        */
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    /* this sets the value of the input box back to empty
    and then calls the saveData function that saves the data
    to the local storage
    */
    inputBox.value = "";
    saveData();
}
/* this calls an event listener to the listContainer const that calls
a function when the event is "click"ed. In the event the target of the
event should have a tagName and if it's LI, then the event's target
will get toggled to be checked in the classList. And the saveData function
is called to save that data locally.
*/
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
/* this function saves the current HTML content of the listContainer element
to localStorage in the "data" key
*/
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
/* this function retrieves the HTML content stored under the "data" in
localStorage and sets it back to the listContainer element
*/
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
// this calls the showTask function
showTask();
