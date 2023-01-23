$(document).ready(function(){
    $('.menu, .close-menu').click(function(){
       $('.mobile-menu').toggleClass('open');
    });
     $('#filter').on('keyup', function(event){
    //document.querySelector('#filter').addEventListener('keyup', function(event){
        let keyPressed = event.keyCode;
        if (keyPressed === 27) {
            $(this).val('');
        }
        let text = $(this).val();
        if (text === '') {
            $('li').show();
        } else {
            $('li').each(function () {
                let liText = $(this).text();
                if (text.toLowerCase() === liText.toLowerCase()) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
     $(document).on('click', 'li', function(){
        $(this).css('color', 'red');
     });
     let newListItem = `<li class="codeup">New dynamically added li</li>`;
     $('#list2').append(newListItem);
});
