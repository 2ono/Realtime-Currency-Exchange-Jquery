let appkey = "";
$(function () {
  appkey = "ded6bce1cc3ad107e22ba9dd";
  // bind currency code dropdown
  $.get(
    "https://v6.exchangerate-api.com/v6/" + appkey + "/codes",
    {},
    function (data) {
      let row = "";
      $.each(data.supported_codes, function (i, v) {
        row +=
          "<option value='" + v[0] + "'>" + v[0] + "-" + v[1] + "</option>";
      });
      $("#ddlfrom").append(row);
      $("#ddlTo").append(row);
      $("#ddlfrom").val("USD");
      $("#ddlTo").val("EUR");
      calculate();
    }
  ).fail(function (d) {
    alert("Error while calling the API");
    console.log(d.reponseText);
  });
});
// calculatre currency conversion
function calculate() {
    $.get("https://v6.exchangerate-api.com/v6/"+ appkey +"/pair/"+$("#ddlfrom").val()+"/"+$("#ddlTo").val()+"/"+Number($("#txtamount").val())+"", function(data) {
        $("#txtoutput").val(data.conversion_result);
    }).fail(function (d) {
        alert("Error while calling the API");
        console.log(d.reponseText);
      });
}
