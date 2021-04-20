/*
 circle-chart for languages
 */
 $(function(){
  $('.circlechart').circlechart();

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

/*
Pricing Policy
Page - U$20 | Script - 10% per Page |Layout - U$100 | Emergency - 10% total per week
*/

function updatePrice() {
    const numberPages = document.querySelector("#qtPages").value;
    const needScript = document.querySelector("#js").checked;
    const needLayout = document.querySelector("#layout-yes").checked;
    const deadlineUser = document.querySelector("#deadline").value;
    
    let price = numberPages*20;
    if (needScript) price *= 1.1;
    if(needLayout) price += 100;
    let needEmergency = 1 - deadlineUser * 0.1;
    price *= 1 + needEmergency;

    document.querySelector("#price").innerHTML = `US$ ${price.toFixed(2)}`;
}



/*
$().ready(function() {
	setTimeout(function () {
		$('.english').hide(); 
	}, 2500); 
});
*/

/*
$().ready(function() {
	setTimeout(function() {
        $('.english').fadeIn( 500 ).delay( 1500 ).fadeOut( 1000 );
      }, 2500); 
      setTimeout(function() {
        $('.spanish').fadeIn( 500 ).delay( 1500 ).fadeOut( 1000 );
      }, 2500); 
      setTimeout(function() {
        $('.portuguese').fadeIn( 500 ).delay( 1500 ).fadeOut( 1000 );
      }, 2500);   
});
*/