// Putting the date on top of the page

let dayOfWeek = moment().format('dddd');
let dateMonth = moment().format('MMMM Do');

let dayOnTop = dayOfWeek + ", " + dateMonth;

$('#currentDay').text(dayOnTop);
//End of date on top of the page

// Hours of work from 8am - 5pm
var scheduleHours = [
    "4am","8am", "9am", "10am", "11am", "12am", "1pm", "2pm",
    "3pm", "4pm", "5pm"
] 

for(i=0; i<scheduleHours.length; i++){
    $('ul').append('<li class="row" ><span>'+scheduleHours[i]+'</span></li>');
}

$('span').addClass('col-2 time-block hour') 
$('.row').append('<input></input>')   
$('input').addClass('col-8')
$('input').attr({
    type: 'text',
    rows: '2',
    cols: '100%',
})
$('<button></button>').appendTo('.row').addClass('col-2 saveBtn');
$('button').text('Click here to save');

// End of creating li for hourly schedule

// Button for each time user saves an input

let userSave = {};

$('button').click(function(){

        let userInput = $(this).prev().val();
        console.log(userInput);
        let hourInput = $(this).siblings('span').text();
        console.log(hourInput);

        localStorage.setItem(hourInput, userInput)        
        
    })


   let see = moment().toString();
   console.log(see)


$('span').each(function(){
    let tryout = moment($(this).text(), "ha")
    console.log(tryout)
    let usertest = $(this).text()
    console.log(usertest)
    console.log($(this).text())
    console.log(moment().format('ha'))
    if($(this).text() === moment().format('ha')){
        console.log('orange')
        $(this).css('background-color', 'orange')
    } else if($(this).text() <= moment().format('ha')){
        $(this).css('background-color', 'red')
        console.log('red----------------------')

    } else if($(this).text() >= moment().format('ha')){
        $(this).css('background-color', 'green')
        console.log('green>>>>>>>>>>>>>>>>>>>>>>')

    } 
})

//   $('span').each(function(){
//         console.log((parseInt($(this).text())))
//         console.log(parseInt(moment().format('ha')))

//         if(parseInt(moment().format(' ha ')) < parseInt($(this).text())){
//             console.log('----------')
//             // $('li').parent().css('background-color', 'red')

//         }
//     });

    // var dt = moment("9pm", ["h:mm a"]).format("H");
    // console.log(dt)


    // let am = moment(scheduleHours[2], 'ha');
    // console.log(am)
    



    // console.log(moment().format('ha'))


    // $('span').each(function(){
    //     console.log(parseInt($(this).text()))
    //     if((parseInt($(this).text()) < moment().format('h'))){
    //         $(this).css('background-color', 'red')
    //     }
    // })


    // if(9 < 11){
    // console.log('test')
// }


// $('button').click(function(){
//     textInput += $(this).prev().val();

//     // timeCheck += $('timeId').attr().val();
//     console.log(this, textInput)
   

// })

// alert(parseInt(scheduleHours[3]))
// alert(moment().format('h'));
// function storage(){
// localStorage.setItem("storage", userInput);

// if(storeData8){
//     let storeData8 = $("#agenda").val(localStorage.getItem('storage'));
//      $('#agenda').text(storeData8)
// } 
// }
