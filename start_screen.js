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

document.querySelector('.start__circle-facebook').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'facebook':
        document.location.href = "https://facebook.com";
    break;
    }
    });

document.querySelector('.start__circle-twiteer').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'circle__twiteer':
        document.location.href = "https://twiteer.com";
    break;
    }
    });

document.querySelector('.start__circle-instagramm').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'circle__instagramm':
        document.location.href = "https://instagramm.com";
    break;
    }
    });
 
document.querySelector('.start__button-book-table').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'Book table':
        document.location.href = "#book__a-table-block";
    break;
    }
    });

    document.querySelector('.start__button-explore').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'Explore':
        document.location.href = "#book__a-table-block";
    break;
    }
    });

document.querySelector('.start__circle-arrow-down').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'circle__arrow-down':
        document.location.href = "#book__a-table-block";
    break;
    }
    });