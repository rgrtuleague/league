/**
 * Created by Sergey on 28.04.2017.
 */
$(function () {
    var pop = $('.popbtn');
    var row = $('.row:not(:first):not(:last)');

    pop.popover({
        trigger: 'manual',
        html: true,
        container: 'body',
        placement: 'bottom',
        animation: false,
        content: function() {
            return $('#popover').html();
        }
    });

    pop.on('click', function(e) {
        pop.popover('toggle');
        pop.not(this).popover('hide');
    });

    $(window).on('resize', function() {
        pop.popover('hide');
    });

    row.on('touched', function(e) {
        $(this).find('.popbtn').popover('toggle');
        row.not(this).find('.popbtn').popover('hide');
        return false;
    });
});