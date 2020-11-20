document.querySelector('.start__menu').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'HOME':
    break;
    case 'ABOUT':
        document.location.href = "#about__us";
    break;
    case 'TEAM':
        document.location.href = "#our__team-square";
    break;
    case 'BOOKING':
        document.location.href = "#book__a-table-block";
    break;
    case 'MENU':
        document.location.href = "#delicious-menu-block";
    break;
    case 'GALERIE':
        document.location.href = "#private-events-gallery";
    break;
    case 'EVENTS':
        document.location.href = "#private-events";
    break;
    case 'CONTAKTS':
        document.location.href = "#contact-block";
    break;
    }
    });

document.querySelector('.start').addEventListener('click', function(event) {
    switch (event.target.className) {
    case 'start__circle-facebook':
        document.location.href = "https://facebook.com";
    break;
    case 'start__circle-twiteer':
        document.location.href = "https://twiteer.com";
    break;
    case 'start__circle-instagramm':
        document.location.href = "https://instagramm.com";
    break;
    case 'start__circle-arrow-down':
        document.location.href = "#book__a-table-block";
    break;
    
    case 'start__button-book-table':
        document.location.href = "#book__a-table-block";
    break;
    case 'start__button-explore':
        document.location.href = "#delicious-menu-block";
    break;
    }
    });