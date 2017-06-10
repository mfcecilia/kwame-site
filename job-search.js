/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/


/*
* global variables
*/

//check if user clicks at all
var clicked = document.addEventListener("click", window);



/*
*
*
*alphabetical search
*
*
*/



// get the search button that opens the modal
var jobsAlphaBtn = document.getElementById("jobs-alpha-btn");

//get modal for alphabetical job search
var jobsAlphaModal = document.getElementById('jobs-alpha-modal');

// get the <span> element that closes the modal
var jobsAlphaClose = document.getElementsByClassName("jobs-alpha-close")[0];

//check if user clicked the button to close the alpha job search modal
var alphaCloseClick = jobsAlphaClose.onclick;







/*
* when the user clicks on the alphabetical search
* button, open the modal to show company list.
*/

function alphaBtnEvents() {
    'use strict';
    
    var jobsAlphaBtn = document.getElementById("jobs-alpha-btn");
    
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    
    //tell console we are inside the function
    console.log("START alphaBtnEvents function");
    
    //check if user has clicked the alpha job search button
    if (jobsAlphaBtn.addEventListener("click", jobsAlphaBtn) !== null) {
        //tell console we registered the button click and ready to proceed
        console.log("...alphabetical job search button click registered....");
        
        //say what the user clicked
        
        
        //display the modal
        jobsAlphaModal.style.display = "block";

        //opaque backdrop displayed

        //tell console that all actions have completed successfully
        console.log("the alphabetical job search button click actions are complete");
    } else {
        console.log("alphaBtn function to open the modal FAILED");
    }
}


// when the user clicks on <span> (x), close the modal
function alphaClose() {
    'use strict';
    // get the modal
    var modal = document.getElementById('jobs-alpha-modal');
    console.log("inside alphaClose function");
    if (alphaCloseClick !== null) {
        console.log("inside the close alpha job search button click check");
        jobsAlphaModal.style.display = "none";
        
        //opaque backdrop displayed
        
        console.log("the close alpha job search button click was registered");
    } else {
        console.log("the alphaClose function to close the modal has failed");
    }
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    'use strict';
    // get the modal

    if (clicked === jobsAlphaModal) {
        jobsAlphaModal.style.display = "none";
    }
};








//amount of contacts search

// get the modal
var modal = document.getElementById('jobs-amt-modal');
