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
function getResultPreview() {
    'use strict';
    
    console.log("START getResultPreview");
    
    var alphaChecks = document.getElementsByClassName('alphaCheckbox');
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    var resultPreview = document.getElementById('result-preview');
    
    var a = resultPreview.childElementCount; //number of items in result preview
    var b = 0;
    var c = 1;
    
    var resultArr = new Array(0); //create an array
    
    
    console.log("...number of items in result preview: " + a);
    
    if (a > 0) { //if there are more than zero items in the result preview
        if (resultPreview.innerHTML === null) {
            return 0;
        }
        var compare = resultArr.join();
        console.log(compare);
        
        var duplicates = compare.match(resultArr[0]);
        if (duplicates) {
            return 0;
        }

        
    }
    console.log("END getResultPreview");
}




/*
*
when the user selects companies, they appear as a preview to review before purchasing
*
*/

function getAlphaChecks() {
    'use strict';
    
    var checkedValue = null;
    var alphaChecks = document.getElementsByClassName('alphaCheckbox');
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    var resultPreview = document.getElementById('result-preview');
    
    var a = resultPreview.childElementCount; //number of items in result
    var parseResult = resultPreview.getElementsByTagName('br').textContent);
    
    var i = 0;
    var j = 0;
    
    //tell console we are inside the function
    console.log("START getAlphaChecks function");

    for (i = 0; alphaChecks[i]; i++) { //iterate through checkboxes
        if (alphaChecks[i].checked && a === 0) { //if something is checked
            console.log("alphaChecks[i]: " + alphaChecks[i].value);
            checkedValue = alphaChecks[i].value; //checkedValue stores that checked value
            resultPreview.innerHTML += alphaChecks[i].value + '<br>'; //show that value in the
            
        } else if (a > 0) {
            console.log("result preview contents: " + resultPreview.getElementsByTagName('br').textContent);
            
            //find a way to parse the inner html of 
            if (checkedValue === null &&) {
                i++;
                resultPreview.innerHTML += alphaChecks[i].value + '<br>'; //show that value in the
            }
            
        }
    }
    console.log("...number of items in result preview: " + a);
    
    //prints the value of the last checkbox that was checked by the user
    console.log("last checked value: " + checkedValue);
    
        
    //tell console that all actions have completed successfully
    console.log("END getAlphaChecks");
}






function delAlphaChecks() {
    'use strict';
    
    var checkedValue = null;
    var alphaChecks = document.getElementsByClassName('alphaCheckbox');
    var jobsAlphaModal = document.getElementById('jobs-alpha-modal');
    var resultPreview = document.getElementById('result-preview');
    
    //remove companies from result preview if they are unchecked

}