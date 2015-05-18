$(document).ready(function(){
    $('.main-item').click(function(){
        $this = $(this).parent();

        $this.find('.sub-menu-side').slideToggle(function(){
            $this.toggleClass('active-block');
        });

        $this.toggleClass('active');
    });

    $('.btn-radio input').change(function(){
        $(this).closest('.list-btn-radio').find('.btn-radio').removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.list-btn-position li').click(function(){
        $(this).siblings().removeClass('active');

        $(this).addClass('active');
    });

    $($.date_input.initialize);

    $('#add-param').click(function(){
        $('#add-search').slideToggle();
        $(this).parent().toggleClass('active');
    });
});