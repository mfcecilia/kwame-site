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
*XML http request for amt search
*
*
*/

function amtContractors(xml) {
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

