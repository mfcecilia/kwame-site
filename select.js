/*
user can select and deselect companies
executes when company in list is clicked
*/

function alphaSelect(company) {
    'use strict';
    //company arg is a number representing the company index being clicked
    
    
    var clicked;
    clicked = document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company];
    
    console.log("START alphaSelect(company)");

    //check if deselecting
    if (clicked.style.color === "white") {
        console.log("already selected. deselecting now");
        document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company].style.color = "black";
        document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company].style.background = "#f1e9e7";
    } else {
        
        //highlight selection on click
        document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company].style.color = "white";
        document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company].style.background = "#164f9c";
    }
    
    //add to the result div with the same index
    document.getElementById("result-preview").getElementsByTagName("div")[company].style.display = "block";
    document.getElementById("result-preview").getElementsByTagName("div")[company].innerHTML = "<br>" + clicked.innerHTML + "<br>" + "<i class='fa fa-trash'></i>" + "<br>";

    console.log("clicked: " + clicked.innerHTML);
    console.log("END alphaSelect(company)");
}


/*
populate result preview as they are selected
give them the ability to be deleted
*/
function alphaResults(company) {
    'use strict';
    var clicked, resultView, resultItemDiv, resultItem;
    
    
    console.log("START alphaResults() function");
    
    console.log("alpharesults doesn't do anything yet");
    
    console.log("END alphaResults() function");
}