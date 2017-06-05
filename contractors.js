/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */


//get data from excel and use for html output.

//get the api key for to access the contractor doc
var sheet = "https://spreadsheets.google.com/feeds/cells/AIzaSyCt0pkxd9kwF1a0vuG6jLgstdq81FGgPXI/1/public/values?alt=json-in-script&callback=";

//variable to hold the object that grabs data from a url
var request = new XMLHttpRequest();

//get the alpha button
var alpha = document.getElementById("jobs-alpha-btn");

//get company list area
var info = document.getElementById("alpha-list");



function getExcelData() {
    'use strict';
    request.open('GET', sheet, true);
    request.send();
}




//save data from html into a file