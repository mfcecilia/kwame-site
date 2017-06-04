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
    //tell console we are inside the function
    console.log("inside alphaBtn function");
    //check if user has clicked the alpha job search button
    if (alphaBtnClick) {
        //tell console we registered the button click and ready to proceed
        console.log("inside the alphabetical job search button click check");
        //display the modal
        modal.style.display = "block";
        //opaque backdrop displayed
        document.getElementById("main-page-content").style.opacity = "0.5";
        //tell console that all actions have completed successfully
        console.log("the alphabetical job search button click actions are complete");
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
        //opaque backdrop displayed
        document.getElementById("main-page-content").style.opacity = "1";
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


