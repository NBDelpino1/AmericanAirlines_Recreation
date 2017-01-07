$( document ).ready(function(){

    // SLIDER
    $('.slider').slider({full_width: true});

    // FLIGHT SECTION
    $('ul.tabs').tabs();

    // ENABLE TAB STYLING WHEN IN USE
    $('#menu ul li a').click(function (ev) {
        $('#menu ul li').removeClass('selected');
        $(ev.currentTarget).parent('li').addClass('selected');
    });

    // NAVBAR SLIDE OUT
    $(".button-collapse").sideNav();

    // DATE PICKER
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    // AUTO COMPLETE
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'http://placehold.it/250x250'
        }
    });

    // BOX DROP DOWN SELECTION
    $('select').material_select();

});

