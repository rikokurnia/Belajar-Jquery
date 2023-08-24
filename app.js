$(document).ready(function () {
  let button = $("#test");
  button.click(function () {
    let h3 = $("h3").toggle("3000");
    h3.addClass("border");
    h3.css(style);
  });

  let style = {
    color: "red",
    fontSize: "20px",
    background: "yellow",
  };

  button.click(function () {
    $("p").css("background-color", "blue").show("4000").hide("2000");
  });

  $("ul").prev().css("background-color", "green");

  // learn ajax
  let ajax = $("#ajax");
  ajax.click(function () {
    $("#div1").load("data.txt");
  });

  let li = $("li");
  li.append("empat");

  // event double click
    const dblclick = $('#clickdbl')
      dblclick.dblclick(function() {
        hideInput.alert('this function double click')
      })

    // event hide input
    let hideInput = $('#hideIN')
      hideInput.keypress(function(){
        $(this).hide()
      })

    // event fade
      $("#box").click(function(){
        $(".boxes1").fadeToggle();
        $(".boxes1").fadeToggle("slow");
        $(".boxes1").fadeToggle(3000);
      });
});
