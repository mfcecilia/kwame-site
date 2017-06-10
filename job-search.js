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




/*
*
when the user clicks on the alphabetical search button, open the modal to show company list.
*
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
        console.log("END alphaBtnEvents");
    } else {
        console.log("alphaBtnEvents function to open the modal FAILED");
    }
}



/*
*
when the user clicks on <span> (x), close the modal
*
*/

function alphaClose() {
    'use strict';
    
    //tell console we are inside the function
    console.log("START alphaClose function");
    
    // get the modal
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    // get the <span> element that closes the modal
    var jobsAlphaClose = document.getElementsByClassName("jobs-alpha-close")[0];
    
    if (jobsAlphaClose.addEventListener("click", jobsAlphaClose) !== null) {
        
        jobsAlphaModal.style.display = "none";
        
        //opaque backdrop displayed
        
        console.log("...close alpha job search button click registered...");
    } else {
        console.log("alphaClose function to close the modal FAILED");
    }
    console.log("END alphaClose");
}


/*
*
when user clicks "done at the end of the alphabetical company search modal, close the modal
*
*/

function alphaDone() {
    'use strict';
    
    console.log("START alphaDone function");
    
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    var alphaModalFooter = document.getElementById('alpha-modal-footer');
    
    if (window.addEventListener("click", alphaModalFooter) !== null) {
        console.log("...done button in alpha modal registered...");
        jobsAlphaModal.style.display = "none";
    } else {
        console.log("alphaDone function FAILED");
    }
    console.log("END alphaDone");
}









//amount of contacts search

// get the modal
var modal = document.getElementById('jobs-amt-modal');
