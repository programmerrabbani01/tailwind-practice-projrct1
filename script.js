document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('#mainMenu ul li a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      links.forEach(link => {
        link.parentElement.classList.remove('active');
      });
      this.parentElement.classList.add('active');
    });
  });
});
