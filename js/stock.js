function Zapatilla(marca,modelo,precio,stock,imagen=""){
    this.marca=marca;
    this.modelo=modelo;
    this.precio=precio;
    this.stock=stock;
    this.imagen=imagen;
}

const zapatillas = [
    new Zapatilla("nike","airforce",50000,5,'../assets/images/air-force-1-arg.jpg'),
    new Zapatilla("nike","jordan",60000,7,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("nike","airmax",38000,4,'../assets/images/airmax-270.jpg'),
    new Zapatilla("nike","vapormax",40000,6,'../assets/images/vapor-max-flyknit.jpg'),
    new Zapatilla("nike","uptempo",45000,5,'../assets/images/nike-uptempo.jpg'),

    new Zapatilla("adidas","galaxy6",35000,25,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("adidas","superstar",25000,25,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("adidas","forum",30000,25,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("adidas","stansmith",40000,25,'../assets/images/jordan-air-1-retro.jpg'),
    
    new Zapatilla("vans","oldskool",35000,40,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("vans","era",30000,40,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("vans","sk8high",38000,40,'../assets/images/jordan-air-1-retro.jpg'),

    new Zapatilla("converse","allstar",35000,50,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("converse","courtlandt",30000,50,'../assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("converse","chuck taylor all star",38000,50,'../assets/images/jordan-air-1-retro.jpg'),

    new Zapatilla("dc","midway",40000,20),
    new Zapatilla("dc","manual sd",38000,20),
    new Zapatilla("dc","kalisvulc",35000,20),
];

const zapatillasDestacadas =[
    new Zapatilla("nike","airforce",50000,5,'./assets/images/air-force-1-arg.jpg'),
    new Zapatilla("nike","jordan",60000,7,'./assets/images/jordan-air-1-retro.jpg'),
    new Zapatilla("nike","airmax",38000,4,'./assets/images/airmax-270.jpg'),
    new Zapatilla("nike","vapormax",40000,6,'./assets/images/vapor-max-flyknit.jpg'),
    new Zapatilla("nike","uptempo",45000,5,'./assets/images/nike-uptempo.jpg'),
]



