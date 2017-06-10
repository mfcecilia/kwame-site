/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/



/*
*
*
*job search results
*
*
*/




/*
*
when the user selects companies, they appear as a preview to review before purchasing
*
*/

function getSelectedCompanies() {
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