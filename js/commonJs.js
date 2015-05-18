$(document).ready(function(){
    $('.main-item').on('click', function(){
        $this = $(this).parent();

        $this.find('.sub-menu-side').slideToggle(function(){
            $this.toggleClass('active-block');
        });

        $this.toggleClass('active');
    });

    $('.btn-radio input').on('change', function(){
        $(this).closest('.list-btn-radio').find('.btn-radio').removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.list-btn-position li').on('click', function(){
        $(this).siblings().removeClass('active');

        $(this).addClass('active');
    });
});