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
const catalogue=(marca)=>{
    let encontre=zapatillas.filter(product => product.marca===marca.toLowerCase());
    while(encontre.length === 0){
        alert("La marca no existe por favor ingrese una marca valida");
        marca=prompt("Ingrese marca:");
        encontre=zapatillas.filter(product => product.marca===marca.toLowerCase());
    }
    let message = 'Catálogo:\n';
    
    encontre.forEach(product => {
        message+=`
            marca: ${product.marca}
            modelo: ${product.modelo}
            precio: $${product.precio}
            stock: ${product.stock}
        `
        alert(message);
     });
}

//Vuelve a poner los productos del carrito al catalogo.
const devolver_productos=()=>{
    carrito.forEach(prodCarrito=>{
        encontre=zapatillas.find(prodCatalogo=>prodCarrito.marca===prodCatalogo.marca && prodCarrito.modelo===prodCatalogo.modelo);
        encontre.stock+=prodCarrito.cantidad; //Actualiza el stock del catalogo 
    });
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
            precio: $${products.precio*products.cantidad}
        `
        alert(message);
    })
    
    let finish=parseInt(prompt("1--> Comprar todo\n2--> Seguir comprando\n3--> Vaciar Carrito"));
    terminar_compra(finish);
}

const terminar_compra=(finish)=>{
    if(finish===1){
        let montoTotal=0;
        carrito.forEach(prodCarrito=>{
            montoTotal+=prodCarrito.precio*prodCarrito.cantidad;//Monto total de todos los productos
        })
        let confirmarCompra=parseInt(prompt(`Su monto total a pagar es de $${montoTotal}\n1-->Pagar\n0-->Cancelar`));
        if(confirmarCompra===1){
            alert("Gracias por su compra!")
            carrito=[]; //Se reinicia el carrito
        }else{
            devolver_productos();
            alert("Compra cancelada");
            carrito=[]; //Se reinicia el carrito
        }
    }else if(finish===3){
        alert("Sus productos elejidos han sido removidos");
        devolver_productos();
        carrito=[];
    }
}

//Programa principal

let option;

//menu
while (option !== '4') { // Ejecutar el bucle hasta que el usuario seleccione la opción de salir (4)

    option = prompt("Ingrese una opcion:\n1--> Ver catalogo\n2-->Comprar producto\n3-->Ver carrito\n4-->Salir");

    switch (option) {
        case '1':
            let marca=prompt("Ingrese marca:");
            //Verificacion
            if(zapatillas.some(elemento => marca)){
                catalogue(marca);
            }else{
                while(zapatillas.some(elemento => marca)){

                }
                alert("La marca no existe! Intente de nuevo");
                marca=prompt("Ingrese marca:");
            }
            
            break;
        case '2':
            //ventas
            let otroProd;
            while(otroProd!==0){
                let marca=prompt("Ingrese marca que desea comprar:");
                let modelo=prompt("Elija algun modelo modelo que desea comprar:");
                let encontre=zapatillas.find(product=> marca.toLowerCase()===product.marca && modelo.toLowerCase()===product.modelo);
                while(encontre===undefined){
                    alert("La marca o modelo no existe por favor ingrese de nuevo los datos");
                    marca=prompt("Ingrese marca que desea comprar:");
                    modelo=prompt("Elija algun modelo modelo que desea comprar:");
                    encontre=zapatillas.find(product=> marca.toLowerCase()===product.marca && modelo.toLowerCase()===product.modelo);
                }
                let message=`
                Producto:\n
                marca: ${encontre.marca}
                modelo: ${encontre.modelo}
                precio: $${encontre.precio}
                `
                let cantidad=parseInt(prompt(`${message}\nCuantos pares va a llevar?`))
                if(encontre.stock >= cantidad){
                    encontre.stock-=cantidad; //Actualiza el stock del catalogo
                    let message2=`Producto:\n
                    marca: ${encontre.marca}
                    modelo: ${encontre.modelo}
                    pares: ${cantidad}
                    precio: $${encontre.precio*cantidad}
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
                }else{
                    alert(`No hay stock disponible para esa cantidad\nQuedan: ${encontre.stock} pares`);
                }
                
            }
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
