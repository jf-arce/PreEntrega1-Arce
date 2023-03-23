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
    }, 1000); // Tiempo suficiente para que la animación termine
});

/****************************** FUNCIONES CARRITO ***********************************************/

/** MOSTRAR PRODUCTOS que haya en el carrito**/
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
            <i class="fa-regular fa-trash-can producto_eliminar"></i>
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

//Calcular TOTAL a pagar de todos los productos
const calcular_total=()=>{
    const totalCarrito = cart.reduce((total, prod) => total + (parseInt(prod.precio.substring(1))*prod.cantidad), 0);
    total_pagar.textContent=totalCarrito;
}

//verificar stock
const verificar_stock =()=>{
    for (let i = 0; i < cart.length; i++) {

        const prod_stock=zapatillas.find(producto=>producto.modelo===cart[i].nombre.split(" ")[1]);
        
        if(prod_stock.stock<cart[i].cantidad){
            alert(`No quedan mas ${cart[i].nombre}, Stock insuficiente!`);
            cart[i].cantidad--;
            localStorage.setItem('cart',JSON.stringify(cart));
        }
    }
}


//verifica si hay productos en el localStorage del carrito y devuelve el carrito con los productos o vacio.
let cart = JSON.parse(localStorage.getItem('cart')) || [];
agregarHtml();
contar_productos();
calcular_total();


//eliminar producto
listaCarrito.addEventListener("click",item=>{
    if(item.target.classList.contains("producto_eliminar")){
        //recuperamos el producto
        const producto = item.target.parentElement;
        const nombre = producto.querySelector('h3').textContent;
        //Para que cuando haga click vaya sacando de a 1 los productos hasta que no quede nada y lo elimine del carrito
        const productoCarrito= cart.find(prod=>prod.nombre===nombre);
        if(productoCarrito.cantidad>1){
            productoCarrito.cantidad--;
            localStorage.setItem('cart',JSON.stringify(cart));
            agregarHtml();
            contar_productos();
            calcular_total();
        }else{
            //Se guardan los productos que no tienen el nombre del producto que queremos eliminar
            const newlist = cart.filter(product => product.nombre !== nombre);
            //igualamaos el carrito al nuevo arreglo sin el producto eliminado
            cart=newlist;
            localStorage.setItem('cart',JSON.stringify(cart));
            //agregamos otra vez los productos al dom del carrito pero con la nueva lista y contamos otra vez los productos
            agregarHtml();
            contar_productos();
            calcular_total();
        }
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
