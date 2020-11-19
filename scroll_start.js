document.querySelector('.about__us-square').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'about__us-square':
        document.location.href = "#start__scroll";
    break;
    case 'our__team-square':
    document.location.href = "#start__scroll";
    break;
    case 'book__a-table-square':
        document.location.href = "#start__scroll";
    break;
    case 'specialties-square':
        document.location.href = "#start__scroll";
    break;
    case 'private-events-pictures-left-rectangle':
        document.location.href = "#start__scroll";
    break;
    case 'private-events-pictures-right-rectangle':
        document.location.href = "#start__scroll";
    break;
}
});
