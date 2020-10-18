document.querySelector('.delicious-menu-selector').addEventListener('click', function(event) {
    switch (event.target.innerText) {
    case 'PIZZA':
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="grid";
    break;
    case 'PASTA':
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="grid";
    break;
    case 'DESERT':
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="grid";
    break;
    case 'WINE':
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="grid";
    break;
    case 'BEER':
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="grid";
    break;
    case 'DRINKS':
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="grid";
    break;
    case 'SOUPE':
        document.getElementsByClassName('delicious-menu table-beer')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pizza')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-desert')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-wine')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-pasta')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-drinks')[0].style.display="none";
        document.getElementsByClassName('delicious-menu table-soupe')[0].style.display="grid";
    break;
    }
    });