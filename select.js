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

    console.log("clicked: " + clicked.innerHTML);
    console.log("END alphaSelect(company)");

}


/*
populate result preview
executes when "Save" is clicked
*/
function alphaResults() {
    'use strict';
    var a, b, resultPreview, selected, resultTxt;
    resultPreview = document.getElementById('result-preview');
    selected = document.getElementsByClassName('alpha-list-container')[0].getElementsByTagName('div');
    resultTxt = "";
    
    console.log("START alphaResults() function");
    
    //iterate to find selected items
    for (a = 0; a < selected.length; a++) {
        if (selected[a].style.color === "white") {
            console.log("selection found: " + selected[a].textContent);
            
            //add to global result array
            for (b = 0; b < results.length; b++) {
                if (results[b] === 0) {
                    results[b] = selected[a].textContent;
                }
            }
            
            //format html var with selections for result view
            resultTxt += "<br><div id='alpha-result'>" + selected[a].textContent + "</div>";
        }
    }

    //add to result view html
    resultPreview.innerHTML = resultTxt;
    console.log("END alphaResults() function");
}