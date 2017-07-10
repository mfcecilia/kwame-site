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
*
*
*/



function countDuplicates(arr) {
    'use strict';
    var a, b, c;
    var count = 1;
    var amtContacts = [];
    var txt = "";
    
    //create object from first item in the array as a starting comparison
    var company = {};
    company.name = "name";
    company.count = count;
    company.index = a;
    
    
    //begin loop for counting duplicates
    for (a = 0; a < arr.length; a++) {
        
        //compare 2 array items
        if (arr[a] === arr[a + 1]) {
            count++;
            //set object count to equal the count var
            company.count = count;
        } else {
            //record [a] values in amtContacts array
            b = 0;
            amtContacts[a] = (company.count + "<br>" + company.name + "<br>");
            console.log("modal output: " + amtContacts[a]);

            console.log("added " + company.name + " with " + company.count + " contact(s) from index " + company.index);
            //create new object representing [a + 1]
            count = 1;
            company.name = arr[a + 1];
            company.count = count;
            company.index = (a + 1);
        }
    }
    //sort the objects by company.count
    
    //format for html
    for (c = 0; c < amtContacts.length; c++) {
        console.log("compay + amt: " + amtContacts[c]);

        txt += amtContacts[c] + "<br>";
    }
    
    
    //print them to the modal
    document.getElementById("amt-list-container").innerHTML = txt;
}




/*
*
*
*parse contractor xml into an array
*count duplicates in the array using countDuplicates(arr)
*format for html and print to amt modal
*
*/

function getContractors(xml) {
    'use strict';
    var x, y, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    
    var amtArr = [];
    var cols = 100;
    var a;
    
    
    //variable to store "row" tags
    x = xmlDoc.getElementsByTagName("Worksheet")[0].getElementsByTagName("Row");

    //iterate each row
    for (i = 1; i < x.length; i++) {
        
        if (x[i].childElementCount === 6) {
            console.log("<Row> child count = " + x[i].childElementCount);
            
            //add to array for counting duplicates later
            amtArr[i] = x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent;
            console.log("added " + x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + " to amtArr[i] at index: " + i);

        } else if (x[i].childElementCount === 5) {
            console.log("<Row> child count = " + x[i].childElementCount);
            
            //add to array for counting duplicates later
            amtArr[i] = x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent;
            console.log("added " + x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent + " to amtArr[i] at index: " + i);
            
            
        } else {
            //error message
            console.log("could not add child node");
        }
    }
    
    //print to amt modal in html
    //txt += x[i].getElementsByTagName("Cell")[4].childNodes[0].textContent + "<br>";
    //txt += x[i].getElementsByTagName("Cell")[3].childNodes[0].textContent + "<br>";
    
    //print number of rows
    console.log("x.length (number of <Row> tags) = " + x.length);
    
    //document.getElementById("amt-list-container").innerHTML = txt;
    
    countDuplicates(amtArr);

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
            getContractors(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "/files/contractors.xml", true);
    xmlhttp.send();
}