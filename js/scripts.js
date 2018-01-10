$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentenceInput = $("input#sentence").val();

    $(".sentence").text(sentenceInput);

    $("#response").show();

    event.preventDefault();
  });
});
