
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



