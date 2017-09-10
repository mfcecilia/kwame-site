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
    var x, i, xmlDoc, txt, resultAlloc, resultItem, resultPreview;
    
    
    xmlDoc = xml.responseXML;
    txt = "";
    resultAlloc = "";
    resultPreview = document.getElementById("result-preview").innerHTML;
    resultItem = document.getElementById("result-item");
    x = xmlDoc.getElementsByTagName("Worksheet")[1].getElementsByTagName("Row");
    
    
    console.log("START alphaContractors(xml)");
    
    
    
    //load modal with companies
    for (i = 0; i < x.length; i++) {
        txt += "<br><div id='alpha-select' onclick='alphaSelect(" + i + ")'>" + x[i].childNodes[1].textContent + "</div>";
    }
    
    //check if there are already results
    if (resultPreview === "") {
        
        console.log("result preview is empty, loading divs");
        
        for (i = 0; i < x.length; i++) {
            resultAlloc += "<div id='result-item' onclick='resultRemove(" + i + "); alphaResults(" + i + ")'>" + "</div>";
        }
        
    } else {
        document.preventDefault();
        console.log("result view is not empty");
    }

    console.log("x.length = " + x.length);
    
    document.getElementById("alpha-list-container").innerHTML = txt;
    document.getElementById("result-preview").innerHTML = resultAlloc;
    
    console.log("END alphaContractors(xml)");
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
    
    console.log("START loadAlphaXML()");
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            alphaContractors(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "files/contractors.xml", true);
    xmlhttp.send();
    
    console.log("END loadAlphaXML()");
}