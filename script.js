//save events to local storage
$(".saveBtn").on("click", function(){

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);

});

var interval = setInterval(hourUpdater, 15000);
// Section to display the times on the screen in loc 
// here we need to access the values from localstorage and GET the times to display them on screen
$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-13").val(localStorage.getItem("hour-13"));
$("#hour-14").val(localStorage.getItem("hour-14"));
$("#hour-15").val(localStorage.getItem("hour-15"));
$("#hour-16").val(localStorage.getItem("hour-16"));
$("#hour-17").val(localStorage.getItem("hour-17"));
$("#hour-18").val(localStorage.getItem("hour-18"));

$("#currentDay").text(moment().format("MMMM DD, YYYY"));



// Function to update the color of the time display
function hourUpdater() {
    var currentTime = moment().hours();
    
    // pull the id from each id within the time column

 $(".time-block").each(function(){
     var currentHour = parseInt($(this).attr("id").split("-")[1]);

     //console.log("current Hour:", currentHour);

     if( currentHour < currentTime ) {
         $(this).addClass('past');   

        } else if ( currentHour === currentTime ) {
            $(this).addClass('present');

        }else {
            $(this).addClass('future');
        }
 })
    
        
   

}


hourUpdater()




