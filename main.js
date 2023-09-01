

const Producto = function(img,id,nombre,precio,stock){
    this.img = img;
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

let producto1 = new Producto("/img/ryzen 5.webp", 1, "ryzen 5",100000,10 )
let producto2 = new Producto("/img/ryzen 7.webp" ,2, "ryzen 7",210000,5 )
let producto3 = new Producto("/img/monitor lg.webp",3, "Monitor Lg",144000,10 )
let producto4 = new Producto("/img/parlante sony.webp ",4, "parlante sony",45000,8 )

let listaarray = [producto1,producto2,producto3,producto4]
let cart = JSON.parse(localStorage.getItem("Cart"))||[]
let container = document.getElementById("container1");

function comprar(id) {
    console.log(listaarray[id-1]);
    cart.push(listaarray[id-1])
    localStorage.setItem("Cart", JSON.stringify(cart));
}

function quitar(id){
    console.log(cart)
    cart.splice(id,1)
    localStorage.setItem("Cart",JSON.stringify(cart))
    console.log(cart)
    armarcarrito()
}
