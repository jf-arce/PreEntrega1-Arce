let cleave = new Cleave('#num-cart', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        console.log(type);
        var tarjetaVisa = document.getElementById('tarjeta-visa');
        var tarjetaMastercard = document.getElementById('tarjeta-mastercard');
        var tarjetaAmex = document.getElementById('tarjeta-amex');
        switch (type) {
          case 'visa':
            tarjetaVisa.style.display = 'inline';
            tarjetaMastercard.style.display = 'none';
            tarjetaAmex.style.display = 'none';
            break;
          case 'mastercard':
            tarjetaVisa.style.display = 'none';
            tarjetaMastercard.style.display = 'inline';
            tarjetaAmex.style.display = 'none';
            break;
          case 'amex':
            tarjetaVisa.style.display = 'none';
            tarjetaMastercard.style.display = 'none';
            tarjetaAmex.style.display = 'inline';
            break;
          default:
            tarjetaVisa.style.display = 'none';
            tarjetaMastercard.style.display = 'none';
            tarjetaAmex.style.display = 'none';
            break;
        }
    }
});

const showCart= document.getElementById('show-cart');

const agregarProdcutos=()=>{
    cart.forEach(product=>{
        const li = document.createElement('li');
        li.classList.add('producto');
        li.innerHTML=`
        <img class="producto_img--cart" src="${product.imagen}"></img>
        <h3 class="producto_nombre">${product.nombre}</h3>
        <p class="producto_precio">${product.precio}</p>
        <p class="producto_cantidad">Cantidad: ${product.cantidad}</p
        `
        showCart.appendChild(li);
    })
}

agregarProdcutos();

/**************BOTON COMPRAR ***** */
const dataComprar = document.getElementById('data-comprar');

dataComprar.addEventListener('click',()=>{
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(prod =>{
        stock.then(stock=>{
            const productEncontrado= stock.find(stock=> stock.modelo === prod.nombre.split(" ")[1]);
            productEncontrado.stock -= prod.cantidad;
            console.log(stock);
        });
    })

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    Swal.fire({
        icon: 'success',
        title: 'Compra exitosa!',
        text: 'Muchas gracias por confiar en UrbanDrip',
    })
    setTimeout(() => {
        window.location.href = "../pages/shop.html";
    }, 2000);
})

