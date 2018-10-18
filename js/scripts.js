$(document).ready(function(){
  $("form#formid").submit(function(event){
    event.preventDefault();
    var Name= $("input#nameid").val();
    var Age= $("input#ageid").val();
    var Favoritecolor= $("input#colorid").val();

    console.log(Name,Age,Favoritecolor);

    if (Favoritecolor === "blue" ){
      $(".brad").show();
    }

    if (Favoritecolor === "green" && Age>=25){
      $(".tom").show();
    }

    if (Favoritecolor === "yellow" || Age>30){
      $(".jack").show();
    }
  });
});
