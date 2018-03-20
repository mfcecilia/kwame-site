/*
user can select and deselect companies
executes when company in list is clicked
*/

function alphaSelect(company) {
    'use strict';
    //company arg is a number representing the company index being clicked
    
    var clicked, result_div, result_preview, space;
    
    clicked = document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div')[company];
    result_preview = document.getElementById("result-preview");
    
    console.log("START alphaSelect(company)");
    
    console.log("clicked: " + clicked.textContent);

    //check if deselecting
    if (clicked.style.color === "white") {
        console.log("already selected. deselecting now");
        clicked.style.color = "black";
        clicked.style.background = "#f1e9e7";
        
    } else {
        
        //highlight selection on click
        clicked.style.color = "white";
        clicked.style.background = "#164f9c";
    }
    
    //add to the result div with the same index
    space = document.createElement("br");
    result_div = document.createElement("div");
    
    result_div.innerHTML = clicked.textContent + "<br><i class='fas fa-trash-alt' onclick='resultRemove(" + company + ")'></i><br>";
    result_preview.appendChild(space);
    result_preview.appendChild(result_div);
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