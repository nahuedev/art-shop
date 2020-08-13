const productos = [
  {
    id_producto: "01",
    nombre_producto: "Arteeeee-Loco",
    precio: 100,
    img_prod: "img/ilustracion-1.jpeg",
  },
  {
    id_producto: "02",
    nombre_producto: "Arteeeee-Loco",
    precio: 200,
    img_prod: "img/ilustracion-2.jpeg",
  },
  {
    id_producto: "03",
    nombre_producto: "Arteeeee-Loco",
    precio: 400,
    img_prod: "img/ilustracion-3.jpeg",
  },

  {
    id_producto: "04",
    nombre_producto: "Arteeeee-Loco",
    precio: 200,
    img_prod: "img/ilustracion-4.jpeg",
  },
  {
    id_producto: "05",
    nombre_producto: "Arteeeee-Loco",
    precio: 200,
    img_prod: "img/ilustracion-5.jpeg",
  },
  {
    id_producto: "06",
    nombre_producto: "Arteeeee-Loco",
    precio: 200,
    img_prod: "img/ilustracion-6.png",
  },
];

let listaProductos = document.getElementById("card-producto");
let heart = listaProductos;
const carrito = document.getElementById("carrito");

// pasar a funcion
for (i = 0; i < productos.length; i++) {
  let img = productos[i].img_prod;
  let nombreProd = productos[i].nombre_producto;
  let precio = productos[i].precio;
  let id_producto = productos[i].id_producto;

  let div = document.createElement("div");
  div.classList.add("content-prod");

  div.innerHTML = `
                <img src="${img}" alt="">
                <div id ='prod-info' class="prod-info">    
                <h2 class="nombre-prod">${nombreProd}</h2>
                <p class="precio-prod">$${precio}</p>
                <i id ='favorito' class="fas fa-heart"></i>
                <button class="agregar-carrito" data-id="${id_producto}">Agregar al carrito</button>
                </div>
                
               
    `;

  listaProductos.appendChild(div);
}

/* interecacion con el usuario */

listaProductos.addEventListener("click", agregarCarro);

heart.addEventListener("click", addFav);

carrito.addEventListener("click", mostrarLista);

function agregarCarro(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const articulo = e.target.parentElement.parentElement;

    infoArticulo(articulo);
    console.log("agregando");
  }
}

function infoArticulo(articulo) {
  const data = {
    imagen: articulo.querySelector("img").src,
    titulo: articulo.querySelector("h2").textContent,
    precio: articulo.querySelector("p").textContent,
    id_producto: articulo.querySelector("button").getAttribute("data-id"),
  };

  insertarCarrito(data);
  console.log(data);
  /* insertarCarrito(data) */
}

function addFav(e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-heart")) {
    const favorito = e.target.parentElement.parentElement;
    let corazon = favorito.querySelector("i");
    corazon.classList.toggle("red");
  }
}

function mostrarLista(e) {
  e.preventDefault();
  let mostrarlista = document.getElementById("lista-carrito");
  mostrarlista.classList.toggle("off");
  console.log("mostrar");
}

function insertarCarrito(data) {
  let html = "";
  let vaciar=document.getElementById('vaciar-carro')
  let div = document.createElement("div");
  div.classList.add("articulo");

  html = `
     <img src="${data.imagen}" alt="">
     <div class="art-info">
         <p>${data.titulo}</p>
         <p>${data.precio}</p>
         <span><i class="fas fa-trash"></i></span>
     </div>
     
     `;
  div.innerHTML = html;
  document.getElementById("lista-carrito").insertBefore(div,vaciar)

  guardarLocalStorage(data)

}

function guardarLocalStorage(data){
    let dataLS
    dataLS = obtenerDataLocalStorage()
    dataLS.push(data)
    localStorage.setItem('dataLS',JSON.stringify(dataLS))

}

function obtenerDataLocalStorage(){
    let dataLS;
    if(localStorage.getItem('dataLS') === null){
        dataLS=[]
    } else {
        dataLS =JSON.parse(localStorage.getItem('dataLS'))
    }
    return dataLS

}