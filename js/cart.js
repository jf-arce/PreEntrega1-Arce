//Declaraciones
const cart__icon = document.getElementById('cart__icon');
const cart__modal= document.getElementById('cart__modal');
const btnCerrar = document.getElementsByClassName('cerrar')[0];
const listaCarrito= document.getElementById("lista-carrito");
const contadorProducto=document.getElementById('contador-productos');
const producto_eliminar = document.getElementById('producto_eliminar');
const total_pagar= document.getElementById('total-pagar');
const btn_vaciarCarrito= document.getElementById('btn-vaciarCarrito');

/******************** Animaciones de abrir y cerrar el carrito *******************************/
cart__icon.addEventListener('click',()=>{
    cart__modal.style.display = 'block';
    cart__modal.classList.add('animate__animated', 'animate__slideInDown');
})

btnCerrar.addEventListener('click', () => {
    cart__modal.classList.remove('animate__slideInDown');
    cart__modal.classList.add('animate__backOutUp');
    setTimeout(() => {
        cart__modal.classList.remove('animate__slideInDown', 'animate__backOutUp');
        cart__modal.style.display = 'none';
    }, 3000); // Tiempo suficiente para que la animación termine
});

/*************************** FUNCIONES CARRITO ***********************************************/

/**Muestra los productos que haya en el carrito**/
const agregarHtml=()=>{
    listaCarrito.innerHTML='';
    cart.forEach(product=>{
        const li = document.createElement('li');
        li.classList.add('producto');
        li.innerHTML=`
        <img class="producto_img--cart" src="${product.imagen}"></img>
        <h3 class="producto_nombre">${product.nombre}</h3>
        <p class="producto_precio">${product.precio}</p>
        <p class="producto_cantidad">Cantidad: ${product.cantidad}</p
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" "width="20" height="20" fill="currentColor" class="bi bi-trash producto_eliminar" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </div>
        `
        listaCarrito.appendChild(li);
    })
}
//Contador de la cantidad de productos que hay en el carrito
const contar_productos =()=>{
    const totalProductos = cart.reduce((total, prod) => total + prod.cantidad, 0);
    contadorProducto.textContent=totalProductos;
}

//Caluclar total a pagar de todos los productos
const calcular_total=()=>{
    const totalCarrito = cart.reduce((total, prod) => total + (parseInt(prod.precio.substring(1))*prod.cantidad), 0);
    total_pagar.textContent=totalCarrito;
}

/***************************** EVENTOS DEL DOM *************************************************/

//verifica si hay productos en el localStorage del carrito y devuelve el carrito con los productos o vacio.
let cart = JSON.parse(localStorage.getItem('cart')) || [];
agregarHtml();
contar_productos();
calcular_total();

//Producto_container esta declarada en stock.js. 
producto_container.addEventListener('click',item =>{
    if(item.target.classList.contains("producto_btn")){
        //recuperamos el producto
        const producto = item.target.parentElement;
        const infoProduct = {
            cantidad:1,
            imagen: producto.querySelector('.producto_img').src,
            nombre: producto.querySelector('.producto_nombre').textContent,
            precio: producto.querySelector('.producto_precio').textContent,
        }

        //Si el producto elegido ya existe entonces aumenta la cantidad, de lo contrario se pushea normal
        const existe = cart.some(producto=> producto.nombre === infoProduct.nombre);
        if(existe){
            const index = cart.findIndex(producto=> producto.nombre === infoProduct.nombre);
            cart[index].cantidad++;
            localStorage.setItem('cart',JSON.stringify(cart));
        }else{
            //Se pushea el producto al carrito local y se guarda en el localStorage
            cart.push(infoProduct);
            localStorage.setItem('cart',JSON.stringify(cart));
        }
        //agregamos el producto al carrito en el DOM
        agregarHtml();
        //Da la cantidad de productos que hay en el carrito
        contar_productos();
        //Calcula el precio total de los productos
        calcular_total();
    }
})

//eliminar producto
listaCarrito.addEventListener("click",item=>{

    if(item.target.classList.contains("producto_eliminar")){
        //recuperamos el producto
        const producto = item.target.parentElement;
        const nombre = producto.querySelector('h3').textContent;
        //Se guardan los productos que no tienen el nombre del producto que queremos eliminar
        const newlist = cart.filter(product => product.nombre !== nombre);
        console.log(newlist);
        //igualamaos el carrito al nuevo arreglo sin el producto eliminado
        cart=newlist;
        localStorage.setItem('cart',JSON.stringify(cart));
        //agregamos otra vez los productos al dom del carrito pero con la nueva lista y contamos otra vez los productos
        agregarHtml();
        contar_productos();
        calcular_total();
    }
});

/*Boton vaciar carrito*/
btn_vaciarCarrito.addEventListener('click',()=>{
    cart=[];
    localStorage.setItem('cart',JSON.stringify(cart));
    agregarHtml();
    contar_productos();
    calcular_total();
})