// back end

const lowerCase = function(sentence) {
  return sentence.toLowerCase();
};

const removeNonAlphanumeric = function(sentence) {
  return sentence.replace(/[^a-z0-9]+/ig, "");
};

const numberOfColumns = function(sentence) {
  return Math.ceil(Math.sqrt(sentence.length));
};

const splitSentence = function(sentence) {
  const splitBy = numberOfColumns(sentence);
  let fragments = [];
  for (let i = 0; i < sentence.length; i += splitBy) {
    let fragment = sentence.substring(i, i + splitBy);
    fragments.push(fragment);
  };
  return fragments;
};

const rearrangeFragments = function(fragments) {
  const splitBy = fragments.length;
  let encryptedFragments = [];
  for (let y = 0; y < splitBy; y ++) {
    let encryptedFragment = [];
    for (let i = 0; i < splitBy; i ++) {
      encryptedFragment.push(fragments[i][y]);
    };
    encryptedFragments.push(encryptedFragment.join(""));
    encryptedFragment = [];
  };
  return encryptedFragments.join(" ");
};

const encryptSentence = function(sentence) {
  return rearrangeFragments(
    splitSentence(
      removeNonAlphanumeric(
        lowerCase(sentence)
      )
    )
  );
};

// front end

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput = $("#sentence").val();
    $("#result").text(encryptSentence(userInput));
  });
});
