$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function () {
        // Toggles a class on the menu button to transform the burger menu into a cross
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
        $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

        // Toggles a class that slides the menu into view on the screen
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
    });

    //Callback
    $('.call-back__button').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.messangers-list').slideToggle("fast");
    });

    //Modal
    $(".js-open-modal").click(function (e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            display: "block"
        });
    });

    $(".js-close-modal, .modal-bg").click(function () {
        $(".modal").css({
            display: "none"
        });
    });

      //scroll to #
      $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    $('.section-form__items__item--slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
        touchMove: true
    });

    $('.section-reviews__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
        touchMove: true
    });

    //Mask phone
    jQuery(function ($) {
        $(".phone").mask("+7 (999) 999-99-99");
    });





    // PRILIV QUIZ
    var PRICES_MINI_SEDAN_BLACK = {
        back_standart: 4000, 
        front_standart: 4000,
        only_front_standart: 2000,
        front_side_standart: 2000,
        all_standart: 7500,
        back_premium: 4500,
        front_premium: 4500,
        only_front_premium: 2500,
        front_side_premium: 2500,
        all_premium: 8500 
    };

    var PRICES_MINI_SEDAN_ATERMAL = {
        back_standart: 7000, 
        front_standart: 7000,
        only_front_standart: 4000,
        front_side_standart: 4000,
        all_standart: 14000,
        back_premium: 9000,
        front_premium: 9000,
        only_front_premium: 5000,
        front_side_premium: 5000,
        all_premium: 18000
    }

    var PRICES_MINI_SEDAN_CHAMELEON = {
        back_standart: 8000, 
        front_standart: 8000,
        only_front_standart: 7000,
        front_side_standart: 3000,
        all_standart: 16000,
        back_premium: 8000,
        front_premium: 8000,
        only_front_premium: 7000,
        front_side_premium: 3000,
        all_premium: 16000
    }

    var PRICES_BUSINESS_CROSSOVER_BLACK = {
        back_standart: 4500, 
        front_standart: 4500,
        only_front_standart: 2200,
        front_side_standart: 2000,
        all_standart: 8500,
        back_premium: 5000,
        front_premium: 5000,
        only_front_premium: 2500,
        front_side_premium: 2500,
        all_premium: 9500
    }

    var PRICES_BUSINESS_CROSSOVER_ATERMAL = {
        back_standart: 7000, 
        front_standart: 7000,
        only_front_standart: 4000,
        front_side_standart: 4000,
        all_standart: 14000,
        back_premium: 9000,
        front_premium: 9000,
        only_front_premium: 5000,
        front_side_premium: 5000,
        all_premium: 18000
    }

    var PRICES_BUSINESS_CROSSOVER_CHAMELEON = {
        back_standart: 8500, 
        front_standart: 8000,
        only_front_standart: 7000,
        front_side_standart: 3000,
        all_standart: 17000,
        back_premium: 8500,
        front_premium: 8000,
        only_front_premium: 7000,
        front_side_premium: 3000,
        all_premium: 17000
    }

    var PRICES_JEEP_BLACK = {
        back_standart: 5000, 
        front_standart: 5000,
        only_front_standart: 2500,
        front_side_standart: 2000,
        all_standart: 9000,
        back_premium: 5500,
        front_premium: 5500,
        only_front_premium: 3000,
        front_side_premium: 2500,
        all_premium: 10000
    }

    var PRICES_JEEP_ATERMAL = {
        back_standart: 7500, 
        front_standart: 7500,
        only_front_standart: 5000,
        front_side_standart: 4000,
        all_standart: 15000,
        back_premium: 10000,
        front_premium: 10000,
        only_front_premium: 6000,
        front_side_premium: 5000,
        all_premium: 19000
    }

    var PRICES_JEEP_CHAMELEON = {
        back_standart: 9000, 
        front_standart: 9000,
        only_front_standart: 7000,
        front_side_standart: 3500,
        all_standart: 18000,
        back_premium: 9000,
        front_premium: 9000,
        only_front_premium: 7000,
        front_side_premium: 3500,
        all_premium: 18000
    }

    var CURRENT_PAGE_URL = window.location.href,
        DISCOUNT_PERCENT = 5;

    var currentStep = 1,
        nextStep,
        prevStep,
        orderFormValues = '',
        orderFormTotalSteps = $('.quiz__steps-line').data('total-steps'),
        currentStepValue,
        orderMailResult,
        orderMailAjaxData,
        totalPrice = 0,
        totalPriceDiscount = 0;

    $('.quiz').attr('action', CURRENT_PAGE_URL);

    function orderFormSwitchStep() {

        $( '.quiz-step-indicator--current' )
            .removeClass('quiz-step-indicator--current quiz-step-indicator--passed')
            .next()
            .addClass('quiz-step-indicator--passed quiz-step-indicator--current')
            .prev()
            .removeClass('quiz-step-indicator--current')         
            .addClass('quiz-step-indicator--passed');

        currentStep = $( '.quiz-step-indicator--current' ).data('step-number');

        $('.quiz-step').attr('data-step-hidden', 'true');

        $('.quiz-step[data-step-number="'+currentStep+'"]').attr('data-step-hidden', 'false');

        if( currentStep == 5 ) {

            var carType =  $('.quiz-step-switcher').data('car-type'),
                toningType = $('.quiz-step-switcher').data('toning-type'),
                filmType = $('.quiz-step-switcher').data('film-type'),
                materialType = $('.quiz-step-switcher').data('material-type'),
                totalString;
            
                totalString = toningType + '_' + materialType;

                if( carType == 'mini' || carType == 'sedan' ) {
                    switch (filmType) {
                        case 'standart_black':
                            totalPrice = PRICES_MINI_SEDAN_BLACK[totalString];                    
                            break;
                        case 'atermal':
                            totalPrice = PRICES_MINI_SEDAN_ATERMAL[totalString];                            
                            break;
                        case 'chameleon':
                            totalPrice = PRICES_MINI_SEDAN_CHAMELEON[totalString];                       
                            break;                    
                    }
                } else if ( carType == 'business_class' || carType == 'crossover' ) {
                    switch (filmType) {
                        case 'standart_black':
                            totalPrice = PRICES_BUSINESS_CROSSOVER_BLACK[totalString];                
                            break;
                        case 'atermal':
                            totalPrice = PRICES_BUSINESS_CROSSOVER_ATERMAL[totalString];                            
                            break;
                        case 'chameleon':
                            totalPrice = PRICES_BUSINESS_CROSSOVER_CHAMELEON[totalString];                       
                            break;                    
                    }
                } else if ( carType == 'jeep' ) {
                    switch (filmType) {
                        case 'standart_black':
                            totalPrice = PRICES_JEEP_BLACK[totalString];
                            break;
                        case 'atermal':
                            totalPrice = PRICES_JEEP_ATERMAL[totalString];                            
                            break;
                        case 'chameleon':
                            totalPrice = PRICES_JEEP_CHAMELEON[totalString];                       
                            break;
                    }
                }

                totalPriceDiscount = totalPrice - ( (totalPrice*DISCOUNT_PERCENT)/100 );

                // console.log( 'car type', carType );
                // console.log( 'film type', filmType );
                // console.log( 'total price', totalPrice );
                // console.log( 'total string', totalString );

                $('.quiz-total-price-text').html('<del>' + totalPrice + '</del> ' + totalPriceDiscount +' руб.');
        }

        if( currentStep == orderFormTotalSteps ) {            
            $('.quiz-step-switcher').addClass('quiz-step-switcher-submit');
            $('.quiz-step-switcher__title').text('Получите результат просчета');
        }
    
    } 


    function orderFormSubmit() {             
        var userPhoneInput = $('input[name="user-phone"]');
            userPhoneInputValue = userPhoneInput.val(),

        $('.quiz').find('input[type="radio"]:checked, input[type="checkbox"]:checked, input[type="text"], input[type="tel"]').each( function(){
            orderFormValues += this.value;
        });

        orderFormValues += 'Итоговая стоимость: <del>' + totalPrice + '<del>' + totalPriceDiscount + ' руб.';

        $('.quiz-form-values').val(orderFormValues);
        $('.quiz-form-total-price').val('<del>' + totalPrice + '</del> ' + totalPriceDiscount +' руб.');

        if( $('.quiz-form-values').val().length > 0 ) {
            $('.quiz').submit();
        } else {
            return false;
        }              
    }

    function orderFormClear() {
        $('.quiz input').val('');
        $('.quiz input[type="radio"], .quiz input[type="checkbox"]').prop('checked', false);
    }

    $( '.quiz-step-switcher' ).on('click', function(e){
        e.preventDefault();
        
        if( $(this).hasClass('quiz-step-switcher-disabled') ) {
            return false;
        } else if( currentStep == 5 ) {
            if( $('input[name="user-phone"]').val().length == 18 ) {
                orderFormSwitchStep();
            } else {
                $('input[name="user-phone"]').parent().addClass('quiz-field-item--error');
            }
        } else if( $(this).hasClass('quiz-step-switcher-submit') ) {
            orderFormSubmit();
        } else {
            orderFormSwitchStep();
        }
    });

    $('.quiz-field-item__input').on('change', function(e){
        var currentCarType =  $(this).data('car-type'),
            currentToningType = $(this).data('toning-type'),
            currentFilmType = $(this).data('film-type'),
            currentMaterialType = $(this).data('material-type');

        $( '.quiz-step-switcher' ).attr( 'data-car-type', currentCarType );
        $( '.quiz-step-switcher' ).attr( 'data-toning-type', currentToningType );
        $( '.quiz-step-switcher' ).attr( 'data-film-type', currentFilmType );
        $( '.quiz-step-switcher' ).attr( 'data-material-type', currentMaterialType );

    });
});