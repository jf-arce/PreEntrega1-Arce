//**************** Creacion de los productos en el dom de destacados segun el stock que haya *********************

const swiper_wrapper = document.querySelector('.swiper-wrapper');
zapatillasDestacadas.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.classList.add('swiper-slide-active')
    div.innerHTML=`
    <img src="${item.imagen}">
    <div class="card-description producto">
        <div class="card-title">
            <h4>${item.marca} ${item.modelo}</h4>
        </div>
        <div class="card-precio">
            <h5>$${item.precio}</h5>
        </div>
        <a class="card-link" href="./pages/shop.html">
            <button type="button" class="producto_btn">Ver Producto</button>
        </a>
    </div>
`
    swiper_wrapper.appendChild(div);
});