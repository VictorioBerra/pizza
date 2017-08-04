(function ($) {

    $(function () {
        $('.carousel').carousel({
            interval: false
        });

        hideArrowsMaybe();

        $('#carousel').on('slid.bs.carousel', '', hideArrowsMaybe);

    });

    function hideArrowsMaybe() {
        var $this = $('#carousel');
        if ($('.carousel-inner .item:first').hasClass('active')) {
            $this.children('.left.carousel-control').hide();
            $this.children('.right.carousel-control').show();
        } else if ($('.carousel-inner .item:last').hasClass('active')) {
            $this.children('.left.carousel-control').show();
            $this.children('.right.carousel-control').hide();
        } else {
            $this.children('.carousel-control').show();
        }
    }

})(jQuery);