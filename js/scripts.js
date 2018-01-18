var leapYear = function(year) {
  if ((year / 4 === 0) && (year / 100 !== 0) || (year / 400 === 0)) {
    return true;
  } else {
    return false;
  }

};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#year").val());
    var result = leapYear(year);
      console.log(year);

      console.log(result);


    $(".year").text(year);

    if (result === false) {
      $(".not").text("not");
    };

    $("#result").show();
  }); // submit function

}); // document ready
