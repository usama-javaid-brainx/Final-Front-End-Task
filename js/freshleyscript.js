$(document).ready(function () {
  //array of meals
  var arrayOfItems = [
    {
      id: 1,
      Title: "STEAK PEPPERCORN",
      sub: "with Sautéed Carrots & French Green Beans",
      specs: "510 Cals 33g Carbs 29g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602724105/production-meal-image-57e49562-348b-42f2-9ca6-9f40a95c8395.jpg",
    },
    {
      id: 2,
      Title: "CAULIFLOWER SHELL BEEF",
      sub: "with Nonna’s Soffritto & Italian Cheeses",
      specs: "540 Cals 48g Carbs 30g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1607770959/production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpg",
    },
    {
      id: 3,
      Title: "PROTEIN-PACKED CHICKEN",
      sub: "with Mozzarella & Garlicky Broccoli",
      specs: "420 Cals 17g Carbs 43g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602723110/production-meal-image-0a78bae3-2e0c-4ab7-b420-154ed262d4d0.jpg",
    },
    {
      id: 4,
      Title: "HOMESTYLE CHICKEN",
      sub: "with Masterful Mac & Cheese",
      specs: "600 Cals 45g Carbs 46g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602721634/production-meal-image-8771fb54-2c23-4063-8007-f5024df074c2.jpg",
    },
    {
      id: 5,
      Title: "SAUSAGE & PEPPERS",
      sub: "with Carb Swap Cauliflower Rice",
      specs: "500 Cals 29g Carbs 21g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602723731/production-meal-image-2b1d9d32-e0de-44b4-a2c5-9c7fa22203d5.jpg",
    },
    {
      id: 6,
      Title: "ZINGY BUFFALO CHICKEN",
      sub: "with Loaded Cauliflower",
      specs: "470 Cals 15g Carbs 40g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602722020/production-meal-image-1a05b254-2fc5-4eec-9cec-5b1cde753c06.jpg",
    },
    {
      id: 7,
      Title: "SIERRA CHICKEN BOWL",
      sub: "with Cilantro-Lime Sauce",
      specs: "410 Cals 44g Carbs 22g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1605813866/production-meal-image-1eab0dae-fb76-4485-9b1b-eaa125cae6c6.jpg",
    },
    {
      id: 8,
      Title: "OLÉ CHICKEN & SMOKY CHILE SAUCE",
      sub: "with Veggie Sauté & Sofrito Rice",
      specs: "550 Cals 50g Carbs 31g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602724174/production-meal-image-13231efa-1905-40d4-aca2-208524d1dab1.jpg",
    },
    {
      id: 9,
      Title: "SAUSAGE BAKED PENNE",
      sub: "with Sautéed Zucchini & Spinach",
      specs: "570 Cals 55g Carbs 22g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602723731/production-meal-image-2b1d9d32-e0de-44b4-a2c5-9c7fa22203d5.jpg",
    },
    {
      id: 10,
      Title: "CHICKEN LIVORNO",
      sub: "with Hearty White Beans & Kale",
      specs: "440 Cals 21g Carbs 39g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602723731/production-meal-image-2b1d9d32-e0de-44b4-a2c5-9c7fa22203d5.jpg",
    },
    {
      id: 11,
      Title: "WHITE BEAN TURKEY CHILI",
      sub: "with Cilantro-Lime Rice",
      specs: "530 Cals 64g Carbs 26g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1602722020/production-meal-image-1a05b254-2fc5-4eec-9cec-5b1cde753c06.jpg",
    },
    {
      id: 12,
      Title: "DUE SOUTH BBQ BEEF",
      sub: "with Masterful Mac & Cheese",
      specs: "630 Cals 45g Carbs 34g Protein",
      image:
        "https://res.cloudinary.com/freshly/image/upload/c_scale,w_640/c_crop,h_341,w_512/v1605813866/production-meal-image-1eab0dae-fb76-4485-9b1b-eaa125cae6c6.jpg",
    },
  ];
  var myArray = {
    "STEAK PEPPERCORN": 0,
    "CAULIFLOWER SHELL BEEF": 0,
    "PROTEIN-PACKED CHICKEN": 0,
    "DUE SOUTH BBQ BEEF": 0,
    "WHITE BEAN TURKEY CHILI": 0,
    "CHICKEN LIVORNO": 0,
    "SAUSAGE BAKED PENNE": 0,
    "OLÉ CHICKEN & SMOKY CHILE SAUCE": 0,
    "SIERRA CHICKEN BOWL": 0,
    "ZINGY BUFFALO CHICKEN": 0,
    "SAUSAGE & PEPPERS": 0,
    "HOMESTYLE CHICKEN": 0,
  };

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

  HighlightList("#list-item-1");

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
  $("#day-to-select").click(function () {
    showContent(0, 4, "first-row");
    showContent(4, 8, "second-row");
    showContent(8, 12, "third-row");
    $("#next-button-to-day").click();
  });

  $(".set-to-go").hide();
  $(".not-to-go").show();
  $(".again-not-to-go").hide();
  var plan_length = 0;
  var current_plan_length = 0;
  $(".weak-plan-4").click(function () {
    plan_length = 4;
    $(".no-of-meals").text(plan_length);
    $(".total-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $(".weak-plan-6").click(function () {
    plan_length = 6;
    $(".no-of-meals").text(plan_length);
    $(".total-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $(".weak-plan-10").click(function () {
    plan_length = 10;
    $(".no-of-meals").text(plan_length);
    $(".total-meals").text(plan_length);
    $("#next-button-to-day").click();
  });
  $(".weak-plan-12").click(function () {
    plan_length = 12;
    $(".no-of-meals").text(plan_length);
    $(".total-meals").text(plan_length);
    $("#next-button-to-day").click();
  });

  $(".meal-done").text(current_plan_length);
  $(".final-order").addClass("cursor-not-allowed");

  $(document).on("click", ".get-item-for-cart-button", function () {
    $("#cart-alert-text").hide();

    var img_in_cart = $(this)
      .parentsUntil(".parent-for-cart")
      .find(".item-cart-img-pic")
      .attr("src");

    var item_in_cart = $(this)
      .parentsUntil(".parent-for-cart")
      .find(".get-value-item")
      .text();

    myArray[item_in_cart] += 1;

    CreateCart("#cart-list", img_in_cart, item_in_cart);
    current_plan_length++;
    $(".meal-done").text(current_plan_length);
    if (current_plan_length < plan_length) {
      $(".no-of-meals").text(plan_length - current_plan_length);
      $(".final-order").addClass("cursor-not-allowed");
    } else if (current_plan_length - plan_length == 0) {
      ShowOrderLeft();
    } else {
      $(".set-to-go").hide();
      $(".not-to-go").hide();
      $(".again-not-to-go").show();
      $(".no-of-meals-remove").text(current_plan_length - plan_length);
      $(".final-order").attr("disabled", "disabled");
      $(".final-order").removeClass("cursor-allowed ");
      $(".final-order").addClass("cursor-not-allowed");
    }
  });
  function ShowOrderLeft() {
    $(".set-to-go").show();
    $(".not-to-go").hide();
    $(".again-not-to-go").hide();
    $(".final-order").removeAttr("disabled");
    $(".final-order").css("background-color", " #07872b");
    $(".final-order").removeClass("cursor-not-allowed ");
    $(".final-order").addClass("cursor-allowed");
    $(".final-order").hover(
      function () {
        $(this).css("background-color", " #333");
      },
      function () {
        $(this).css("background-color", " #07872b");
      }
    );
  }
  $(".final-order").click(function () {
    $("#checkout-plan-length").text(plan_length);
    myplanvalues = { 4: 11.49, 6: 9.49, 10: 8.99, 12: 8.49 };
    let price_total = plan_length * myplanvalues[plan_length];
    let total_amount = price_total + 5.99;
    price_total = "$ " + price_total;
    total_amount = "$ " + total_amount;
    $("#total-meal-amount").text(price_total);
    $(".total-amount").text(total_amount);

    CreateFinalCart();
    $("#next-button-to-day").click();
  });

  function CreateFinalCart() {
    for (var key in myArray) {
      if (myArray[key] > 0) {
        var Final_Cart = $("#checkout-div-content");
        var final_item = document.createElement("div");
        final_item.className = "row cart-list-menu p-3";

        var final_item_number = document.createElement("div");
        final_item_number.className = "col-1 mt-4 font-weight-bold";
        final_item_number.textContent = myArray[key];

        var final_item_img_div = document.createElement("div");
        final_item_img_div.className = "col-4 mt-2";
        var final_item_img = document.createElement("img");
        final_item_img.className = "cart-list-menu-image";
        final_item_img.style.width = "100%";

        for (var i = 0; i < arrayOfItems.length; i++) {
          var object = arrayOfItems[i];

          if (object.Title === key) {
            var image_to_show = object.image;
          }
        }
        final_item_img.src = image_to_show;
        final_item_img_div.appendChild(final_item_img);

        var final_item_text_div = document.createElement("div");
        final_item_text_div.className = "col-6 mt-2";

        var final_item_name_para = document.createElement("p");
        final_item_name_para.className =
          "cart-list-menu-heading mt-2 change-font";
        final_item_name_para.textContent = key;

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
    }
  }

  function CreateCart(cart_id, img_in_cart, item_in_cart) {
    var CartList = $(cart_id);
    var Final_Cart_Small = $("#cart-list-small");
    var item = document.createElement("div");
    item.className = "pd-1 row mt-1 ml-1";
    var item_small = document.createElement("div");
    item_small.className = "small-div-to-append row ";
    var item_image = document.createElement("div");
    item_image.className = "col-4 mt-2";
    var image = document.createElement("img");
    image.className = "cart-list-menu-image pd-1";
    image.style.width = "100%";
    image.src = img_in_cart;
    item_image.appendChild(image);

    var item_text = document.createElement("div");
    item_text.className = "col-6 mt-3 change-font font-weight-bold";
    var item_image_name = document.createElement("p");
    item_image_name.textContent = item_in_cart;
    item_text.append(item_image_name);
    var crossx = document.createElement("div");
    crossx.className = "col-2 mt-3 font-weight-bold";
    crossx.style.cursor = "pointer";
    crossx.textContent = "x";
    var crossx_small = document.createElement("span");
    crossx_small.className = "fa fa-times-circle col-2 mt-3";
    crossx_small.style.cursor = "pointer";

    $(crossx).click(function () {
      let key_to_remove = $(item).text();
      $(item).remove();
      $(item_small).remove();
      key_to_remove = key_to_remove.substring(0, key_to_remove.length - 1);
      myArray[key_to_remove] -= 1;
      current_plan_length--;
      if (current_plan_length == 0) {
        $("#cart-alert-text").show();
      }
      $(".meal-done").text(current_plan_length);
      if (current_plan_length < plan_length) {
        $(".set-to-go").hide();
        $(".not-to-go").show();
        $(".again-not-to-go").hide();
        $(".no-of-meals").text(plan_length - current_plan_length);
        $(".final-order").attr("disabled", "disabled");
        $(".final-order").addClass("cursor-not-allowed");
      } else if (current_plan_length > plan_length) {
        $(".set-to-go").hide();
        $(".not-to-go").hide();
        $(".again-not-to-go").show();
        $(".no-of-meals-remove").text(current_plan_length - plan_length);
        $(".final-order").attr("disabled", "disabled");
        $(".final-order").addClass("cursor-not-allowed");
      } else {
        ShowOrderLeft();
      }
    });
    $(crossx_small).click(function () {
      let key_to_remove = $(item).text();
      $(item).remove();
      $(item_small).remove();
      key_to_remove = key_to_remove.substring(0, key_to_remove.length - 1);
      myArray[key_to_remove] -= 1;
      current_plan_length--;
      if (current_plan_length == 0) {
        $("#cart-alert-text").show();
      }
      $(".meal-done").text(current_plan_length);
      if (current_plan_length < plan_length) {
        $(".set-to-go").hide();
        $(".not-to-go").show();
        $(".again-not-to-go").hide();
        $(".no-of-meals").text(plan_length - current_plan_length);
        $(".final-order").attr("disabled", "disabled");
        $(".final-order").addClass("cursor-not-allowed");
      } else if (current_plan_length > plan_length) {
        $(".set-to-go").hide();
        $(".not-to-go").hide();
        $(".again-not-to-go").show();
        $(".no-of-meals-remove").text(current_plan_length - plan_length);
        $(".final-order").attr("disabled", "disabled");
        $(".final-order").addClass("cursor-not-allowed");
      } else {
        ShowOrderLeft();
      }
    });

    var cln_img = item_image.cloneNode(true);
    var cln_text = item_text.cloneNode(true);
    //var cln_cross = crossx.cloneNode(true);
    item.append(item_image);
    item.append(item_text);
    item.append(crossx);
    item_small.append(cln_img);
    item_small.append(cln_text);
    item_small.append(crossx_small);

    CartList.append(item);
    Final_Cart_Small.append(item_small);
  }
  $(".clear-all").click(function () {
    $("#cart-list").empty();
    $("#cart-list-small").empty();
    current_plan_length = 0;
    $(".meal-done").text(current_plan_length);
    $(".set-to-go").hide();
    $(".not-to-go").show();
    $(".again-not-to-go").hide();
    $(".no-of-meals").text(plan_length - current_plan_length);
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
  function HighlightList(listhighlight) {
    $(item_to_highlight).css({
      "border-left": "0px solid rgba(0, 100, 0, 0.7)",
      border: "1px solid rgba(0, 0, 0, 0.125)",
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
    $(".delievery-date").text(selected_date_to_order);
    $("#current-selected-date").text(selected_date_to_order);
  }

  function showContent(start, end, row_id_to_append) {
    for (var i = start; i < end; i++) {
      var object = arrayOfItems[i];
      var temp = document.getElementById("cart-meals-template");

      img_for_cart_menu = temp.content.querySelector(".item-cart-img-pic");
      heading_for_cart = temp.content.querySelector(".get-value-item");

      //add_for_cart = temp.content.querySelector(".get-item-for-cart-button");

      sub_heading_for_cart = temp.content.querySelector(".card-sub-heading");

      heading_for_cart.textContent = object.Title;
      sub_heading_for_cart.textContent = object.sub;
      var specs_to_show = object.specs;
      var results = specs_to_show.split(" ");
      console.log(results.length);
      for (j = 0; j < 6; j++) {
        let spec_text = ".specs-" + (j + 1);
        specs_for_cart = temp.content.querySelector(spec_text);
        specs_for_cart.textContent = results[j];
      }
      img_for_cart_menu.src = object.image;

      var clon = temp.content.cloneNode(true);
      var appendhere = document.getElementById(row_id_to_append);
      appendhere.appendChild(clon);
    }
  }

  function GetDateFOrList(today, count) {
    //console.log(today);
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
    //console.log(day);
    var daystoskip = 7 - day;
    var nextMonday = new Date();
    nextMonday.setDate(daystoskip + 8 + count);
    //console.log(nextMonday);

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
