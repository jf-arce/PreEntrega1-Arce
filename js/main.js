/*
1) Menu:
- Ver catalogo de productos
- Comprar producto
- Ver carrito // Terminar compra
- Terminar la compra (Imprime un ticket de compra con los productos a llevar y el monto total).

*/

const zapatillas=[
    {marca:"nike",modelo:"airforce", precio:50000,stock:30},
    {marca:"nike",modelo:"jordan", precio:60000,stock:30},
    {marca:"nike",modelo:"airmax", precio:38000,stock:30},
    {marca:"nike",modelo:"vapormax", precio:40000,stock:30},
    {marca:"nike",modelo:"uptempo", precio:45000,stock:30},
   
    {marca:"adidas",modelo:"galaxy6", precio:35000,stock:25},
    {marca:"adidas",modelo:"superstar",precio:25000,stock:25},
    {marca:"adidas",modelo:"forum",precio:30000,stock:25},
    {marca:"adidas",modelo:"stansmith",precio:40000,stock:25},

    {marca:"vans",modelo:"oldskool",precio:35000,stock:40},
    {marca:"vans",modelo:"era",precio:30000,stock:40},
    {marca:"vans",modelo:"sk8high",precio:38000,stock:40},

    {marca:"converse",modelo:"allstar", precio:35000,stock:50},
    {marca:"converse",modelo:"courtlandt",precio:30000,stock:50},
    {marca:"converse",modelo:"chuck taylor all star",precio:38000,stock:50},

    {marca:"dc",modelo:"midway", precio:40000,stock:20},
    {marca:"dc",modelo:"manual sd", precio:38000,stock:20},
    {marca:"dc",modelo:"kalisvulc", precio:35000,stock:20},
];

let carrito=[];

//Se muestra el catalogo
const catalogue=()=>{
    let marca=prompt("Ingrese marca:")
    let encontre=zapatillas.filter(product => product.marca===marca);
    let message = 'Catálogo:\n';
    
    encontre.forEach(product => {
        message+=`
            marca: ${product.marca}
            modelo: ${product.modelo}
            precio: ${product.precio}
        `
        alert(message);
     });
}

//ventas
const buy_product=()=>{
    let otroProd;
    while(otroProd!==0){
        let marca=prompt("Ingrese marca que desea comprar:");
        let modelo=prompt("Elija algun modelo modelo que desea comprar:")
        let encontre=zapatillas.find(product=> marca===product.marca && modelo===product.modelo);
        let message=`
        Producto:\n
        marca: ${encontre.marca}
        modelo: ${encontre.modelo}
        precio: ${encontre.precio}
        `
        let cantidad=parseInt(prompt(`${message}\nCuantos pares va a llevar?`))
        let message2=`Producto:\n
        marca: ${encontre.marca}
        modelo: ${encontre.modelo}
        pares: ${cantidad}
        precio: ${encontre.precio*cantidad}
        `
        let agregarCarrito=parseInt(prompt(`${message2}\nQuiere agregarlo al carrito Si=1 No=0`));
        if(agregarCarrito===1){
        carrito.push({
            marca:encontre.marca,
            modelo:encontre.modelo,
            precio:encontre.precio,
            cantidad:cantidad
        });
        otroProd=parseInt(prompt("Quiere agregar otro producto? Si=1 No=0"));
        }
    }
    
}

//carrito
const see_cart=()=>{
    //Muestra el carrito de compras
    let message="Carrito:\n";
    carrito.forEach(products=>{
        message+=`
            marca: ${products.marca}
            modelo: ${products.modelo}
            pares: ${products.cantidad}
            precio: ${products.precio*products.cantidad}
        `
        alert(message);
    })
    //
    let finish=parseInt(prompt("1--> Comprar todo\n2--> Seguir comprando\n3--> Vaciar Carrito"));
    if(finish===1){
        let montoTotal=0;
        carrito.forEach(prodCarrito=>{
            montoTotal+=prodCarrito.precio*prodCarrito.cantidad;//Monto total de todos los productos
        })
        let confirmarCompra=parseInt(prompt(`Su monto total a pagar es de ${montoTotal} pesos\n1-->Pagar\n0-->Cancelar`));
        if(confirmarCompra===1){
            carrito.forEach(prodCarrito=>{
                encontre=zapatillas.find(prodCatalogo=>prodCarrito.marca===prodCatalogo.marca && prodCarrito.modelo===prodCatalogo.modelo);
                encontre.stock-=prodCarrito.cantidad; //Actualiza el stock del catalogo
            })
            alert("Gracias por su compra!")
            carrito=[]; //Se reinicia el carrito
        }else{
            alert("Compra cancelada");
        }
    }else if(finish===3){
        alert("Sus productos elejidos han sido removidos");
        carrito=[];
    }
}


//menu
let option=prompt("Ingrese una opcion:\n1--> Ver catalogo\n2-->Comprar producto\n3-->Ver carrito\n4-->Salir");


while (option !== '4') { // Ejecutar el bucle hasta que el usuario seleccione la opción de salir (4)

    option = prompt("Ingrese una opcion:\n1--> Ver catalogo\n2-->Comprar producto\n3-->Ver carrito\n4-->Salir");

    switch (option) {
        case '1':
            catalogue();
            break;
        case '2':
            buy_product();
            break;
        case '3':
            if(carrito.some(elemento => true)){
                see_cart();
            }else{
                alert("El carrito esta vacio!");
            }
            break;
        case '4':
            break;
        default:
            alert("Opcion invalida");
            break;
    }
}

let message="Stock final del catalogo:\n"
zapatillas.forEach(product => {
    message+=`
        marca: ${product.marca}
        modelo: ${product.modelo}
        precio: ${product.precio}
        stock: ${product.stock}
    `
    alert(message);
 });

