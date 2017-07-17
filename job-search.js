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
        
        //find which have been previously selected via checking result view
        if (resultPreview.getElementsByTagName('div').length > 0) {
            console.log("...scanning results...");
            for (i; i < resultPreview.length; i++) {
                for (j; j < jobsAlphaList.length; j++) {
                    if (resultPreview.getElementsByTagName('div')[i].innerHTML === jobsAlphaList.getElementsByTagName('div')[j]) {
                        //highlight to show it has been selected
                        jobsAlphaList.getElementsByTagName('div')[j].style.color = "white";
                        jobsAlphaList.getElementsByTagName('div')[j].style.backgroundColor = "#164f9c";
                    }
                }
            }
        }
        
        //display the modal
        jobsAlphaModal.style.display = "block";


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
        
        console.log("...reset alpha job search button click registered...");
    } else {
        console.log("alphaReset function to close the modal FAILED");
    }
    //close modal
    jobsAlphaModal.style.display = "none";
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
    
    //tooltip: click here to exit without losing your changes
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
when user clicks "done at the end of the alphabetical company search modal, take a snapshot of selections, reveal them in the preview, and close the modal
*
*/

function amtSave() {
    'use strict';
    
    console.log("START amtSave function");
    
    var jobsAmtModal = document.getElementById('jobs-amt-modal');
    var amtModalFooter = document.getElementsByClassName('amt-modal-footer');
    var amtXboxes = document.getElementsByClassName('amt-checkbox');
    var resultView = document.getElementsByClassName('result-view');
    var resultItem = document.getElementsByClassName('result-item');
    
    //on click
    if (window.addEventListener("click", amtModalFooter) !== null) {
        console.log("...save button in amt modal registered...");
        
        //checkbox iterator
        var a = 0;
        //array of selected items
        var amtX = [];
        
        //gather selections
        for (a; a < amtXboxes.length; a++) {
            console.log("analyzing checkbox #: " + a);
            if (amtXboxes[a].checked) {
                amtX[a] = (amtXboxes[a].value);
                console.log("selected in amt search: " + amtXboxes[a].value);
                console.log("added: " + amtX[a]);
            } else {
                console.log("not checked");
                console.log("amtX[a]: " + amtX[a]);
            }
        }
        
        var b = 0;
        var newResult;
        
        //populate preview
        for (b; b < amtX.length; b++) {
            if (typeof amtX[b] === 'string' || amtX[b] instanceof String) {
                console.log("adding to result view: " + amtX[b]);
                newResult = document.createElement('div');
                newResult.className = 'result-item';
                document.getElementById('result-preview').appendChild(newResult);
                resultItem[b].innerHTML = amtX[b];
                console.log("result now contains: " + resultItem[b].innerHTML);
            }
        }
        
        //close modal
        jobsAmtModal.style.display = "none";
    } else {
        console.log("amtSave function FAILED");
    }
    console.log("END amtSave");
}


/*
*
when the user clicks on 'reset', uncheck everything
*
*/

function amtReset() {
    'use strict';
    
    //tell console we are inside the function
    console.log("START amtReset function");
    
    // store the modal element
    var jobsAmtModal = document.getElementById('jobs-amt-modal');
    // store the <span> element that closes the modal
    var jobsAmtReset = document.getElementsByClassName("amt-modal-header")[0];
    //store amt checkbox class
    var amtXboxes = document.getElementsByClassName('amt-checkbox');
    
    //on click
    if (jobsAmtReset.addEventListener("click", jobsAmtReset) !== null) {
        
        
        var j = 0;
        
        //find and uncheck checked items
        for (j; j < amtXboxes.length; j++) {
            if (amtXboxes[j].checked) {
                amtXboxes[j].checked = false;
                console.log("deleted in amt search: " + amtXboxes[j].value);
            }
        }
        
        //clear amt search items from result preview
        
        console.log("...reset amt job search button click registered...");
    } else {
        console.log("amtReset function to close the modal FAILED");
    }
    //close modal
    jobsAmtModal.style.display = "none";
    console.log("END amtReset");
}