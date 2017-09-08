/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/


/*
*
*
*alphabetical search
*
*
*/


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
        } else {
            //display the modal
            jobsAlphaModal.style.display = "block";
        }
        
        console.log("alphaBtnEvents doesn't actually do anything yet");

        //tell console that all actions have completed successfully
        console.log("END alphaBtnEvents");
    } else {
        console.log("alphaBtnEvents function to open the modal FAILED");
    }
}



/*
*
when the user clicks on 'reset', uncheck everything
*
*/

function alphaReset() {
    'use strict';
    
    //tell console we are inside the function
    console.log("START alphaReset function");
    
    // store the modal element
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    
    // store the <span> element that closes the modal
    var jobsAlphaReset = document.getElementsByClassName("alpha-modal-header")[0];
    
    
    //on click
    if (jobsAlphaReset.addEventListener("click", jobsAlphaReset) !== null) {
        
        //click success message
        console.log("...reset alpha job search button click registered...");
        
        //remove from result view
        //unhighlight selections
        
    } else {
        
        //fail message
        console.log("alphaReset function to close the modal FAILED");
    }
    
    //close modal
    jobsAlphaModal.style.display = "none";
    
    console.log("alphaReset doesn't actually do anything yet");
    console.log("END alphaReset");
}



/*
*
when user clicks "done at the end of the alphabetical company search modal, take a snapshot of selections, reveal them in the preview, and close the modal
*
*/

function alphaSave() {
    'use strict';
    
    console.log("START alphaSave function");
    
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    var alphaModalFooter = document.getElementsByClassName('alpha-modal-footer');
    
    //on click
    if (window.addEventListener("click", alphaModalFooter) !== null) {
        console.log("...save button in alpha modal registered...");
        
        //close modal
        jobsAlphaModal.style.display = "none";
    } else {
        console.log("alphaSave function FAILED");
    }
    
    console.log("alphaSave doesn't actually do anything yet");
    console.log("END alphaSave");
}


/*
NUMBER OF CONTACTS SEARCH POSTPONED UNTIL FULL SITE IS FUNCTIONAL
*/



///*
//*
//*
//*amount of contacts search
//*
//*
//*/
//
//
///*
//*
//when the user clicks on the amount of contacts search button, open the modal to show company list.
//*
//*/
//
//function amtBtnEvents() {
//    'use strict';
//    
//    var jobsAmtBtn = document.getElementById("jobs-amt-btn");
//    
//    var jobsAmtModal = document.getElementById('jobs-amt-modal');
//    
//    //tell console we are inside the function
//    console.log("START amtBtnEvents function");
//    
//    //check if user has clicked the alpha job search button
//    if (jobsAmtBtn.addEventListener("click", jobsAmtBtn) !== null) {
//        //tell console we registered the button click and ready to proceed
//        console.log("...amount of contacts job search button click registered....");
//        
//        //say what the user clicked
//        
//        
//        //display the modal
//        jobsAmtModal.style.display = "block";
//
//        //opaque backdrop displayed
//
//        //tell console that all actions have completed successfully
//        console.log("END amtBtnEvents");
//    } else {
//        console.log("amtBtnEvents function to open the modal FAILED");
//    }
//}
//
//
//
///*
//*
//when user clicks "done at the end of the alphabetical company search modal, take a snapshot of selections, reveal them in the preview, and close the modal
//*
//*/
//
//function amtSave() {
//    'use strict';
//    
//    console.log("START amtSave function");
//    
//    var jobsAmtModal = document.getElementById('jobs-amt-modal');
//    var amtModalFooter = document.getElementsByClassName('amt-modal-footer');
//    var amtXboxes = document.getElementsByClassName('amt-checkbox');
//    var resultView = document.getElementsByClassName('result-view');
//    var resultItem = document.getElementsByClassName('result-item');
//    
//    //on click
//    if (window.addEventListener("click", amtModalFooter) !== null) {
//        console.log("...save button in amt modal registered...");
//        
//        //checkbox iterator
//        var a = 0;
//        //array of selected items
//        var amtX = [];
//        
//        //gather selections
//        for (a; a < amtXboxes.length; a++) {
//            console.log("analyzing checkbox #: " + a);
//            if (amtXboxes[a].checked) {
//                amtX[a] = (amtXboxes[a].value);
//                console.log("selected in amt search: " + amtXboxes[a].value);
//                console.log("added: " + amtX[a]);
//            } else {
//                console.log("not checked");
//                console.log("amtX[a]: " + amtX[a]);
//            }
//        }
//        
//        var b = 0;
//        var newResult;
//        
//        //populate preview
//        for (b; b < amtX.length; b++) {
//            if (typeof amtX[b] === 'string' || amtX[b] instanceof String) {
//                console.log("adding to result view: " + amtX[b]);
//                newResult = document.createElement('div');
//                newResult.className = 'result-item';
//                document.getElementById('result-preview').appendChild(newResult);
//                resultItem[b].innerHTML = amtX[b];
//                console.log("result now contains: " + resultItem[b].innerHTML);
//            }
//        }
//        
//        //close modal
//        jobsAmtModal.style.display = "none";
//    } else {
//        console.log("amtSave function FAILED");
//    }
//    console.log("END amtSave");
//}
//
//
///*
//*
//when the user clicks on 'reset', uncheck everything
//*
//*/
//
//function amtReset() {
//    'use strict';
//    
//    //tell console we are inside the function
//    console.log("START amtReset function");
//    
//    // store the modal element
//    var jobsAmtModal = document.getElementById('jobs-amt-modal');
//    // store the <span> element that closes the modal
//    var jobsAmtReset = document.getElementsByClassName("amt-modal-header")[0];
//    //store amt checkbox class
//    var amtXboxes = document.getElementsByClassName('amt-checkbox');
//    
//    //on click
//    if (jobsAmtReset.addEventListener("click", jobsAmtReset) !== null) {
//        
//        //clear amt search items from result preview
//        
//        console.log("...reset amt job search button click registered...");
//    } else {
//        console.log("amtReset function to close the modal FAILED");
//    }
//    //close modal
//    jobsAmtModal.style.display = "none";
//    console.log("END amtReset");
//}