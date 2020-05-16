//Check off todos when clicked
    //on works only on object existing at runtime, therefore we apply it to the ul
    //and it will listen for clicks on the li elements
$("ul").on("click", "li", function(){ 
    $(this).toggleClass("completed");
});

//Click  on X to delete TODO
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })

    event.stopPropagation();    
})

$("input[type = 'text'").keypress(function(event){
    if(event.which === 13){ //13 is the respective key number for enter
        //Grabbing new todo text from input
        todo_text = $(this).val();
        //Celaring input val
        $(this).val("")
        //Create a new li at the end of ul
        $("ul").append("<li><span>X</span> " + todo_text + "</li>");
    }
})