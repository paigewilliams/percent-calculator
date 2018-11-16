//Back-end logic
var calcPercent = function (number, percent) {
  var product = number * percent;
  var quotient = parseFloat(product / 100);
  console.log(quotient)
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

$(document).ready(function(){
  $("#percent-calc").submit(function(event){
    event.preventDefault()
    var number = $("#number").val();
    var percent = $("#percent").val();
    
    calcPercent(number, percent)


})
})
