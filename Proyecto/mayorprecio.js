let dejson = localStorage.getItem("productostotal")
const productos = JSON.parse(dejson)

let cattest = []
const body = document.body




let listamayorprecio = productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1;
    }
    if (a.precio < b.precio) {
        return 1;

    }
    return 0

});



function imprimirmayor() {

    let idImprimir = document.getElementById("cardsmayor")

    listamayorprecio.forEach(e => {
        idImprimir.innerHTML += `
        <div class="card" id="cartas" style="width: 20rem;margin:20px;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="cards" style="width: 18.5rem;">
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${e.genero}</li>
                <li class="list-group-item">${e.banda}</li>
                <li class="list-group-item">${e.precio}</li>
                <a href="#" class="btn btn-dark" role="button" data-bs-toggle="button">Comprar</a>
            </ul>
        
            </div>
        </div>`
    })

}



console.log(listamayorprecio);

function estilo() {

    body.setAttribute("style", "background-color : gray")
    let carta = document.getElementsByClassName("card")
    for (const cards of carta) {
        cards.setAttribute("style", "background-color:black;width:20rem;margin:1rem;")
    }
    let lista = document.getElementsByClassName("cards")
    for (const val of lista) {
        val.setAttribute("style", "border-color:gray")
    }

    let list = document.getElementsByClassName("list-group-item")
    for (const val of list) {
        val.setAttribute("style", "background-color:black;color:white;border-color:gray")
    }

}

estilo()
imprimirmayor()