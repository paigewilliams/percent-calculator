//Back-end logic
var calcPercent = function (number, percent) {
  var product = number * percent;
  var quotient = parseFloat(product / 100);
  return quotient
}

var calcPercent2 = function (number, number1) {
  var quotient = number / number1;
  var product = parseFloat(quotient * 100);
  return product
}

var calcPercent3 = function (number, percent) {
  convertDecimal = parseFloat(percent / 100)
  quotient = parseFloat(number / convertDecimal)
  return quotient
}

var percentIncrease = function (number, number1){
  percentIncrease = parseInt(((number1 - number)/ number) * 100)
  return percentIncrease
}

var percentDecrease = function (number, number1){
  percentDecrease = parseInt(((number - number1)/ number) * 100)
  return percentDecrease
}
//UI Logic
  function findNumber() {

    }


  function findPercent() {
    $("#percent-back").click(function(){

      ("#find-percent").hide();
      ("#landing").show();
    })
  }

  function percentIncrease() {
    $("#increase-back").click(function(){
      ("#percent-increase").hide();
      ("#landing").show();
    })
  }

  function percentDecrease() {
    $("#decrease-back").click(function(){
      ("#percent-increase").hide();
      ("#landing").show();
    })
  }


$(document).ready(function(){

  $("#findNumber").click(function(){
    $("#find-number").show()
    $("#landing").hide()
  });
  $("#findPercent").click(function(){
    $("#find-percent").show()
    $("#landing").hide()
  });
  $("#percentIncrease").click(function(){
    $("#percent-increase").show()
    $("#landing").hide()
  });
  $("#percentDecrease").click(function(){
    $("#percent-decrease").show()
    $("#landing").hide()
  });
  $("#number-back").click(function(){
    $("#find-number").hide()
    $("#landing").show()
  });
  $("#percent-back").click(function(){
    $("#find-percent").hide()
    $("#landing").show()
  });
  $("#increase-back").click(function(){
    $("#percent-increase").hide()
    $("#landing").show()
  });
  $("#decrease-back").click(function(){
    $("#percent-decrease").hide()
    $("#landing").show()
  });



  $("#percent-calc").submit(function(event){
    event.preventDefault()
    var number = $("#number").val();
    var percent = $("#percent").val();
    var calc = calcPercent(number, percent)

    $(".result").html(calc)
    $("#results").show()
    $(".container").hide()



    $(".refresh").click(function(){
      $("#number").val('');
      $("#percent").val('');
      $(".container").show()
      $("#results").hide()

    })

})
})
