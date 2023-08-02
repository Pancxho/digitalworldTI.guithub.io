/*================================== BTNs INTERNOS ===================================*/

document.addEventListener('DOMContentLoaded', function() {
    var scrollBtns = document.querySelectorAll('.btn');
    
    scrollBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        var target = document.querySelector(this.getAttribute('href'));
        var targetOffsetTop = target.offsetTop;
        
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      });
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    var scrollBtns = document.querySelectorAll('.btn-secondary');
    
    scrollBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        var target = document.querySelector(this.getAttribute('href'));
        var targetOffsetTop = target.offsetTop;
        
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      });
    });
  });


/*================================ SCROLL BTN ======================================*/

window.addEventListener('scroll', function() {
    var scrollBtn = document.getElementById('scroll-btn');
    if (window.pageYOffset > 100) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
});
