$(document).ready(function () {
    //Menu button on click event
    $(".mobile-nav-button").on("click", function () {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

        // Toggles a class that slides the menu into view on the screen
        $(".mobile-menu").toggleClass("mobile-menu--open");
        return false;
    });

    //Callback
    $(".call-back__button").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $(".messangers-list").slideToggle("fast");
    });

    //Modal
    $(".js-open-modal").click(function (e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            display: "block"
        });

        $(".quiz-step__fields--figure--slider").slick({
            slidesToShow: 4,
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            cssEase: "linear",
            touchMove: true,
            responsive: [
                {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });

    $(".js-close-modal, .modal-bg").click(function () {
        $(".modal").css({
            display: "none"
        });
    });

    //scroll to #
    $("a[href^=\"#\"").on("click", function () {

        let href = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    $(".section-form__items__item--slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: "linear",
        touchMove: true
    });

    $(".section-reviews__slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: "linear",
        touchMove: true
    });

    //Mask phone
    jQuery(function ($) {
        $(".phone").mask("+7 (999) 999-99-99");
    });

    var CURRENT_PAGE_URL = window.location.href,
        DISCOUNT_PERCENT = 5;

    var currentStep = 1,
        nextStep,
        prevStep,
        orderFormValues = "",
        orderFormTotalSteps = $(".quiz__steps-line").data("total-steps"),
        currentStepValue,
        orderMailResult,
        orderMailAjaxData,
        totalPrice = 0,
        totalPriceDiscount = 0;

    $(".quiz").attr("action", CURRENT_PAGE_URL);

    function orderFormSwitchStep() {

        $(".quiz-step-indicator--current")
            .removeClass("quiz-step-indicator--current quiz-step-indicator--passed")
            .next()
            .addClass("quiz-step-indicator--passed quiz-step-indicator--current")
            .prev()
            .removeClass("quiz-step-indicator--current")
            .addClass("quiz-step-indicator--passed");

        currentStep = $(".quiz-step-indicator--current").data("step-number");

        $(".quiz-step").attr("data-step-hidden", "true");

        $(".quiz-step[data-step-number=\"" + currentStep + "\"]").attr("data-step-hidden", "false");

        if (currentStep == orderFormTotalSteps) {
            $(".quiz__actions").css({"display": "none"});
        }

    }

    /**Массив данных, содержащий информацию о кухнях**/
    const PRODUCTS = [
        {
            "name": "Модус",
            "id": "modus",
            "price": 16000,
            "images": "../img/kitchen/modus/kitchen.jpg"
        },
        {
            "name": "Арабика",
            "id": "arabica",
            "price": 16000,
            "images": "../img/kitchen/arabica/kitchen.jpg"
        },
        {
            "name": "Модерн New",
            "id": "modern-new",
            "price": 23000,
            "images": "../img/kitchen/modern-new/kitchen.jpg"
        },
        {
            "name": "Бостон",
            "id": "boston",
            "price": 26000,
            "images": "../img/kitchen/boston/kitchen.jpg"
        },
        {
            "name": "Прованс",
            "id": "provance",
            "price": 23000,
            "images": "../img/kitchen/provance/kitchen.jpg"
        },
        {
            "name": "Модерн",
            "id": "modern",
            "price": 20000,
            "images": "../img/kitchen/modern/kitchen.jpg"
        },
        {
            "name": "Классика",
            "id": "clasic",
            "price": 22000,
            "images": "../img/kitchen/clasic/kitchen.jpg"
        },
        {
            "name": "Грейвуд",
            "id": "greywood",
            "price": 22000,
            "images": "../img/kitchen/greywood/kitchen.jpg"
        },
        {
            "name": "Лаура",
            "id": "laura",
            "price": 20000,
            "images": "../img/kitchen/laura/kitchen.jpg"
        },
        {
            "name": "Лофт",
            "id": "loft",
            "price": 26000,
            "images": "../img/kitchen/loft/kitchen.jpg"
        },
        {
            "name": "Соло",
            "id": "solo",
            "price": 20000,
            "images": "../img/kitchen/solo/kitchen.jpg"
        },
        {
            "name": "Соната",
            "id": "sonata",
            "price": 17000,
            "images": "../img/kitchen/sonata/kitchen.jpg"
        },
        {
            "name": "Стайл",
            "id": "style",
            "price": 23000,
            "images": "../img/kitchen/style/kitchen.jpg"
        },
        {
            "name": "Вектор",
            "id": "vector",
            "price": 23000,
            "images": "../img/kitchen/vector/kitchen.jpg"
        },
        {
            "name": "Волна",
            "id": "volna",
            "price": 21000,
            "images": "../img/kitchen/volna/kitchen.jpg"
        },
    ];

    let productsArray = document.querySelector("#products");
    let productItems = " ";
    let labelStepOne = " ";
    let priceProduct = "";
    let finishPrice = document.querySelector(".price");
    let mounting = "";

    for (let i = 0; i < PRODUCTS.length; i++) {

        if (PRODUCTS[i] !== undefined) productItems +=
            "<div class='quiz-field-item label__step-1'>" +
            "<input id='" + PRODUCTS[i].id + "' type='radio' " +
            "name='label__step-1' class='quiz-field-item__input' " +
            "value='" + PRODUCTS[i].id + "' " +
            "data-car-type='" + PRODUCTS[i].id + "' checked=''>" +
            "<label for='" + PRODUCTS[i].id + "' class='quiz-field-item__label'>" +
            "<figure class='quiz-field-item__label__image'>" +
            "<img src='" + PRODUCTS[i].images + "' alt='" + PRODUCTS[i].name + "'>" +
            "</figure>" +
            "<div class='quiz-field-item__label__title'>" + PRODUCTS[i].name + "</div>" +
            "</label>" +
            "</div>";
    }
    productsArray.innerHTML = productItems;

    $(".label__step-1").on("click", function () {
        const kitchen = this.querySelectorAll("input[name=\"label__step-1\"]");
        for (const f of kitchen) {
            if (f.checked) {
                labelStepOne = (f.value);
                let result = PRODUCTS.find(item => item.id === labelStepOne);
                //console.log(result.price);
                priceProduct = result.price;
            }
        }

        //console.log(priceProduct);
    });

// .children.querySelectorAll("input[name=\"label__step-2\"]")


    $(".length").on("input", function () {
        let inputs = document.querySelectorAll(".length");
        let sumLength = 0;

        for (let i = 0; i < inputs.length; i++) {
            let ip = inputs[i];

            if (ip.name && ip.name.indexOf("total") < 0) {
                sumLength += parseInt(ip.value) || 0;
            }

        }

        //console.log(sumLength);
        finishPrice = sumLength * priceProduct;
        //console.log(finishPrice);
    });

    $(".quiz-step-switcher").on("click", function (e) {
        e.preventDefault();

        if ($(this).hasClass("quiz-step-switcher-disabled")) {
            return false;
        } else if (currentStep == 5) {
            if ($("input[name=\"user-phone\"]").val().length == 18) {
                orderFormSwitchStep();
            } else {
                $("input[name=\"user-phone\"]").parent().addClass("quiz-field-item--error");
            }
        } else if ($(this).hasClass("quiz-step-switcher-submit")) {
            orderFormSubmit();
        } else {
            orderFormSwitchStep();
        }

        if (currentStep == 4) {
            if ($("#mounting-no").is(":checked")) {
                mounting = 0;
            } else {
                mounting = 15000;
            }

            //console.log(mounting);

            let innerText = document.querySelector(".quiz-total-price-text");
            let priceTotal = finishPrice + mounting;
            innerText.innerHTML = priceTotal;
            //console.log(innerText);
        }
    });
});