$(window).load(function() {
    $(".before-after").twentytwenty({
      before_label: 'without', // Set a custom before label
      after_label: 'with' // Set a custom after label
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider_dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    $('.menu-button').on('click', function(){
      $('.menu').toggleClass('menu_active');
    });

    //customizing select
    $('.select_checked').on('click', function(){
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });
    $('.select_option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select_dropdown').toggleClass('select_dropdown_open');
    });
    
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -120 + "px" });
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99")
  });