/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */


//get data from excel and use for html output.

//get the api key for to access the contractor doc
var sheetUrl = "https://spreadsheets.google.com/feeds/cells/AIzaSyCt0pkxd9kwF1a0vuG6jLgstdq81FGgPXI/1/public/values?alt=json-in-script&callback=";

//variable to hold the object that grabs data from a url
var request = new XMLHttpRequest();

//get the alpha button
var alpha = document.getElementById("jobs-alpha-btn");

//get company list area
var info = document.getElementById("alpha-list");



function getExcelData() {
    'use strict';
    console.log("START getExcelData");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            info.innerHTML = request.responseText;
            console.log("...displaying data...");
        }
    };
    request.open("GET", sheetUrl, true);
    request.send(null);
    console.log("END getExcelData");
}




//save data from html into a file