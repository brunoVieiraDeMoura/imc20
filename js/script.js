function initCountDown() {
  var countDownDate = new Date('Jan 5, 2028 21:00:00').getTime();

  setInterval(() => {
    var now = new Date().getTime();
    var today = new Date();
    var hours1 = today.getHours();
    var day1 = today.getDate();
    var distance = countDownDate - now;
    var spanCount = document.querySelector('.count');
    var classAtivo = document.getElementById('count');
    var classAtivo2 = document.getElementById('count2');
    var promo2on = document.getElementById('promo2-on');
    var promo21on = document.getElementById('promo21-on');
    var promo3on = document.getElementById('promo3-on');
    var promo31on = document.getElementById('promo31-on');
    var novePM = 21;
    var noveAm = 9;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var horasFaltando = hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (day1 % 2 === 0 && novePM > hours1 && hours1 >= noveAm) {
      classAtivo2.classList.remove('pro2-ativo');
      classAtivo2.style.display = 'none';
      classAtivo.classList.add('pro1-ativo');
      classAtivo.style.display = 'block';
      promo2on.style.display = 'none';
      promo21on.style.display = 'block';
      promo3on.style.display = 'block';
      promo31on.style.display = 'none';

      return (spanCount.innerHTML = horasFaltando);
    } else {
      classAtivo.classList.remove('pro1-ativo');
      classAtivo.style.display = 'none';
      classAtivo2.classList.add('pro2-ativo');
      classAtivo2.style.display = 'block';
      promo2on.style.display = 'block';
      promo21on.style.display = 'none';
      promo3on.style.display = 'none';
      promo31on.style.display = 'block';
    }
  });
}
initCountDown();

function initAcordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');
  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}

initAcordionList();

function initScroll() {
  const liksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop - 130;
    const topo2 = section.offsetTop - 380;
    const topo3 = section.offsetTop - 120;
    const topo1 = section.offsetTop - 100;
    if (href === '#dieta') {
      window.scroll({
        top: topo,
        behavior: 'smooth',
      });
    } else if (href === '#info') {
      window.scroll({
        top: topo2,
        behavior: 'smooth',
      });
    } else if (href === '#prod') {
      window.scroll({
        top: topo1,
        behavior: 'smooth',
      });
    } else {
      window.scroll({
        top: topo3,
        behavior: 'smooth',
      });
    }
  }

  liksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScroll();

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
      element.setAttribute(outside, '');
    }
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
  }

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    }
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}

initMenuMobile();
