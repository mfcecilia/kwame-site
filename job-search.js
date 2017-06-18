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
    //store alpha checkbox class
    var alphaXboxes = document.getElementsByClassName('alpha-checkbox');
    
    //on click
    if (jobsAlphaReset.addEventListener("click", jobsAlphaReset) !== null) {
        
        
        var j = 0;
        
        //find and uncheck checked items
        for (j; j < alphaXboxes.length; j++) {
            if (alphaXboxes[j].checked) {
                alphaXboxes[j].checked = false;
                console.log("deleted in alpha search: " + alphaXboxes[j].value);
            }
        }
        
        //clear alpha search items from result preview
        
        console.log("...reset alpha job search button click registered...");
    } else {
        console.log("alphaReset function to close the modal FAILED");
    }
    console.log("END alphaReset");
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
    
    // store the modal element
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    // store the <span> element that closes the modal
    var jobsAlphaClose = document.getElementsByClassName("jobs-alpha-close")[0];
    //store alpha checkbox class
    var alphaXboxes = document.getElementsByClassName('alpha-checkbox');
    
    //on click
    if (jobsAlphaClose.addEventListener("click", jobsAlphaClose) !== null) {
        
        //close modal
        jobsAlphaModal.style.display = "none";
        
        console.log("...close alpha job search button click registered...");
    } else {
        console.log("alphaClose function to close the modal FAILED");
    }
    console.log("END alphaClose");
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
    var alphaModalFooter = document.getElementById('alpha-modal-footer');
    var alphaXboxes = document.getElementsByClassName('alpha-checkbox');
    var resultView = document.getElementsByClassName('result-view');
    var resultItem = document.getElementsByClassName('result-item');
    
    //on click
    if (window.addEventListener("click", alphaModalFooter) !== null) {
        console.log("...done button in alpha modal registered...");
        
        //checkbox iterator
        var a = 0;
        //array of selected items
        var alphaX = [];
        
        //gather selections
        for (a; a < alphaXboxes.length; a++) {
            console.log("analyzing checkbox #: " + a);
            if (alphaXboxes[a].checked) {
                alphaX[a] = (alphaXboxes[a].value);
                console.log("selected in alpha search: " + alphaXboxes[a].value);
                console.log("added: " + alphaX[a]);
            } else {
                console.log("not checked");
                console.log("alphaX[a]: " + alphaX[a]);
            }
        }
        console.log("amount selected in alpha search: " + alphaX.length);
        
        var b = 0;
        var newResult;
        
        //populate preview
        for (b; b < alphaX.length; b++) {
            if (typeof alphaX[b] === 'string' || alphaX[b] instanceof String) {
                console.log("adding to result view: " + alphaX[b]);
                newResult = document.createElement('div');
                newResult.className = 'result-item';
                document.getElementById('result-preview').appendChild(newResult);
                resultItem[b].innerHTML = alphaX[b];
                console.log("result now contains: " + resultItem[b].innerHTML);
            }
        }
        
        //close modal
        jobsAlphaModal.style.display = "none";
    } else {
        console.log("alphaSave function FAILED");
    }
    console.log("END alphaSave");
}





/*
*
*
*amount of contacts search
*
*
*/




/*
*
when the user clicks on the amount of contacts search button, open the modal to show company list.
*
*/

function amtBtnEvents() {
    'use strict';
    
    var jobsAmtBtn = document.getElementById("jobs-amt-btn");
    
    var jobsAmtModal = document.getElementById('jobs-amt-modal');
    
    //tell console we are inside the function
    console.log("START amtBtnEvents function");
    
    //check if user has clicked the alpha job search button
    if (jobsAmtBtn.addEventListener("click", jobsAmtBtn) !== null) {
        //tell console we registered the button click and ready to proceed
        console.log("...amount of contacts job search button click registered....");
        
        //say what the user clicked
        
        
        //display the modal
        jobsAmtModal.style.display = "block";

        //opaque backdrop displayed

        //tell console that all actions have completed successfully
        console.log("END amtBtnEvents");
    } else {
        console.log("amtBtnEvents function to open the modal FAILED");
    }
}



/*
*
when the user clicks on <span> (x), close the modal
*
*/

function amtClose() {
    'use strict';
    
    //tell console we are inside the function
    console.log("START amtClose function");
    
    // get the modal
    var jobsAmtModal = document.getElementById('jobs-amt-modal');
    // get the <span> element that closes the modal
    var jobsAmtClose = document.getElementsByClassName("jobs-amt-close")[0];
    
    if (jobsAmtClose.addEventListener("click", jobsAmtClose) !== null) {
        
        jobsAmtModal.style.display = "none";
        
        //opaque backdrop displayed
        
        console.log("...close amt of contacts job search button click registered...");
    } else {
        console.log("amtClose function to close the modal FAILED");
    }
    console.log("END amtClose");
}


/*
*
when user clicks "done at the end of the alphabetical company search modal, close the modal
*
*/

function amtDone() {
    'use strict';
    
    console.log("START amtDone function");
    
    var jobsAmtModal = document.getElementById('jobs-amt-modal');
    var amtModalFooter = document.getElementById('amt-modal-footer');
    
    if (window.addEventListener("click", amtModalFooter) !== null) {
        console.log("...done button in amt of contacts modal registered...");
        jobsAmtModal.style.display = "none";
    } else {
        console.log("amtDone function FAILED");
    }
    console.log("END amtDone");
}