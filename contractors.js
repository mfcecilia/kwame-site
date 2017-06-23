/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/



/*
*
*
*XML http request for alpha search
*
*
*/

function alphaContractors(xml) {
    'use strict';
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("Worksheet")[1].getElementsByTagName("Row");

    
    for (i = 0; i < x.length; i++) {
        txt += x[i].childNodes[1].textContent + "<br>";
    }
    console.log("x.length = " + x.length);
    document.getElementById("alpha-list-container").innerHTML = txt;
}


/*
*
*
*parse contractor xml into html alpha modal
*
*
*/

function loadAlphaXML() {
    'use strict';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alphaContractors(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "/files/contractors.xml", true);
    xmlhttp.send();
}




/*
*
*
*parse contractor xml into html amt modal
*
*
*/

function amtContractors(xml) {
    'use strict';
    var x, numContacts, i, xmlDoc, txt; //need to figure out numContacts
    var contactCount; //2d array to track company and number of duplicates (contacts)
    xmlDoc = xml.responseXML;
    txt = "";
    //variable to store "row" tags
    x = xmlDoc.getElementsByTagName("Worksheet")[0].getElementsByTagName("Row");

    //iterate each row
    for (i = 1; i < x.length; i++) {
        if (x[i].childElementCount === 6) {
            console.log("row child count = " + x[i].childElementCount);
            console.log("adding.... " + x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent);
            txt += x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + "<br>";
        } else if (x[i].childElementCount === 5) {
            console.log("row child count = " + x[i].childElementCount);
            console.log("adding.... " + x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent);
            txt += x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent + "<br>";
        } else {
            console.log("could not add child node");
        }
    }
    console.log("x.length = " + x.length);
    document.getElementById("amt-list-container").innerHTML = txt;
}



/*
*
*
*XML http request for amt search
*
*
*/

function loadAmtXML() {
    'use strict';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            amtContractors(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "/files/contractors.xml", true);
    xmlhttp.send();
}

