$(document).ready(function(){
    // document.querySelectorAll('.login').forEach(function(element){
    //     element.addEventListener('click', function(){
    //         this.setAttribute('style', 'background-color: red');
    //     });
    // });
    $('.login').click(function(){
        $(this).css('background-color', 'red');
    });
    $('.menu, .close-menu').click(function(){
       $('.mobile-menu').toggleClass('open');
    });
});
