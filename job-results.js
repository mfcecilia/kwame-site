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
as user selects and deselects companies, the results will modify to reflect the changes
*
*/





/*
*
when the user selects companies, they appear as a preview to review before purchasing
*
*/

function getAlphaChecks() {
    'use strict';
    
    var checkedValue;
    var alphaChecks = document.getElementsByClassName('alphaCheckbox');
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    var resultPreview = document.getElementById('result-preview');
    
    var a = resultPreview.childElementCount; //number of items in result
    //var parseResult = resultPreview.getElementsByTagName("br")[0].textContent;
    var resultTag = '<br>';
    
    var i = 0;
    var j = 0;
    
    var currAlphaChecked = alphaChecks[i].checked;
    var currAlphaChecksVal = alphaChecks[i].value;
    
    //tell console we are inside the function
    console.log("START getAlphaChecks function");

    for (i = 0; alphaChecks[i]; i++) { //iterate through checkboxes
        console.log("...inside alphaChecks for loop... " + i);
        console.log(resultPreview.innerHTML);
        if (resultPreview.innerHTML === "") {
            console.log("are there already results showing? ...NO");
        }
        if (checkedValue === null) {
            console.log("are there already previously stored checkedValues? ...NO");
        }
        
        if (checkedValue) { //if there are items in the result view
            console.log("now showing current result preview contents: " + resultPreview.innerHTML); //print them
            //if the current check box we are analyzing is not the same as the previously added value
            if (checkedValue !== currAlphaChecksVal) {
                //iterate through those existing in the results preview
                for (j = 0; resultPreview.innerHTML[j]; j++) {
                    console.log("..inside resultPreview.innerHTML for loop... " + j);
                    //if item is already shown
                    if (resultPreview.innerHTML[j] === currAlphaChecksVal + resultTag) {
                        console.log("resultPreview.innerHTML[j]: " + resultPreview.innerHTML[j]); //print existing
                        console.log("...cannot add currAlphaChecksVal: " + currAlphaChecksVal);
                        console.log("resultPreview.innerHTML[j] === alphaChecks[i].value + resultTag ...continue checking...");
                        j++;
                        console.log("checking next result shown. innter html counter just increased to: " + i);
                        //if the item is not already shown
                    } else {
                        //add to the results view
                        resultPreview.innerHTML += currAlphaChecksVal + resultTag;
                        console.log("...ADDING TO RESULT item to result view..." + currAlphaChecksVal);
                        checkedValue = currAlphaChecksVal; //checkedValue now stores that checked value
                        break;
                    }
                }
            }
            
        } else if ((currAlphaChecked === true) && (resultPreview.innerHTML === null) && (checkedValue !== null)) { //if result view is empty when something is checked
            console.log("...ADDING TO RESULT alphaChecks[i].value: " + currAlphaChecksVal); //print the item to add
            checkedValue = currAlphaChecksVal; //checkedValue stores that checked value
            console.log("...checkedValue now storing... " + currAlphaChecksVal);
            resultPreview.innerHTML += alphaChecks[i].value + '<br>'; //show that value in the result view
            
            //else if checked value doesn't equal last checked
        } else if ((currAlphaChecksVal !== checkedValue) && (currAlphaChecked === true)) {
            //print the item to add
            console.log("...ADDING TO RESULT VIEW alphaChecks[i].value: " + alphaChecks[i].value);
            checkedValue = currAlphaChecksVal; //checkedValue now stores the current checked value
            resultPreview.innerHTML += currAlphaChecksVal + '<br>'; //show that value in the result view
            
        } else if (alphaChecks[i].value === null) {
            console.log("...NOTHING here, alphaChecks[i].value is null");
            
            //if something is checked and something has already been added right before and those 2 are not equal
        } else if ((checkedValue !== null) && (currAlphaChecked) && (checkedValue !== currAlphaChecked)) {
            console.log("...ADDING TO RESULT view... " + currAlphaChecksVal);
        } else {
            console.log("something might be wrong inside getAlphChecks() function");
        }
    }
    
    console.log("...FUNCTION ENDING...");
    console.log("...end of function number of items in result preview: " + a);
    
    console.log("...end of function result preview contents: " + resultPreview.innerHTML); //print them
    
    //prints the value of the last checkbox that was checked by the user
    console.log("...end of function last checked value: " + checkedValue);
    if (currAlphaChecksVal !== null) {
        console.log("...end of function alphaChecks[i] value: " + currAlphaChecksVal);
    }
    
        
    //tell console that all actions have completed successfully
    console.log("END getAlphaChecks");
}
