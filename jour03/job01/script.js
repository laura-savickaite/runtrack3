$(document).ready(function(){

    var button = $('#button');
    // console.log(button);
    var body = $('body');
    // console.log(body);

    $(button).click(function(){
        var textButton = $("<p>le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p><br><button id='delete'>Delete all</button>");

        $(body).append(textButton);

        var del = $('#delete');

        $(del).click(function(){
            textButton.remove();
            button.remove();
        })
    })

})