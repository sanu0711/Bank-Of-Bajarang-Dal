window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (window.pageYOffset > 100) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
  