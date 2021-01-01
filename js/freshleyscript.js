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
  console.log(today);
  for (i = 0; i < 10; i++) {
    var get_date_monday = GetDateFOrList(today, i);
    $("#list-item-" + (i + 1)).text(get_date_monday);
  }

  HighlightList("#list-item-1");

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
  $("#day-to-select").click(function () {
    $("#next-button-to-day").click();
  });
  $("#set-to-go").hide();
  $("#not-to-go").show();
  var plan_length = 0;
  var current_plan_length = 0;
  $("#weak-plan-4").click(function () {
    plan_length = 4;
    $("#no-of-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $("#weak-plan-6").click(function () {
    plan_length = 6;
    $("#no-of-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $("#weak-plan-10").click(function () {
    plan_length = 10;
    $("#no-of-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $("#weak-plan-12").click(function () {
    plan_length = 12;
    $("#no-of-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $("#get-item-8").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-8", "#img-item-8");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-7").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-7", "#img-item-7");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-6").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-6", "#img-item-6");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-5").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-5", "#img-item-5");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-4").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-4", "#img-item-4");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-3").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-3", "#img-item-3");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-2").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-2", "#img-item-2");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  $("#get-item-1").click(function () {
    if (current_plan_length < plan_length) {
      CreateCart("#cart-list", "#value-item-1", "#img-item-1");
    } else {
      $("#final-order").removeAttr("disabled");
      alert("Plan Limit Exceed");
    }

    current_plan_length++;
    if (plan_length - current_plan_length > 0) {
      $("#no-of-meals").text(plan_length - current_plan_length);
    } else {
      ShowOrderLeft();
    }
  });
  function ShowOrderLeft() {
    $("#set-to-go").show();
    $("#not-to-go").hide();
    $("#final-order").removeAttr("disabled");
    $("#final-order").css("background-color", " #07872b");
    $("#final-order").hover(
      function () {
        $(this).css("background-color", " #333");
      },
      function () {
        $(this).css("background-color", " #07872b");
      }
    );
  }
  $("#final-order").click(function () {
    $("#next-button-to-day").click();
  });
  function CreateCart(cart_id, item_name_id, item_img_id) {
    var CartList = $(cart_id);
    var img_in_cart = $(item_img_id).attr("src");
    var item_in_cart = $(item_name_id).text();
    var item = document.createElement("div");
    item.className = "pd-1 row mt-3 ";
    var item_image = document.createElement("div");
    item_image.className = "col-4 mt-2";
    var image = document.createElement("img");
    image.className = "cart-list-menu-image ";
    image.style.width = "100%";
    image.src = img_in_cart;
    item_image.appendChild(image);

    var item_text = document.createElement("div");
    item_text.className = "col-6 mt-3 font-weight-bold";
    var item_image_name = document.createElement("p");
    item_image_name.textContent = item_in_cart;
    item_text.append(item_image_name);
    var crossx = document.createElement("div");
    crossx.className = "col-2 mt-3 font-weight-bold";
    crossx.style.cursor = "pointer";
    crossx.textContent = "x";

    $(crossx).click(function () {
      $(item).remove();
      current_plan_length--;
      $("#no-of-meals").text(plan_length - current_plan_length);
    });
    item.append(item_image);
    item.append(item_text);
    item.append(crossx);
    CartList.append(item);
    var Final_Cart = $("#checkout-div-content");
    var final_item = document.createElement("div");
    final_item.className = "row cart-list-menu p-3";

    var final_item_number = document.createElement("div");
    final_item_number.className = "col-1 mt-4";
    final_item_number.textContent = "1";

    var final_item_img_div = document.createElement("div");
    final_item_img_div.className = "col-3 mt-2";
    var final_item_img = document.createElement("img");
    final_item_img.className = "cart-list-menu-image";
    final_item_img.style.width = "100%";
    final_item_img.src = img_in_cart;
    final_item_img_div.appendChild(final_item_img);

    var final_item_text_div = document.createElement("div");
    final_item_text_div.className = "col-8 mt-2";

    var final_item_name_para = document.createElement("p");
    final_item_name_para.className = "cart-list-menu-heading mt-2";
    final_item_name_para.textContent = item_in_cart;

    var final_item_name_para_sub = document.createElement("p");
    final_item_name_para_sub.className =
      "text-success cart-list-menu-sub-heading";
    final_item_name_para_sub.textContent = "with Hearty White Beans & Kale";

    final_item_text_div.appendChild(final_item_name_para);
    final_item_text_div.appendChild(final_item_name_para_sub);

    final_item.append(final_item_number);
    final_item.append(final_item_img_div);
    final_item.append(final_item_text_div);
    Final_Cart.append(final_item);
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
    nextMonday.setDate(daystoskip + 2 + count);
    console.log(nextMonday);

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
