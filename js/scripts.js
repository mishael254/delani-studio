//back-end logic
var output = function(name, email, message) {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var info = ["message has been sent successfuly thankyou for choosing delani studio"]
  var warning = ["invalid response please try again!"]
  if (name,email,message) {
    return info
  } else {
    return warning
  }
}








//front-end logic
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
