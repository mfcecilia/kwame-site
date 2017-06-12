/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/* global define */
/* jslint latedef:false*/



/*
*
*
*job search results javascript mechanics
*
*
*/


/* globals to track user history*/
var prevAlphaSelection;

/*
*
when the user selects companies, they appear as a preview to review before purchasing.
as the user selects and deselects companies, the results will modify to reflect the changes.
*
*/

function getAlphaChecks() {
    'use strict';
    
    //VARS
    var a = 0;
    var i = 0;
    
    //RESULT ARRAY
    var resultItems = document.getElementsByClassName('result-view');
    var resultFind = document.getElementsByClassName("result-view")[a];
    var getResults = resultFind.getElementsByTagName("br");
    var resultChild = resultItems[a].getElementsByClassName('result-view')[a];
    var resultDivId = document.getElementById('result-preview');
    var resultTag = document.createElement("br");
    var resultObj = resultItems[a];
    
    //CHECKBOX ARRAY
    var alphaChecks = document.getElementsByClassName('alpha-checkbox');
    var alphaCheckbox = alphaChecks[i]; //no return value
    var checkedValue = alphaCheckbox.checked; //true or false
    var currAlphaCheckVal = alphaCheckbox.value; //string
    
    
    //BEGIN ANALYZING
    console.log("START getAlphaChecks function");

    //CHECKBOX FOR LOOP
    for (i = 0; alphaChecks[i]; ++i) {
        
        console.log("...inside alphaCheckbox FOR loop... " + i);

        console.log("...now analyzing current checkbox: " + currAlphaCheckVal);
        
        /*RESULT VIEW IS EMPTY*/
        if (resultDivId.innerHTML === "") {
            console.log("...result view is empty... : " + resultDivId.innerHTML);
            /*CURRENT BOX CHECKED*/
            if (checkedValue) {
                console.log(currAlphaCheckVal + " is selected...(current checkbox value)...");
                
                console.log("...ADDING TO RESULT view...: " + currAlphaCheckVal);
                var newText = document.createTextNode(currAlphaCheckVal);
                resultTag = resultTag.appendChild(newText);//append txt node
                console.log("resultTag = ", resultTag); //check output
                
                resultDivId.appendChild(resultTag);//add to result view
                
                
                prevAlphaSelection = alphaChecks[i].value;
                console.log("...recording user selection history: " + prevAlphaSelection + " ...added...");
                
                console.log("results now include: " + resultDivId.innerHTML);
                console.log("...this current alphaCheckbox loop #: " + i + " is now ending...");
                i++;
                /*CURRENT BOX UNCHECKED*/
            } else {
                console.log("...result view empty AND current box is unchecked...nothing to do here...");
                console.log("...this current alphaCheckbox loop #: " + i + " is now ending...");
            }
            
        /*RESULT VIEW IS NOT EMPTY*/
        } else if (resultDivId.innerHTML !== "") {
            console.log("...result view is not empty... : " + resultDivId.innerHTML);
            
            
            //RESULT VIEW FOR LOOP
            for (a = 0; resultItems[a]; a++) {
                console.log("...inside resultItems FOR loop... " + a);
                console.log("...now analyzing this resultObj value: " + resultItems[a].innerHTML);
                
                /*CURRENT CHECKBOX CHECKED*/
                /*CURRENT CHECKBOX EQUALS RESULT VAL*/
                if (checkedValue && (currAlphaCheckVal === resultItems[a].innerHTML)) {
                    //do nothing
                    console.log("...cannot add currAlphaCheckVal: " + currAlphaCheckVal + " if resultVal exists: " + resultItems[a].innerHTML);
                    console.log("...this current resultItems loop #: " + a + " is now ending...");
                    
                /*CURRENT CHECKBOX UNCHECKED*/
                /*CURRENT CHECKBOX EQUALS RESULT VAL*/
                } else if (!checkedValue && (currAlphaCheckVal === resultItems[a].innerHTML)) {
                    //remove it
                    console.log("...removing resultVal " + resultItems[a].innerHTML + " because currAlphaCheckVal " + currAlphaCheckVal + " is not checked...");
                    resultDivId.removeChild(resultItems[a]);
                    console.log("...this current resultItems loop #: " + a + " is now ending...");
                } else {
                    console.log("not sure what other checks i need, so I'm ADDING currAlphaCheckVal: " + currAlphaCheckVal + " to result view....");
                    resultTag.innerHTML = currAlphaCheckVal;
                    resultDivId.appendChild(resultTag);
                }
                console.log("...this current resultItems loop #: " + a + " is now ending...");
            }
            console.log("EXITING resultObj FOR loop");
            //might need else if for results empty and box unchecked
        } else {
            console.log("something might be wrong inside getAlphChecks() function OR i just don't have all the right if statements");
        }
        console.log("...this current alphaChecks loop #: " + a + " is now ending...");
        
    }
    
    console.log("EXITING alphaChecks loop...getAlphaChecks FUNCTION ENDING...");
    
    
    /*summary of the function events*/
    if (resultDivId !== "") {
        console.log("...function ending number of items in result preview: " + resultDivId.childElementCount);
        console.log("...function ending result preview contents: " + resultDivId.innerHTML);
    } else {
        console.log("...function ending... nothing in result view");
    }
    
    
    if (checkedValue) {
        console.log("...function ending... alphaChecks[i].value is currently checked: " + currAlphaCheckVal);
    } else {
        console.log("...function ending... done analyzing the unchecked alphaChecks[i] value: " + currAlphaCheckVal);
        console.log("...function ending... previously acted upon by user: " + prevAlphaSelection);
    }
    
    console.log("END getAlphaChecks");
}

/*function getAlphaUnchecks()*/
