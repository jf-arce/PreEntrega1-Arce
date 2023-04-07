const itemFilter = document.querySelectorAll('.item__filter');
const precioMin = document.getElementById('precio-min');
const precioMax = document.getElementById('precio-max');

let marcasSeleccionadas=[];

Array.from(itemFilter).forEach(item =>{
    const input = item.querySelector('input'); //guardamos el input
    input.addEventListener('change',() =>{
        if(input.name === 'marca'){
            filtrarMarca(input);
        }
        if (input.name === 'precio'){
            filtrarPrecio();  
        }
    });
})

const filtrarMarca =(input)=>{
    //Si se el input fue seleccionado
    if(input.checked){
        value = input.value;
        marcasSeleccionadas.push(input.value);
        //Se vuelve a filtrar por marca
        filtrarPrecio();  
    }else{
        //Si se deselecciono el input
        const index = marcasSeleccionadas.indexOf(input.value);
        if (index !== -1) {
            marcasSeleccionadas.splice(index, 1); // Elimina la marca deseleccionada del array
        }
        //Se vuelve a filtrar por marca
        filtrarPrecio();  
    }
}

const filtrarPrecio = () =>{
    stock.then(()=>{
        const productos = producto_container.querySelectorAll('.producto'); //guardamos una Nodelist de todos los productos
        const arrayProductos = Array.from(productos); // Convertimos la NodeList en un arreglo

        arrayProductos.forEach(prod => { //Recorremos el arreglo de productos
            const prodPrecio= prod.querySelector('p').textContent.substring(1); //guardamos el precio del producto
            const precioMinValue = parseFloat(precioMin.value); //guardamos el precio minimo que se ingreso
            const precioMaxValue = parseFloat(precioMax.value); //guardamos el precio maximo que se ingreso
            const nombreProd= prod.querySelector('h3').textContent.split(' ')[0]; //guardamos el nombre del producto
            
            //SI NO SELECCIONO MARCA
            if(marcasSeleccionadas.length===0) {
                // Si el precio es menor que el valor minimo ingresado O si el precio es mayor que el valor maximo ingresado => SE OCULTA EL PRODUCTO
                //De lo contrario se muestra
                prodPrecio < precioMinValue || prodPrecio > precioMaxValue ? prod.classList.add('ocultar') : prod.classList.remove('ocultar');
            }else{
                //SI SELECCIONO ALGUNA MARCA
                /* Si el precio es menor que el valor minimo ingresado O si el precio es mayor que el valor maximo ingresado 
                 O si marcasSeleccionadas no incluye el nombre seleccionado => SE OCULTA EL PRODUCTO 
                De lo contrario se muestra*/
                if (prodPrecio < precioMinValue || prodPrecio > precioMaxValue || !marcasSeleccionadas.includes(nombreProd)) {
                    prod.classList.add('ocultar');
                } else {
                    prod.classList.remove('ocultar');
                }
            }
        });
    });
};