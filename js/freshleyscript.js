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
  var selected_date_to_order = "";
  var item_to_highlight = "";
  var today = new Date();
  for (i = 0; i < 10; i++) {
    var get_date_monday = GetDateFOrList(today, i);
    $("#list-item-" + (i + 1)).text(get_date_monday);
  }
  $("#list-item-1").click(function () {
    HighlightList("#list-item-1");
  });
  $("#list-item-2").click(function () {
    HighlightList("#list-item-2");
  });
  $("#list-item-3").click(function () {
    HighlightList("#list-item-3");
  });
  $("#list-item-4").click(function () {
    HighlightList("#list-item-4");
  });
  $("#list-item-5").click(function () {
    HighlightList("#list-item-5");
  });
  $("#list-item-6").click(function () {
    HighlightList("#list-item-6");
  });
  $("#list-item-7").click(function () {
    HighlightList("#list-item-7");
  });
  $("#list-item-8").click(function () {
    HighlightList("#list-item-8");
  });
  $("#list-item-9").click(function () {
    HighlightList("#list-item-9");
  });
  $("#list-item-10").click(function () {
    HighlightList("#list-item-10");
  });

  var plan_length = 0;
  var current_plan_length = 0;
  $("#weak-plan-4").click(function () {
    plan_length = 4;
    $("#no-of-meals").text(plan_length);
  });
  $("#weak-plan-6").click(function () {
    plan_length = 6;
    $("#no-of-meals").text(plan_length);
  });
  $("#weak-plan-10").click(function () {
    plan_length = 10;
    $("#no-of-meals").text(plan_length);
  });
  $("#weak-plan-12").click(function () {
    plan_length = 12;
    $("#no-of-meals").text(plan_length);
  });
  $("#get-item-8").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-8");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-7").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-7");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-6").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-6");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-5").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-5");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-4").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-4");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-3").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-3");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-2").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-2");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  $("#get-item-1").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-1");
    } else {
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
  });
  function CreateCart(cart_id, item_name_id) {
    var CartList = $(cart_id);
    var item_in_cart = $(item_name_id).text();
    console.log(item_in_cart);
    var item = document.createElement("div");
    item.className = "pd-1 row mt-3 ";
    var item_image = document.createElement("div");
    item_image.className = "col-4 mt-2";
    var image = document.createElement("img");
    image.className = "cart-list-menu-image ";
    image.style.width = "100%";
    image.src =
      "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1607770959/production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpg";
    item_image.appendChild(image);

    var item_text = document.createElement("div");
    item_text.className = "col-6 mt-3 font-weight-bold";
    var item_image_name = document.createElement("p");
    item_image_name.textContent = item_in_cart;
    item_text.append(item_image_name);
    var crossx = document.createElement("div");
    crossx.className = "col-2 mt-3 font-weight-bold";
    crossx.textContent = "x";
    item.append(item_image);
    item.append(item_text);
    item.append(crossx);
    CartList.append(item);
  }
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
  function HighlightList(listhighlight) {
    $(item_to_highlight).css({
      "border-left": "0px solid rgba(0, 100, 0, 0.7)",
      outline: "0px solid rgba(0, 200, 0, 0.5)",
      "z-index": "0",
    });
    $(listhighlight).css({
      "border-left": "8px solid rgba(0, 100, 0, 0.7)",
      outline: "2px solid rgba(0, 200, 0, 0.5)",
      "z-index": "1",
    });
    item_to_highlight = listhighlight;
    var selected_date_to_order = "";
    selected_date_to_order = $(listhighlight).text();
    $("#delievery-date").text(selected_date_to_order);
    $("#current-selected-date").text(selected_date_to_order);
  }
  function GetDateFOrList(today, count) {
    console.log(today);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var day = today.getDay();
    console.log(day);
    var daystoskip = 7 - day;
    var nextMonday = new Date();
    nextMonday.setDate(day + daystoskip + count);

    var currentmonth = months[nextMonday.getMonth()] + " ";
    var currentdate = nextMonday.getDate();
    var currentday = days[nextMonday.getDay()];

    var date_to_return = currentday + "," + currentmonth + "" + currentdate;
    var date_to_return = currentday.concat(",", currentmonth, " ", currentdate);

    return date_to_return;
  }

  $("#demo").steps({
    onFinish: function () {
      alert("complete");
    },
  });
});
