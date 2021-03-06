/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/


/*
*
*
*XML http request for alpha(betical) search
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
    
    
    
    //load modal with company names
    for (i = 0; i < x.length; i++) {
        txt += "<br><div id='alpha-select' onclick='alphaSelect(" + i + ")'>" + x[i].childNodes[1].textContent + "</div>";
        
        //gather their corresponding contacts
    }
    
    //check if there are already results
    if (resultPreview === "") {
        
        console.log("result preview is empty, loading divs");
        
        for (i = 0; i < x.length; i++) {
            resultAlloc += "<div id='result-item'></div>";
        }
        
    } else {
        document.preventDefault();
        console.log("result view is not empty");
    }

    console.log("x.length = " + x.length);
    
    document.getElementById("alpha-list-container").innerHTML = txt;
    document.getElementById("result-preview").innerHTML = resultAlloc;
    
    console.log("END alphaContractors(xml)");
    
    //return contacts array
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

/*
*
*
*parse contractor json
*
*
*/

function get_companies() {
    'use strict';
    var x, companyArr;
    companyArr = [];
    console.log("num of data itmes: " + data.length);
    for (x = 0; x < data.length; x++) {
        if (data[x].FIELD4 !== "") {
            if (companyArr.includes(data[x].FIELD4)) {
                continue;
            } else {
                companyArr.push(data[x].FIELD4);
            }
        }
    }
    console.log("num of items in company array: " + companyArr.length);
    return companyArr;
}


/*
*
*
*load jobs modal with companies
*
*
*/
//attempt at better version of alphaContractors(xml)
function load_companies() {
    'use strict';
    var i, job_list, arr, space, div;
    arr = get_companies();
    console.log("arr size: " + arr.length);
    job_list = document.getElementById("alpha-list-container");
    
    //load modal with company names
    for (i = 0; i < arr.length; i++) {
        space = document.createElement("br");
        div = document.createElement("div");
        div.textContent = arr[i];
        div.id = "alpha-select";
        div.setAttribute("onclick", "alphaSelect(" + i + ")");
        job_list.appendChild(space);
        job_list.appendChild(div);
    }
}