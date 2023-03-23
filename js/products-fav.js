//**************** Creacion de los productos en el dom de destacados segun el stock que haya *********************

const swiper_wrapper = document.querySelector('.swiper-wrapper');
zapatillasDestacadas.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.classList.add('swiper-slide-active')
    div.innerHTML=`
    
    <div class="card-description producto">
        <img class="producto_img" src="${item.imagen}">
        <h4 class="card-title producto_nombre">${item.marca} ${item.modelo}</h4>
        <h5 class="card-precio producto_precio">$${item.precio}</h5>
        <button type="button" class="producto_btn">Añadir al carrito</button>
    </div>
`
    swiper_wrapper.appendChild(div);

    //********************** Agrega productos al carrito **************************

    const btn = div.querySelector('.producto_btn');
    btn.addEventListener('click',item =>{
        //recuperamos el producto
        const producto = item.target.parentElement;
        console.log(producto);
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
    })
});

