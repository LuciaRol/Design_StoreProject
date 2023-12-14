window.onload = () => {
    const btn = document.getElementById('#menu--btn');
    const navbar = document.getElementById('#menu__nav--options');
  
  
    btn.addEventListener('click', () => {
  
      btn.classList.toggle('btn-active')
      navbar.classList.toggle('nav-active')
  
    })
  
  }