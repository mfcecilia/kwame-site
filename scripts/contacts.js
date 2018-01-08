/*
Create objects to store contact info
*/
function contactObj(first, last, email, company) {
    'use strict';
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.company = company;
}


/*
*
*
*XML http request for contractor contacts
*
*
*/
function getContacts(xml) {
    'use strict';
    var x, i, a, xmlDoc, contacts = [],
        first, last, email, company, position;
    
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("Worksheet")[0].getElementsByTagName("Row");
    
    console.log("START getContacts(xml)");
    
    a = 0;
    
    //fill array with company contacts
    for (i = 0; i < x.length; i++) {
        first = x[i].childNodes[1].textContent;
        last = x[i].childNodes[3].textContent;
        email = x[i].childNodes[5].textContent;
        company = x[i].childNodes[9].textContent;
        
        console.log("getContacts() " + i + " :");
        console.log("first name: " + first);
        console.log("last name: " + last);
        console.log("email: " + email);
        console.log("company: " + company);
        
        contacts[a] = new contactObj(first, last, email, company);
        
        a += 1;
    }

    console.log("x.length = " + x.length);
    
    console.log("contacts.length: " + contacts.length);
    
    console.log("END getContacts(xml)");
    
    return contacts;
}


/*
*
*
*parse contractor xml to get the contacts
*
*
*/
function loadContactsXML() {
    'use strict';
    var xmlhttp = new XMLHttpRequest();
    
    console.log("START loadContactsXML()");
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getContacts(this);
            console.log("loading xml doc");
        }
    };
    xmlhttp.open("GET", "files/contractors.xml", true);
    xmlhttp.send();
    
    console.log("END loadContactsXML()");
}