/*
 circle-chart for languages
 */
 $(function(){
  $('.circlechart').circlechart();

});

/*
 tooltip
 */
 $(function(){
  $('[data-toggle="tooltip"]').tooltip();

});

/*hamburguer*/
let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtPages").addEventListener("change", updatePrice);
document.querySelector("#js").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-not").addEventListener("change", updatePrice);
document.querySelector("#deadline").addEventListener("change", function(){
    const deadlineUser = document.querySelector("#deadline").value;
    document.querySelector("label[for=deadline]").innerHTML = `Deadline in ${deadlineUser} weeks.`;
    updatePrice();
});
