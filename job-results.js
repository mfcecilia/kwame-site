/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/




/*
*
*
*remove deselected items from the result view
*
*
*/

function clrAlphaResults() {
    'use strict';
    console.log("START clrAlphaResults");
    
    //store reset header
    var jobsAlphaReset = document.getElementsByClassName("alpha-modal-header")[0];
    //store checkbox class
    var alphaXboxes = document.getElementsByClassName('alpha-checkbox');
    //results elements
    var resultView = document.getElementsByClassName('result-view');
    var resultItem = document.getElementsByClassName('result-item');
    
    //on reset button click
    if (jobsAlphaReset.addEventListener("click", jobsAlphaReset) !== null) {
        console.log("...clear alpha job search results button click registered...");
        
        var j = 0;
        
        //iterate over checkboxes
        for (j; j < alphaXboxes.length; j++) {
            if (alphaXboxes[j].checked === false) {
                console.log("analyzing unchecked alpha value: " + alphaXboxes[j].value);
                
                var b = 0;

                //iterate over results and delete matches
                for (b; b < resultItem.length; b++) {
                    if (alphaXboxes[j].value === resultItem[b].innerHTML) {
                        console.log("found match, now removing...: " + resultItem[b].innerHTML);
                        document.getElementById('result-preview').removeChild(resultItem[b]);
                    }
                }
            }
        }
        
    } else {
        console.log("clrAlphaResults button click not registered");
    }
}




function clrAmtResults() {
    'use strict';
    console.log("START clrAmtResults");
    
    //store reset header
    var jobsAmtReset = document.getElementsByClassName("amt-modal-header")[0];
    //store checkbox class
    var amtXboxes = document.getElementsByClassName('amt-checkbox');
    //results elements
    var resultView = document.getElementsByClassName('result-view');
    var resultItem = document.getElementsByClassName('result-item');
    
    //on reset button click
    if (jobsAmtReset.addEventListener("click", jobsAmtReset) !== null) {
        console.log("...clear amt job search results button click registered...");
        
        var j = 0;
        
        //iterate over checkboxes
        for (j; j < amtXboxes.length; j++) {
            if (amtXboxes[j].checked === false) {
                console.log("analyzing unchecked amt value: " + amtXboxes[j].value);
                
                var b = 0;

                //iterate over results and delete matches
                for (b; b < resultItem.length; b++) {
                    if (amtXboxes[j].value === resultItem[b].innerHTML) {
                        console.log("found match, now removing...: " + resultItem[b].innerHTML);
                        document.getElementById('result-preview').removeChild(resultItem[b]);
                    }
                }
            }
        }
        
    } else {
        console.log("clrAmtResults button click not registered");
    }
}