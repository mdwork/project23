$(document).ready(function(){
    $('.side-menu > li').on('click', function(){
        $this = $(this);

        $this.find('.sub-menu-side').slideToggle(function(){
            $this.toggleClass('active-block');
        });

        $this.toggleClass('active');
    });
});