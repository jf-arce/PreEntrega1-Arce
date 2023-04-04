const lista__filtrados = document.querySelectorAll(".lista__filtrados");
const precio__filtrados = document.querySelector(".precio__filtrados");
const prodFiltrados=[];

const marcas=["nike","adidas","vans","converse","dc"];
const precios=["30000-40000","40000-50000","50000-60000"];

//mostrar filtros marca

marcas.forEach(marca=>{
    const li = document.createElement("li");
    li.classList.add("fitrado-item");
    li.innerHTML=`
    <li class="filtrado__item">
        <label for="${marca}">${marca}</label>
        <input type="checkbox" name="marca-nike" id="${marca}" value="${marca}">
    </li>`
    lista__filtrados[0].appendChild(li);
});
//Mostrar filtros precio
precios.forEach(precio=>{
    const li = document.createElement("li");
    li.classList.add("fitrado-item");
    li.innerHTML=`
    <li class="filtrado__item">
        <label for="${precio}">${precio}</label>
        <input type="checkbox" name="precio" id="${precio}" value="${precio}">
    </li>`
    lista__filtrados[1].appendChild(li);
});


/***************** CODIGO FILTRADO     *********** */
const filtradosItemsMarca = lista__filtrados[0].querySelectorAll(".filtrado__item");
const filtradosItemsPrecio = lista__filtrados[1].querySelectorAll(".filtrado__item");

stock.then(stock =>{
    /***************** filtrado por marca ************** */
    Array.from(filtradosItemsMarca).forEach(li=>{
        const checkbox = li.querySelector("input");
        checkbox.addEventListener("change",()=>{
            if(checkbox.checked){
                producto_container.innerHTML="";
                const prodMarcaFiltrados = stock.filter(item=> item.marca === checkbox.value);
                prodFiltrados.push(prodMarcaFiltrados);

                prodFiltrados.forEach(marcas => {
                    marcas.forEach(prod => {
                        const div = document.createElement('div');
                        div.classList.add('producto');
                        div.innerHTML=`
                        <img class="producto_img" src="${prod.imagen}"></img>
                        <h3 class="producto_nombre">${prod.marca} ${prod.modelo}</h3>
                        <p class="producto_precio">$${prod.precio}</p>
                        <button type="button" class="producto_btn">Añadir al carrito</button>`
                        producto_container.appendChild(div);
                    });
                });
            }else{
                producto_container.innerHTML="";
                const prodMarcaEliminar = prodFiltrados.find(item=> item[0].marca === checkbox.value);

                const index = prodFiltrados.indexOf(prodMarcaEliminar);
                if (index > -1) {
                    prodFiltrados.splice(index, 1);
                }
                console.log(prodFiltrados);

                prodFiltrados.forEach(marcas => {
                    marcas.forEach(prod => {
                        const div = document.createElement('div');
                        div.classList.add('producto');
                        div.innerHTML=`
                        <img class="producto_img" src="${prod.imagen}"></img>
                        <h3 class="producto_nombre">${prod.marca} ${prod.modelo}</h3>
                        <p class="producto_precio">$${prod.precio}</p>
                        <button type="button" class="producto_btn">Añadir al carrito</button>`
                        producto_container.appendChild(div);
                    });
                });
                
                if(prodFiltrados.length===0){
                    stock.forEach(item => {
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
                }
            }
        })
    })

    /****************** FILTRADO POR PRECIOS  *************/
    console.log(prodFiltrados);
    Array.from(filtradosItemsPrecio).forEach(li=>{
        const checkbox = li.querySelector("input");
        checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
            producto_container.innerHTML="";
            const prodPrecioFiltrados = stock.filter(item=> item.precio >= getPrecioMin(checkbox.value) && item.precio <= getPrecioMax(checkbox.value));
            console.log(prodPrecioFiltrados);
            prodFiltrados.push(prodPrecioFiltrados);
            console.log(prodFiltrados);
            prodFiltrados.forEach(precio => {
                precio.forEach(prod => {
                    const div = document.createElement('div');
                    div.classList.add('producto');
                    div.innerHTML=`
                    <img class="producto_img" src="${prod.imagen}"></img>
                    <h3 class="producto_nombre">${prod.marca} ${prod.modelo}</h3>
                    <p class="producto_precio">$${prod.precio}</p>
                    <button type="button" class="producto_btn">Añadir al carrito</button>`
                    producto_container.appendChild(div);
                });
            });
        }else{
            producto_container.innerHTML="";
            const prodMarcaEliminar = prodFiltrados.find(item=> item[1].precio >= getPrecioMin(checkbox.value) && item[1].precio <= getPrecioMax(checkbox.value));
            const index = prodFiltrados.indexOf(prodMarcaEliminar);
            if (index > -1) {
                prodFiltrados.splice(index, 1);
            }
            console.log(prodFiltrados);
            prodFiltrados.forEach(precio => {
                precio.forEach(prod => {
                    const div = document.createElement('div');
                    div.classList.add('producto');
                    div.innerHTML=`
                    <img class="producto_img" src="${prod.imagen}"></img>
                    <h3 class="producto_nombre">${prod.marca} ${prod.modelo}</h3>
                    <p class="producto_precio">$${prod.precio}</p>
                    <button type="button" class="producto_btn">Añadir al carrito</button>`
                    producto_container.appendChild(div);
                });
            });

            if(prodFiltrados.length===0){
                stock.forEach(item => {
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
            }

        }
        
        })
    });

    function getPrecioMin(rango) {
        switch (rango) {
            case "30000-40000":
            return 30000;
            case "40000-50000":
            return 40000;
            case "50000-60000":
            return 50000;
        }
    }

    function getPrecioMax(rango) {
        switch (rango) {
            case "30000-40000":
            return 40000;
            case "40000-50000":
            return 50000;
            case "50000-60000":
            return 60000;
        }
    }
})




/*Crear 2 funciones una para cuando selecciona una marca, otra para el precio y hacer una clase css
con la propiedad hidden para cuando filtro los productos activarla o desactivarla*/ 

/* Crear una api local .json para los productos una para stock principal y otra para prod favoritos(home) */