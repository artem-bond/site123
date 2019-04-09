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
    //map
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('#map').html(function initMap() {
                var mapOptions = {
                    zoom: 10,
                    center: new google.maps.LatLng(37.8199, -122.4783),
                    mapTypeId: 'hybrid'
                };
                var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
                var goldenGatePosition = {lat: 37.8199,lng: -122.4783};
                var marker = new google.maps.Marker({
                    position: goldenGatePosition,
                    map: map,
                    title: 'Golden Gate Bridge'
            });
                var contentString = 'Content One';
    
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
    
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            })
            console.log('map');
            $(window).unbind('scroll')
        }
  });
});