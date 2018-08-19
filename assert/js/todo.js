// //check off specific Todos By Clicking
// $("li").click(function(){
//     //if li is grey
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         // $(this).css("color","black");
//
//         //turn black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//
//         })
//     }
//     // else turn grey
//     else {
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through"
//
//         });
//     }
//     // $(this).css("color","grey");
//     // $(this).css("text-decoration","line-through")
// })

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
})

//test
// $("span").click(function(){
//     $(this).parent().css("color","pink")
//
// });

// click x to delet to do
$("ul").on("click", "span",  function(event){
    // $(this).parent().remove();
    $(this).parent().fadeOut(2020,function(){
        $(this).remove()
    });
    event.stopPropagation();

});

$("input","div").keypress(function(event){
    if(event.which === 13){
        //grabing new
         var todoText = $(this).val();
         $(this).val("")
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
    }
});

$(".fa-plus").click(function(){
    $("input","div").fadeToggle(0)
})
