/***************************** EVENTOS EN EL DOM *************************************************/
const producto_container = document.getElementById('producto_container');

//**************** Creacion de los productos en el dom de shop segun el stock que haya *********************
zapatillas.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML=`
    <img class="producto_img" src="${item.imagen}"></img>
    <h3 class="producto_nombre">${item.marca} ${item.modelo}</h3>
    <p class="producto_precio">$${item.precio}</p>
    <button type="button" class="producto_btn">Añadir al carrito</button>
`
    producto_container.appendChild(div);
});


//********************** Agrega productos al carrito **************************
producto_container.addEventListener('click',item =>{
    if(item.target.classList.contains("producto_btn")){
        //recuperamos el producto
        const producto = item.target.parentElement;
        //Verificar si queda stock del producto
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
        verificar_stock();
        //agregamos el producto al carrito en el DOM
        agregarHtml();
        //Da la cantidad de productos que hay en el carrito
        contar_productos();
        //Calcula el precio total de los productos
        calcular_total();
    }
})