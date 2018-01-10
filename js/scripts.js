$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentenceInput = $("input#sentence").val();
    var shoutedResponse = sentenceInput.toUpperCase();

    $(".sentence").text(shoutedResponse);

    $("#response").show();

    event.preventDefault();
  });
});
