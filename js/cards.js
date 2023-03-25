const cardsContainer = document.getElementById("cards-container");

const posters=[
    {img:"./assets/images/black-friday.png", tipo:"card-1"},
    {img:"./assets/images/edicion-limitada.png", tipo:"card-2"},
    {img:"./assets/images/nueva-temporada.png", tipo:"card-3"}
]
//Creamos las cards y las ponemos dentro del conteiner
posters.forEach(item=>{
    const div= document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`
        <a class="card__link" href="./pages/shop.html"><img class="card__img" src="${item.img}" alt=""></a>
    `
    cardsContainer.appendChild(div); 
})

//Animacion

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  //Ya que cards es una NodeList para poder usar el filter la convertimos en un array
  const otherCards = Array.from(cards).filter(c => c !== card);

 //Evento cuando estamos con el cursor arriba de la tarjeta
  card.addEventListener('mouseover', () => {

    card.classList.add('card-active');

    otherCards.forEach(c => {
      c.classList.add('card-desactive');
    });
  });

  //Evento cuando sacamos el cursor de la tarjeta
  card.addEventListener('mouseout', () => {
  
    card.classList.remove('card-active');

    otherCards.forEach(c => {
      c.classList.remove('card-desactive');
    });
  });
  
});


