function armarcarrito(){
    let container1 = document.getElementById("container1");
    let cart1= JSON.parse(localStorage.getItem("Cart"))||[]
    let indice = 0 ;

    container1.innerHTML = ""
    
    cart1.forEach(producto => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `
            <div class="card cardcarrito col-6 mx-auto" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.precio}</p>
                    <a class="btn btn-primary boton1" onclick="quitar(${indice})">Borrar producto</a>
                </div>
            </div>`;
        container1.appendChild(newCard);
        indice = indice + 1;
    });

}

armarcarrito()
