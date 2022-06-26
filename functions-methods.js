// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

let email1 = "n.eeken@novi-education.nl";
let email2 = "t.mellink@novi.nl";
let email3 = "a.wiersma@outlook.com";

function getEmailDomain(emailadres){
    const domeinnaam = emailadres.split("@");
    return domeinnaam[1];
}

console.log(getEmailDomain(email1));
console.log(getEmailDomain(email2));
console.log(getEmailDomain(email3));

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
const email4 = "novi.nlaapjesk@outlook.com"

function typeOfEmail(email){
    let emailType = " ";
if (email.includes("novi-education.nl")){
    emailType = "Student"}
else if (email.includes("outlook.com")) {
    emailType = "Extern"}
else if (email.includes("outlook.com") && email.includes("novi.nl") ) {
    emailType = "Extern"}
// is dit de juiste oplossing?
else if (email.includes("novi.nl")) {
    emailType = "Medewerker"}
else {
    emailType = "onbekend"
}
    return emailType
}

console.log(typeOfEmail(email1));
console.log(typeOfEmail(email2));
console.log(typeOfEmail(email4));
console.log(typeOfEmail(email3));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const email5 = "n.eeken@novi.nl"
const email6 = "tessmellink@novi.nl"
const email7 = "n.eekenanovi.nl"
const email8 = "n.eeken@novinl."
const email9 = "tessmellink@novi,nl"

function checkEmailValidity(email){
    let boolean = true
    if (email.includes("@") && !email.includes(",") && email.substring(email.length -1) !== "."){
//  is email.substring(email.length -1) !== "." correct?

        boolean = true
    }
    else { boolean = false
    }

    return boolean
}

console.log(checkEmailValidity(email5))
console.log(checkEmailValidity(email6))
console.log(checkEmailValidity(email7))
console.log(checkEmailValidity(email8))
console.log(checkEmailValidity(email9))