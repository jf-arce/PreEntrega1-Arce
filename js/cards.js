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
    div.classList.add(`${item.tipo}`);
    div.classList.add("active");
    div.innerHTML=`
        <img class="card__img" src="${item.img}" alt="">
    `
    cardsContainer.appendChild(div); 
})

//Animacion
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    //card.classList.toggle('active');
    card.style.transform = "scale(1.04)"
    card.style.transition = "transform 0.1s ease";
    cards.forEach(c => {
      if (c !== card) {
        c.style.transform = "scale(0.9)";
        c.style.filter = "brightness(0.5) saturate(0.5) contrast(0.5) blur(1px)";
      }
    });
  });

  card.addEventListener('mouseout', () => {
    //card.classList.remove('active');
    card.style.transform = "scale(1)"
    card.style.transition = "transform 0.1s ease";
    cards.forEach(c => {
      if (c !== card) {
        c.style.transform = "scale(1)";
        c.style.filter = "brightness(1) saturate(1) contrast(1) blur(0px)"
      }
    });
  });
});




