//display current day and time at the top of the page

$("#currentDay").text(moment().format("MMMM DD, YYYY HH:mA"));

//save events to local storage

$(".saveBtn").on("click", function(){

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);

});


// Function to update the color of the time display
function hourUpdater() {
    var currentTime = moment().hours();

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

};

hourUpdater()
///get items from local storage and display on UI for each event
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));











