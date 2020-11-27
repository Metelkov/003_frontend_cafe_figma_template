document.querySelector('.contact-planing-button').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'contact-planing-button':
        if(document.getElementById("contact-planing-name").value == '')
        {alert("The \"Name\" field cannot be empty");}

        if(document.getElementById("contact-planing-email").value == '')
        {alert("The \"Email\" field cannot be empty");}

        if(document.getElementById("contact-planing-phone").value == '')
        {alert("The \"Phone\" field cannot be empty");}

        if(document.getElementById("contact-planing-message").value == '')
        {alert("The \"Message\" field cannot be empty");}
    break;
}
});