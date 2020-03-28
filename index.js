var modal = document.getElementById('id01');
var modal1 = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal || event.target == modal1) {
        modal.style.display = "none";
        modal1.style.display = "none";
    }
}


$(document).ready(function () {
  $(".text").click(function () {
    $(".overlay").fadeIn(500);
  });
  $(".overlay").not(".text").click(function() {
    $(".overlay").fadeOut(500);
  });
  $("[type = submit]").click(function () {
    var string = $("textarea").val();
    var post ="<div class='post'>" + string + "</div>";
    $(post).appendTo(".posts");
    $("textarea").val("");
  });
});

const dropdown_btn=document.querySelector("#dropdown-nav button");
dropdown_btn.addEventListener("click",()=>{
  const dropdown=document.querySelector("#dropdown");
  if(dropdown.style.display=="none")
    dropdown.style.display="block";
  else
    dropdown.style.display="none";
});

window.onclick=function(event){
  if(!event.target.matches("#dropdown-nav button") && !event.target.matches("#dropdown-nav button i"))
  {
    document.querySelector("#dropdown").style.display="none";
  }
}
