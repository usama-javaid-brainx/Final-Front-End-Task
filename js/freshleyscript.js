$(document).ready(function () {
  $("#meal-6").css({ "background-color": "#07872b", color: "white" });
  $("#menu-4-list").hide();
  $("#menu-10-list").hide();
  $("#menu-12-list").hide();
  //listeners on meal
  $("#meal-4").click(function () {
    MealListener(
      "#meal-4",
      "#meal-6",
      "#meal-10",
      "#meal-12",
      "#menu-4-list",
      "#menu-6-list",
      "#menu-10-list",
      "#menu-12-list"
    );
  });

  $("#meal-6").click(function () {
    MealListener(
      "#meal-6",
      "#meal-4",
      "#meal-10",
      "#meal-12",
      "#menu-6-list",
      "#menu-4-list",
      "#menu-10-list",
      "#menu-12-list"
    );
  });
  $("#meal-10").click(function () {
    MealListener(
      "#meal-10",
      "#meal-4",
      "#meal-6",
      "#meal-12",
      "#menu-10-list",
      "#menu-4-list",
      "#menu-6-list",
      "#menu-12-list"
    );
  });
  $("#meal-12").click(function () {
    MealListener(
      "#meal-12",
      "#meal-4",
      "#meal-10",
      "#meal-6",
      "#menu-12-list",
      "#menu-4-list",
      "#menu-10-list",
      "#menu-6-list"
    );
  });
  function MealListener(
    show1,
    hide1,
    hide2,
    hide3,
    showinfo,
    hideinfo1,
    hideinfo2,
    hideinfo3
  ) {
    $(show1).css({ "background-color": "#07872b", color: "white" });
    $(hide1).css({ "background-color": "white", color: "#333" });
    $(hide2).css({ "background-color": "white", color: "#333" });
    $(hide3).css({ "background-color": "white", color: "#333" });
    //hide show
    $(showinfo).show();
    $(hideinfo1).hide();
    $(hideinfo2).hide();
    $(hideinfo3).hide();
  }
});

var form = $("#my-form");
form.validate({
  errorPlacement: function errorPlacement(error, element) {
    element.before(error);
  },
  rules: {
    confirm: {
      equalTo: "#password",
    },
  },
});
form.children("div").steps({
  headerTag: "h3",
  bodyTag: "section",
  transitionEffect: "slideLeft",
  onStepChanging: function (event, currentIndex, newIndex) {
    form.validate().settings.ignore = ":disabled,:hidden";
    return form.valid();
  },
  onFinishing: function (event, currentIndex) {
    form.validate().settings.ignore = ":disabled";
    return form.valid();
  },
  onFinished: function (event, currentIndex) {
    form.submit();
  },
});
