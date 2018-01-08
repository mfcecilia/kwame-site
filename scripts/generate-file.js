/*
Upon clicking "Purchase", the list of items that are left in the result preview are 
put into an array.
*/
function getSelections() {
    'use strict';
    var items = document.getElementById("result-preview").childNodes,
        selected = [],
        x,
        y = 0;
    
    console.log("START getSelections()");

    //iterate over all result items in result view
    for (x = 0; x < items.length; x += 1) {
        //check if the company name is visible
        if (items[x].style.display === 'block') {
            //add to the selected array
            selected[y] = items[x].textContent;
            console.log("getSelections() item " + x + ": " + selected[y]);
            //counter to push to selected array without adding undefined elements
            y += 1;
        }
    }
    //print selected array
    console.log("selected array: " + "\n");
    for (x = 0; x < selected.length; x += 1) {
        console.log(selected[x]);
    }
    return selected;
}


/*
Using the array of final selections, their contacts are found and 
paired up via a more sophisticated data structure.
*/
function matchContacts() {
    'use strict';
    var companies,
        contacts,
        a,
        b;
    console.log("START matchContacts()");
    //get the selected array and store in the companies variable
    companies = getSelections();
    
    contacts = loadContactsXML();
    
    console.log("matchContacts() companies: " + companies);
    for (a = 0; a < companies.length; a += 1) {
        console.log("company " + a + ": " + companies[a]);
    }
    
    console.log("matchContacts() contacts: " + contacts);
    
    //iterate over contractor xml file, find their matches
    
    //create an array for each company
    
    //store all their contact info into the arrays
    
    //return each array
}


/*
Parse the data into a well formatted file
*/
function generateFile() {
    'use strict';
    
    //var info = matchContacts()
    //neatly write info into a text file
}