$(document).ready(function(){

    var button = $('#button');
    var images = $('img');
    // console.log(images);
    const array = ['images/arc1.png', 'images/arc2.png', 'images/arc3.png', 'images/arc4.png', 'images/arc5.png', 'images/arc6.png'];

    

    // $(button).click(function(){
    //     $('#melangee').rdmGrid();
    // })

    // function shuffleArray(array) {
    //     // console.log(array.length);
    //     for (var i = array.length-1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //         images.src = array[i];
    //     }
    // }

    shuffleArray(array);
    // images.click(function(){
    //     let valeur = $(this).attr('src') 
    //     range.push(valeur);
    //     console.log(range)
    //     //et j'envoie dans la div rangée
    // })




})