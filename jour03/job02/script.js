$(document).ready(function(){

    var button = $('#button');
    var images = $('img');
    console.log(images);

    var hey = $.map(images);
    console.log(hey);

    $(button).click(function(){
        console.log(images)
        let img = $(this);
        console.log(img);
    })
})