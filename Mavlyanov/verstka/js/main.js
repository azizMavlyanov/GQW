$(document).ready(function() {

//Tabs
    (function(){
        $('.tabs__link').on('click', function(e){
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.tabs__item'),
                container = $this.closest('.tabs'),
                content = container.find('.tabs__content-item'),
                ndx = item.index(),
                reqItem = content.eq(ndx),
                activeItem = content.filter('.active');

            item.addClass('active')
                .siblings()
                .removeClass('active');

            activeItem.fadeOut(500, function () {
                reqItem.fadeIn(500, function () {
                    $(this).addClass('active')
                        .siblings()
                        .removeClass('active');
                });
            });
        });
    }());


    (function(){
        $('.attachment__link').on('click', function (e) {
            e.preventDefault();

            var $this = $(this);
            var dropDown = $('.attachment-dropdown');

            dropDown.addClass('.dropdown__active').slideToggle();


        });
    }());
    
    (function(){
        $('.letter__link').on('click', function (e) {
            e.preventDefault();

            var $this = $(this);
            var dropDown = $('.word-list-dropdown');

            dropDown.addClass('.dropdown__active').slideToggle();


        });
    }());
});