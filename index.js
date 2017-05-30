/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */



/*
Global variables
*/
var menuItems = document.getElementsByTagName("A");
var i = 0;



/*
Cycle through menu items and print them to the console.
*/
function printMenu() {
    'use strict';
    while (i < menuItems.length) {
        console.log(menuItems[i].innerHTML);
        i = i + 1;
    }
}