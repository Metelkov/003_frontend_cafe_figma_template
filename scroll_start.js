document.querySelector('.about__us-square').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'about__us-square':
        document.location.href = "#scroll__screen";
    break;
    case 'our__team-square':
    document.location.href = "#scroll__screen";
    break;
    case 'book__a-table-square':
        document.location.href = "#scroll__screen";
    break;
    case 'specialties-square':
        document.location.href = "#scroll__screen";
    break;
    case 'private-events-pictures-left-rectangle':
        document.location.href = "#scroll__screen";
    break;
    case 'private-events-pictures-right-rectangle':
        document.location.href = "#scroll__screen";
    break;
}
});

