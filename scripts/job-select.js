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
    document.getElementById("result-preview").getElementsByTagName("div")[company].innerHTML = "<br>" + clicked.innerHTML + "<br>" + "<i class='fa fa-trash' onclick='resultRemove(" + company + ")'></i>" + "<br>";

    console.log("clicked: " + clicked.innerHTML);
    console.log("END alphaSelect(company)");
}





/*
Trash Icon Functionality
*/

function resultRemove(company) {
    'use strict';
    
    var modalItem, resultItem, modalList, resultList;
    
    //modal list item with index
    modalItem = document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company];
    
    //result preview item with index
    resultItem = document.getElementsByClassName('result-view')[0].getElementsByTagName('div')[company];
    
    //modal list
    modalList = document.getElementsByClassName('alpha-list-container')[0];
    
    //result preview list
    resultList = document.getElementById('result-preview');
    
    //hide from result view
    resultItem.style.display = "none";
    
    //unhighlight in modal
    modalItem.style.color = "black";
    modalItem.style.background = "#f1e9e7";
    
}