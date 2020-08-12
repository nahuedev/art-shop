const productos=[
    {
        'id_producto':'01',
        'nombre_producto':'Arteeeee-Loco',
        'precio':100,
        'img_prod':'img/ilustracion-1.jpeg'
    },
    {
        'id_producto':'02',
        'nombre_producto':'Arteeeee-Loco',
        'precio':200,
        'img_prod':'img/ilustracion-2.jpeg'
    },
    {
        'id_producto':'03',
        'nombre_producto':'Arteeeee-Loco',
        'precio':400,
        'img_prod':'img/ilustracion-3.jpeg'
    },


    {
        'id_producto':'02',
        'nombre_producto':'Arteeeee-Loco',
        'precio':200,
        'img_prod':'img/ilustracion-4.jpeg'
    },
    {
        'id_producto':'02',
        'nombre_producto':'Arteeeee-Loco',
        'precio':200,
        'img_prod':'img/ilustracion-5.jpeg'
    },
    {
        'id_producto':'02',
        'nombre_producto':'Arteeeee-Loco',
        'precio':200,
        'img_prod':'img/ilustracion-6.png'
    }

    

]


let listaProductos=document.getElementById('card-producto')
let heart=listaProductos

// pasar a funcion
for(i=0;i< productos.length;i++){
    let img=productos[i].img_prod
    let nombreProd= productos[i].nombre_producto
    let precio=productos[i].precio
    
    
    let div = document.createElement('div')
        div.classList.add('content-prod')
   
     div.innerHTML=`
                <img src="${img}" alt="">
                <div id ='prod-info' class="prod-info">    
                <h2 id="nombre-prod">${nombreProd}</h2>
                <p id="precio-prod">Precio:${precio}</p>
                <i id ='favorito' class="fas fa-heart"></i>
                <button class="agregar-carrito">Agregar al carrito</button>
                
                </div>
                
               
    ` 


        listaProductos.appendChild(div)
    
}

/* interecacion con el usuario */

 listaProductos.addEventListener('click',agregarCarro)

 heart.addEventListener('click',addFav)



function agregarCarro(e){
    e.preventDefault()
     if (e.target.classList.contains('agregar-carrito')){
        const articulo = e.target.parentElement.parentElement
        
       console.log('agregando')
    }

    
}

function addFav(e){
    e.preventDefault()
    if (e.target.classList.contains('fa-heart')){
       const favorito = e.target.parentElement.parentElement
       let corazon=favorito.querySelector('i')
       corazon.classList.toggle('red')
      
   }
}

