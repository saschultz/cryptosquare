// back end

const lowerCase = function(sentence) {
  return sentence.toLowerCase();
};

// front end

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput = $("#sentence").val();
    $("#result").text(lowerCase(userInput));
  });
});
