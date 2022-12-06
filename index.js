'use strict';

/*
 *  APELLIDOS
 */

let carritoDeCompra = new Carrito();

let arrayProductos = [
    {
        id: 1,
        nombre: "Remera Nike blanca",
        descripcion: "Remera Blanca Nike, hecha 100% de algodón, fresca para este verano.",
        precio: 2000,
        imagen: "remera1.jpg",
        categoria: "remeras",
    },
    {
        id: 2,
        nombre: "Remera",
        descripcion: "Nueva Remera Roja Nike, hecha a base de tela suave, y antitranspirante.",
        precio: 1800,
        imagen: "remera2.jpg",
        categoria: "remeras",
    },
    {
        id: 3,
        nombre: "Pantalon Nike Negro",
        descripcion: "Pantalon Nike Negro deportivo, y achupinado en la parte baja de la pierna.",
        precio: 3200,
        imagen: "pantalon1.jpg",
        categoria: "pantalones",
    },
    {
        id: 4,
        nombre: "Pantalon Nike Gris",
        descripcion: "Pantalon Nike Gris deportivo de tela muy suave, elástico y flexible.",
        precio: 3000,
        imagen: "pantalon2.jpg",
        categoria: "pantalones",
    },
    {
        id: 5,
        nombre: "Zapatillas Blancas",
        descripcion: "Zapatillas Nike Blancas con camara de aire, y plantilla adaptable al pie.",
        precio: 8000,
        imagen: "zapatillas1.jpg",
        categoria: "zapatillas",
    },
    {
        id: 6,
        nombre: "Zapatillas Nike Negras",
        descripcion: "Zapatillas Nike Negras deportivas para running, hecho de tela.",
        precio: 11000,
        imagen: "zapatillas2.jpg",
        categoria: "zapatillas",
    },
];

let contenedorProducto = document.querySelector("#productos")

arrayProductos.forEach((p)=>{
    contenedorProducto.append(crearTarjetaProducto(p));
});




function crearTarjetaProducto (producto){

     //este es el div contenedor del card
     let divContenedorproducto = document.createElement("div");
     divContenedorproducto.className = "tarjetaContenedor";

      //esta imagen va dentro del div contenedor
      let imgCardProducto = document.createElement("img");
      imgCardProducto.className = "img"
      imgCardProducto.setAttribute("src", `${producto.imagen}`);
      imgCardProducto.setAttribute("alt", `remera`);
      
      //esta es el body del card
      let divCardBody = document.createElement("div");
     divCardBody.className = "bodyCard"

     //titulo del div card-body - nombre
     let tituloCardBody = document.createElement("h3");
     tituloCardBody.className = "tituloCardBody"
     tituloCardBody.innerText = `${producto.nombre}`

     //descripcion del producto
     let descriptCardBody = document.createElement("p");
     descriptCardBody.className = "descripcion";
     descriptCardBody.innerText = `${producto.descripcion}`;

     let precioCardBody = document.createElement("p")
     precioCardBody.className = "precio";
     precioCardBody.innerText = `$ ${producto.precio}`

     //nombre de la categoria
    let nombreProducto = document.createElement("p");
    nombreProducto.className = "nombre";
    nombreProducto.innerText = `${producto.categoria}`

      //boton de comprar producto
      let botonCompraCardBody = document.createElement("button");
      botonCompraCardBody.className = "boton";
      botonCompraCardBody.innerText = "comprar";

      botonCompraCardBody.setAttribute("onclick",`agregarCarrito(${producto.id})`)

      //card body
      
      divCardBody.append(tituloCardBody);
      divCardBody.append(descriptCardBody);
      divCardBody.append(precioCardBody);
      divCardBody.append(nombreProducto);
      divCardBody.append(botonCompraCardBody);

      //card
      divContenedorproducto.append(imgCardProducto);
      divContenedorproducto.append(divCardBody);

      //contenedor
      return divContenedorproducto;

}

function agregarCarrito(idProducto){
    carritoDeCompra.agregarProducto(buscarProducto(idProducto))
    mostrarCantidadDeProductos()
    mostrarCantidadDelPrecio()
}

function buscarProducto(idProducto){
 
    let miProducto;
    for (let i = 0; i < arrayProductos.length; i++) {
        if (arrayProductos[i].id == idProducto){
             miProducto = arrayProductos[i];
        }

    }
    return miProducto
}

function mostrarCantidadDeProductos(){
    document.querySelector("#cantidadProductos").innerText = `${carritoDeCompra.cantidadDeProductos()}`
    document.querySelector("#items").innerText = `${carritoDeCompra.cantidadDeProductos()}`
}

//Crear una funcion, llamar #cantidadTotalPrecio, Ponerle un innerText, Llama a carrito de compra, y carrito de compra mostrarPrecioTotalDeLaCompra.
function mostrarCantidadDelPrecio(){
    document.querySelector("#cantidadTotalPrecio").innerText = `${carritoDeCompra.mostrarPrecioTotalDeLaCompra()}` 
    document.querySelector("#total").innerText = `${carritoDeCompra.mostrarPrecioTotalDeLaCompra()}` 
}





document.querySelector("select").addEventListener("change", (e) => {
    /* Guardo el option elegido */

    let categoria = e.target.value;

    let filtrado = arrayProductos.filter((productos) => productos.categoria.includes(categoria));
    contenedorProducto.replaceChildren();

    if(categoria == "todas"){
        arrayProductos.forEach((p)=>{
            contenedorProducto.append(crearTarjetaProducto(p));
        });
    }

    filtrado.forEach((p)=>{
        contenedorProducto.append(crearTarjetaProducto(p));
    });
});

function cerrarCarrito(){
    document.querySelector("#modalCarrito").style.display = "none"
}

function abrirCarrito(){
    document.querySelector("#modalCarrito").style.display = "block"
}

