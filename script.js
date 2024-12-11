let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1'

    )]
    for(var i = currentItem1; i< currentItem1 + 4; i++ ) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }

}


let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2'

    )]
    for(var i = currentItem2; i< currentItem2 + 4; i++ ) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none'
    }

}



let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3'

    )]
    for(var i = currentItem3; i< currentItem3 + 4; i++ ) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length) {
        loadMoreBtn1.style.display = 'none'
    }

}







//Variable que mantiene el estado visible del carrito
var carritoVisible = false;

//Esperamos que todos los elementos de la página se carguen para continuar con el script
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}


function ready(){
    //Agregamos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(vari=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem [i];
        button.addEventListener('click', eliminarItemCarrito);
    }

    //Agrego funcinalidad al boton resta cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i < botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

    //Agrego funcinalidad a los botones agregar al carrito
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click',botonesAgregarAlCarritoClicked);
    }

    //Agregar funcionalidad al boton pagar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    //Actualizamos el total del carrito una vez que hemos eliminado un item
    actualizarTotalCarrito();

    //La siguiente funcion controla si hay elementos en el carrito una vez que se elimino
    //si no hay debo ocultar el carrito
    ocultarCarrito();
}

//Actualiza el Total del carrito 
function ActualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    //recorremos cada elemento del carrito para actulizar el total
    for(var i=0; i < carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
        //quitamos el simbolo peso y el punto de milesimo
        var precio = parseFloat(precioElemento.innerText.replace('$',''.replace('.','')));
        console.log()
    }
}

function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity='0';
        carritoVisible = false;

        //ahora maximizo el contenedor de los elementos
        var items = document.getElementsByClassName('contenedor-items')[0];
        items.style.while = '100%';
            
        }
    }

    //Aumento en uno la cantidad del elemento seleccionado
    function sumarCantidad(event){
        var buttonClicked = event.target;
        var selector = buttonClicked.parentElement;
        var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
        console.log(cantidadActual);
        cantidadActual++;
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        cantidadActual--;

        //Controlamos que no sea menor que 1
        if(cantidadActual>=1){
            selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
            //Actualizamos el total
        ActualizarTotalCarrito();

        }

        
    }

    function agregarAlCarritoClicked(event){
        var button = event.target;
        var item = button.parentElement;
        var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
        var precio = item.getElementsByClassName('img-item')[0].src;
        console.log(imagenSrc);

    //La siguiente funcion agrega el elemento al carrito. Le mando por parámetros los valores
    agregarItemAlCarrito(titulo,precio, imagenSrc);

    //Hacemos visible el carrito cuando agrega por primera vez
    hacerVibleCarrito();
    }

    function agregarItemAlCarrito(titulo, precio, imagenSrc){

    }
        var item = document.createElement('div');
        itemCarrito = document.getElementsByClassName('carrito-item-titulo');
        for(var i=0; i < nombresItemsCarrito.length;i++){
        
    
//vamos a controlar que el item que esta ingresado no se encuentra ya en el carrito.
var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
for(var i=0; i < nombresItemsCarrito.length;i++){
    if(nombresItemsCarrito[i].innerText==titulo){
        alert("El item ya se encuentra en el carrito");
        return;


    }
}    


var itemCarritoContenido = `
            <img src="Leon.jpeg" alt="" width="80px">
            <div class="Carrito-item-detalles">
            <span class="Carrito-item-titulo">Leon</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="Carrito-item-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
        <span class="Carrito-item-precio">$41.990</span>
            </div>
            <i class="fa-solid fa-trash"></i>

            <div class="Carrito-item">
                <img src="${imagenSrc}" alt="" width="80px">
                <div class="Carrito-item-detalles">
                <span class="Carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="2" class="Carrito-item-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
                <i class="fa-solid fa-trash"></i>
                </div>
                <span class="btn-eliminar">
                </span>
                </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemCarrito.append(item);

    //Agregamos la funcionalidad eliminar del nuevo item
    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click',eliminarItemCarrito);

    //Agregamos la funcionalidad de sumar del nuevo item
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad') [0];
    botonSumarCantidad.addEventListener('click', sumarCantidad);


    //Agregamos la funcionalidad de sumar del nuevo item
    var botonRestaCantidad = item.getElementsByClassName('restar-cantidad') [0];
    botonRestarCantidad.addEventListener('click', restarCantidad);
     

 
}

function pagarClicked(event){
    alert("Gracias por su compra");
    //elimino todos los elementos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();


    //Funcion que oculta el carrito
    ocultarCarrito();
}

function hacerVibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style = '1';

    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

    