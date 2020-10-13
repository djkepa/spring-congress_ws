function darklight() {
  document.querySelector('.header__logo-middle').classList.toggle('active-l');
  document.querySelector('.header').classList.toggle('active-b');
  document.querySelector('.bg__animation').classList.toggle('active-m');
  document.querySelector('.header__text-box').classList.toggle('active-hc');
  document.querySelector('.navigation__background').classList.toggle('active-bg-h');
  document.querySelector('.icons_social').classList.toggle('active-icon');
  document.querySelector('.icons_social-2').classList.toggle('active-icon');

//   document.querySelector('.chart').classList.toggle('active-chart');
//   document.querySelectorAll('.chart').classList.toggle('active-chart');
}


var checkbox = document.querySelector('input[name=theme]');

  checkbox.addEventListener('change', function() {
      if(this.checked) {
          trans()
          document.documentElement.setAttribute('data-theme', 'dark')
      } else {
          trans()
          document.documentElement.setAttribute('data-theme', 'light')
      }
  })
  let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition')
      }, 1000)
  }


