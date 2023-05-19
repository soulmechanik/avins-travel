let menu = document.querySelector('#menu-btn ')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        this.classList.toggle('open');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  