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
*print amt array to console
*/
function printArr(arr) {
    'use strict';
    var j, k, l;
    
    for (j = 0; j < arr.length; j++) {
        console.log("row: " + j);
        for (k = 0; k < arr[j].length; k++) {
            console.log("cols: " + arr[j][k]);
        }
    }
}


/*
*
*
*count number of contacts each company has


function numContacts(num, amt, count) {
    'use strict';
    
    //num represents the current row item being analyzed
    //amt represents x.length
    //count represents i
    
    var a; //arrAmt row iterator
    var b; //arrAmt col iterator
    var c; //zero
    
    //2d array to count the amount of contacts per company
    var arrAmt = [0][0];
    
    //only check if there are already items have have been added
    if (count > 1) {
        for (a = 0; a < arrAmt.length; a++) {
            printArr(arrAmt);
            //check if the current item is already in arrAmt[][]
            if (arrAmt[a][b] === num) {
                //check if there are multiple columns already
                if (arrAmt[a] > 0) {
                    arrAmt[a].push(num);
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
        arrAmt[count][0] = num;
    }
}
*
*
*/



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
    var amtArr = [];
    var cols = 100;
    var a;
    
    //init the 2d array
    for (a = 0; a < cols; a++) {
        amtArr[a] = [];
    }
    
    //variable to store "row" tags
    x = xmlDoc.getElementsByTagName("Worksheet")[0].getElementsByTagName("Row");

    //iterate each row
    for (i = 1; i < x.length; i++) {
        
        if (x[i].childElementCount === 6) {
            if (amtArr.length > 0) {
                
                console.log("amtArr contents: " + amtArr);
                    
                if (amtArr[i - 1] === x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent) {
                    
                    
                    console.log("found duplicate in amtArr[i-1]: " + amtArr[i - 1]);
                    if (amtArr[i - 1].size > 1) {
                        
                        console.log("amtArr[i-1].size: " + amtArr[i - 1].size);
                        
                        amtArr[i - 1][amtArr[i - 1].size] = x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent;
                    }
                    amtArr[i - 1][0] = (x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent);

                } else {
                    amtArr[i] = x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent;
                    console.log("row child count = " + x[i].childElementCount);
                    console.log("adding.... " + x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent);
                    txt += x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + "<br>";
                }
            } else {
                amtArr[i] = x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent;
                console.log("row child count = " + x[i].childElementCount);
                console.log("adding.... " + x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent);
                txt += x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + "<br>";
            }
        } else if (x[i].childElementCount === 5) {
            
            amtArr[i] = x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent + "<br>";
            console.log("amtArr contents" + amtArr);
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