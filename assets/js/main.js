/*circlechart animation*/

 $(function(){
  $('.circlechart').circlechart(); /*circle-chart for languages [jquery]*/
  $('[data-toggle="tooltip"]').tooltip();/*tooltip [bootstrap]*/
  menuHamburguer();
});


/*hamburguer*/
function menuHamburguer(){
    let hamburguer = document.querySelector(".hamburguer");
    hamburguer.addEventListener("click", () => {
    document.querySelector(".container-fluid").classList.toggle("show-menu");
});
}

/*link to top*/
$(document).ready(function(){

  //check view
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#link-topo').fadeIn();
      } else {
          $('#link-topo').fadeOut();
      }
  });

  //link to top
  $('#link-topo').click(function(){
      $('html, body').animate({scrollTop : 0}, 1000);
      return false;
  });

});


