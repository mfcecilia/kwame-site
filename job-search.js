/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

//alphabetical search



// get the modal
var modal = document.getElementById('jobs-alpha-modal');

// get the search button that opens the modal
var btn = document.getElementById("jobs-alpha-btn");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("jobs-alpha-close")[0];

//check if initial search button is pressed
var alphaBtnClick = window.onload = function () {
    'use strict';
    // get the search button that opens the modal
    var btn = document.getElementById("jobs-alpha-btn");
    btn.onclick();
};

//check if user clicked the button to close the alpha job search modal
var alphaCloseClick = window.onload = function () {
    'use strict';
    // get the <span> element that closes the modal
    var span = document.getElementsByClassName("jobs-alpha-close")[0];
    span.onclick();
};


// when the user clicks on the button, open the modal 
function alphaBtn() {
    'use strict';
    // get the modal
    var modal = document.getElementById('jobs-alpha-modal');
    console.log("inside alphaBtn function");
    if (alphaBtnClick) {
        console.log("inside the alphabetical job search button click check");
        modal.style.display = "block";
        console.log("the alphabetical job search button click was registered");
    } else {
        console.log("the alphaBtn function to open the modal has failed");
    }
}

// when the user clicks on <span> (x), close the modal
function alphaClose() {
    'use strict';
    // get the modal
    var modal = document.getElementById('jobs-alpha-modal');
    console.log("inside alphaClose function");
    if (alphaCloseClick) {
        console.log("inside the close alpha job search button click check");
        modal.style.display = "none";
        console.log("the close alpha job search button click was registered");
    } else {
        console.log("the alphaClose function to close the modal has failed");
    }
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    'use strict';
    if (event.target === modal) {
        modal.style.display = "none";
    }
};








//amount of contacts search


