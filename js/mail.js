const adminEmails = [
    "mail@gmail.com",
    "mail2@gmail.com",
    "mail3@gmail.com",
    "mai4l@gmail.com",
    "DevoStareMoltoCalmo@alessioscusa.com"
]
let loggedIn = false;

while(!loggedIn) {

    const usrLogin = prompt("Inserisci l'email per l'accesso.");

    for(let k = 0; k < adminEmails.length; k++){
    
        if (usrLogin == adminEmails[k]){
            loggedIn = true;
            alert("Sei entrato nel sistema.");
        }
    
    }
    
    if (!loggedIn) {
        alert("Hai inserito un'email errata.");
    }

}

