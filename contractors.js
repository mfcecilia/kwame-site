/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/



/*
*
*
*xml DOM http requests
*
*
*/

function loadXMLDoc() {
    'use strict';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "/files/contractors.xml", true);
    xmlhttp.send();
}

function myFunction(xml) {
    'use strict';
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("Data");
    for (i = 0; i < x.length; i++) {
        txt += x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("alpha-list-container").innerHTML = txt;
}

/*
*
*
*get excel sheet
*
*

function getAlphaExcel(xml) {
    'use strict';
    var xmlDoc = xml.responseXML;
    var x = parser.documentElement.childNodes;
    document.getElementById("alpha-list-container").innerHTML =
        xmlDoc.getElementsByTagName("Cell")[0].childNodes[0].nodeValue;
}*/