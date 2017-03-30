// back end

const lowerCase = function(sentence) {
  return sentence.toLowerCase();
};

const removeNonAlphanumeric = function(sentence) {
  return sentence.replace(/[^a-z0-9]+/ig, "");
};

const encryptSentence = function(sentence) {
  return removeNonAlphanumeric(lowerCase(sentence));
};

// front end

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput = $("#sentence").val();
    $("#result").text(encryptSentence(userInput));
  });
});
