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
    btn.onclick;
};

//check if search close button is pressed
var alphaCloseClick = span.onclick;

// when the user clicks on the button, open the modal 
function alphaBtn() {
    'use strict';
    console.log("inside alphaBtn function");
    if (alphaBtnClick) {
        modal.style.display = "block";
    } else {
        console.log("the alphaBtn function to open the modal has failed");
    }
}

// when the user clicks on <span> (x), close the modal
function alphaClose() {
    'use strict';
    console.log("inside alphaClose function");
    if (alphaCloseClick) {
        modal.style.display = "none";
    } else {
        console.log(" the alphaClose function to close the modal has failed");
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


// get the modal
var modal = document.getElementById('jobs-amt-modal');

// Get the button that opens the modal
var btn = document.getElementById("jobs-amt-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("jobs-amt-close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    'use strict';
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    'use strict';
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    'use strict';
    if (event.target === modal) {
        modal.style.display = "none";
    }
};