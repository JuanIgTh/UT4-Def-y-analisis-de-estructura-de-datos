// Contants amb les referencies als elements HTML
const listTag = document.querySelector('#figures-list');
const priceTag = document.querySelector('#filter-price');
const priceMinTag = document.querySelector('#filter-min-price');
const btnFiltrarTag = document.getElementById("btn-filter");

let figuresList = [];

// TODO:Petició asíncona per recuperar les figures
function getFigures() {
    fetch('./data/star-wars-figures.json')
        .then(response => response.json())
        .then({
            figuresList = data;
            printFigures(data);
        });
}


// TODO:Crea les cards HTML de cada figura 
function printFigures(listJSON) {
        listTag.innerHTML = "";
        listJSON.forEach(figure => {
            listTag.innerHTML += `
                <article class="card">
                    <img src="./img/${figure.photo}" alt="">
                    <h3>${figure.name}</h3>
                    <span>${figure.price}€</span>
                    <div class="favorite">
                        <i class="fas fa-heart"></i>
                    </div>
                </article>
            `;
        });
        setFavourites();
}

// TODO: Intercanvia el icone de favorit
function setFavourites() {
    const favouriteFigures = document.querySelectorAll('.fa-heart');
    favouriteFigures.forEach(e => {
        e.addEventListener("click", function() {
            alert("Has elegido un favorito");
            this.classList.toggle("on");
        });
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////7
// TODO: Filtra les figures per preu i les ordena
function filterFigures() {
  
}

/*
// Filtre amb programació funcional
function filterFigures() {
    let list =[];
    for (let figure of figuresList){
        // El valor de la figura debe estar entre el mínimo y el máximo especificado
        if (figure.price>=priceMinTag.value && figure.price<=priceTag.value ){
            list.push(figure);
        }
    }
    if (list.length == 0) {
        listTag.innerHTML = "No hay figuras que coincidan con el filtro";
    } else {
        printFigures(list);
    }
}
*/

// Funció inicial de càrrega de la página
function init() {
    getFigures();
    btnFiltrarTag.addEventListener("click", filterFigures);
}
init();