let exit=1;
let total=0;
const nike=36000,adidas=30000,converse=26000,vans=28000,dc=25000;

let msj=prompt("Quiere realizar una compra Si=1 No=0");
if(msj==='1'){
    while(exit!=0){
        total+=venta();
        exit=prompt("Quiere realizar otra compra? Si=1 No=0");
    }
    alert(`Precio final: ${total}`);
    alert("Gracias por su compra!");
}else{
    alert("Gracias por visitarnos!");
}

function venta(){
    let precio;
    marca=prompt("Ingrese la marca de zapatilla\nnike\nadidas (20% OFF)\nconverse\nvans\ndc (30% OFF)");
    while(marca!=false){
        switch(marca){
            case 'nike':
                talle=prompt("Elija el talle que desea: 39-44");
                precio=nike;
                marca=false;
                break;
            case 'adidas':
                talle=prompt("Elija el talle que desea: 39-44");
                precio=adidas-(adidas*0.2);
                marca=false;
                break;
            case 'converse':
                talle=prompt("Elija el talle que desea: 39-44");
                precio=converse;
                marca=false;
                break;
            case 'vans':
                talle=prompt("Elija el talle que desea: 39-44");
                precio=vans;
                marca=false;
                break;
            case 'dc':
                talle=prompt("Elija el talle que desea: 39-44");
                precio=dc-(dc*0.3);
                marca=false;
                break;
            default:
                alert("Esa marca no esta disponible");
                marca=prompt("Ingrese la marca de zapatilla\nnike\nadidas (20% OFF)\nconverse\nvans\ndc (30% OFF)");
        }
    }
    
    return precio;
}