/*
*
*
*XML http request for contractor contacts
*
*
*/

function getContacts(xml) {
    'use strict';
    var x, i, xmlDoc, contacts;
    
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("Worksheet")[0].getElementsByTagName("Row");
    
    console.log("START getContacts(xml)");
    
    //fill array with company contacts
    for (i = 0; i < x.length; i++) {
        
        txt += "<br><div id='alpha-select' onclick='alphaSelect(" + i + ")'>" + x[i].childNodes[1].textContent + "</div>";
        
    }
    

    console.log("x.length = " + x.length);
    
    document.getElementById("alpha-list-container").innerHTML = txt;
    
    console.log("END alphaContractors(xml)");
    
    //return contacts array
}


/*
*
*
*parse contractor xml to get the contacts
*
*
*/

function loadContactsXML() {
    'use strict';
    var xmlhttp = new XMLHttpRequest();
    
    console.log("START loadContactsXML()");
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getContacts(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "files/contractors.xml", true);
    xmlhttp.send();
    
    console.log("END loadContactsXML()");
}