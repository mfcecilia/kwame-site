/*
Upon clicking "Purchase", the list of items that are left in the result preview are 
put into an array.
*/
function getSelections() {
    'use strict';
    var items = document.getElementsByClassName("result-view"),
        selected = [],
        x;

    //iterate over all result items in result view
    for (x = 0; x < items.length; x += 1) {
        console.log("getSelections() item: " + items[x].textContent + "\n");
        //add to the selected array
        selected[x] = items[x].textContent;
    }
    for (x = 0; x < selected.length; x += 1) {
        console.log("selected array: " + selected[x]);
    }
}


/*
Using the array of final selections, their contacts are found and 
paired up via a more sophisticated data structure.
*/
function matchContacts() {
    'use strict';
    
}


/*
Parse the data into a well formatted file
*/
function generateFile() {
    'use strict';
    
}