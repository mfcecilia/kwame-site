/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/







/*
*
Open Company List Modal
*
*/



function alphaBtnEvents() {
    'use strict';
    
    var jobsAlphaBtn = document.getElementById("jobs-alpha-btn");
    
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    
    var resultPreview = document.getElementsByClassName('result-view')[0];
    
    var jobsAlphaList = document.getElementsByClassName('alpha-list-container')[0];
    
    var i = 0;
    
    var j = 0;
    
    
    //tell console we are inside the function
    console.log("START alphaBtnEvents function");
    
    //check if user has clicked the alpha job search button
    if (jobsAlphaBtn.addEventListener("click", jobsAlphaBtn) !== null) {
        
        //tell console we registered the button click and ready to proceed
        console.log("...alphabetical job search button click registered....");
        
        
        //close modal if clicked while modal is already open
        if (jobsAlphaModal.style.display === "block") {
            jobsAlphaModal.style.display = "none";
            jobsAlphaBtn.innerHTML = "Select Companies";
        } else {
            //display the modal
            jobsAlphaModal.style.display = "block";
            jobsAlphaBtn.innerHTML = "Close X";
        }
        

        //tell console that all actions have completed successfully
        console.log("END alphaBtnEvents");
    } else {
        console.log("alphaBtnEvents function to open the modal FAILED");
    }
}
