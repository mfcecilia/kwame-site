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
    var x, y, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    
    //variable to store "row" tags
    x = xmlDoc.getElementsByTagName("Worksheet")[0].getElementsByTagName("Row");

    //iterate each row
    for (i = 1; i < x.length; i++) {
        if (x[i].childElementCount === 6) {
            y = x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + "<br>";
            //numContacts(y, x.length, i)
            console.log("row child count = " + x[i].childElementCount);
            console.log("adding.... " + x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent);
            txt += x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + "<br>";
        } else if (x[i].childElementCount === 5) {
            y = x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent + "<br>";
            //numContacts(y, x.length, i)
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
*count number of contacts each company has
*
*
*/

function numContacts(num, amt, count) {
    'use strict';
    
    //num represents the current row item being analyzed
    //amt represents x.length
    //count represents i
    
    var a; //arrAmt row iterator
    var b; //arrAmt col iterator
    var c; //zero
    
    //2d array to count the amount of contacts per company
    var arrAmt = [];
    
    //only check if there are already items have have been added
    if (count > 1) {
        for (a = 0; a < arrAmt.length; a++) {
            //check if the current item is already in arrAmt[][]
            if (arrAmt[a][b] === num) {
                //check if there are multiple columns already
                if (arrAmt[a] > 0) {
                //find the next empty column
                //or avoid this check and see if there's a push method to add to beginning instead of end
                //add to column in arrAmt
                } else {
                    //idk
                }
            } else {
                //idk
            }
        }
    } else {
        //add current item being analyzed to arrAmt[i][a] if it is the first in the xml
        arrAmt[count][c] = num;
    }
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