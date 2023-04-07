const header = document.querySelector('header');
const itemLink=document.querySelectorAll('.item__link');

// Cuando haga scroll se vaya oscureciendo el header
window.addEventListener('scroll', () => {
  // Obtiene la posición actual del scroll
  const scrollPosition = document.documentElement.scrollTop;
  // Calcula la opacidad del fondo del header en función de la posición actual del scroll
  const opacity = Math.min(1, scrollPosition / 200);
  // Actualiza la opacidad del fondo del header
  header.style.backgroundColor = `rgba(8, 8, 8, ${opacity})`;

  // Cuando se haya desplazado el header cambia de color los links y el carrito
  if (window.scrollY > 100) {
    header.classList.add('header__text-white');
    itemLink.forEach(link => link.classList.add('item__link-white'));
  } else {
    header.classList.remove('header__text-white');
    itemLink.forEach(link => link.classList.remove('item__link-white'));
  }
});

const hamburgerIcon = document.querySelector('#hamburger-icon');
const containerNavMobile = document.querySelector('.container-nav-mobile');
hamburgerIcon.addEventListener('click',()=>{
  containerNavMobile.classList.toggle('active');
  containerNavMobile.classList.toggle('animate__fadeInLeft');
})


