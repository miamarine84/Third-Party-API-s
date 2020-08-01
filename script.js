// Putting the date on top of the page

let dayOfWeek = moment().format('dddd');
let dateMonth = moment().format('MMMM Do');

let dayOnTop = dayOfWeek + ", " + dateMonth;

$('#currentDay').text(dayOnTop);
//End of date on top of the page

// Hours of work from 8am - 5pm
var scheduleHours = [
    "7am","8am","9am", "10am", "11am", "12am", "1pm", "2pm",
    "3pm", "4pm", "5pm",
]
//Creating each row, span, li and button for each scheduleHours
for (i = 0; i < scheduleHours.length; i++) {
    $('ul').append('<li class="row" ><span id =' + scheduleHours[i] + '>' + scheduleHours[i] + '</span></li>');
}

$('span').addClass('col-2 time-block')
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


let userInput = '';
let hourInput = '';
let local = ''

$('button').click(function () {

    let userInput = $(this).prev().val();
   
    let hourInput = $(this).siblings('span').text();
  

    let local = localStorage.setItem(hourInput, userInput)

})
// This is the best way with my code in hand that i could make it save to the localStorage I tried my own startegy so that there wont be many linees of code

        $('#7am').siblings('input').val(localStorage.getItem('7am'))
        $('#8am').siblings('input').val(localStorage.getItem('8am'))
        $('#9am').siblings('input').val(localStorage.getItem('9am'))
        $('#10am').siblings('input').val(localStorage.getItem('10am'))
        $('#11am').siblings('input').val(localStorage.getItem('11am'))
        $('#12am').siblings('input').val(localStorage.getItem('12am'))
        $('#1pm').siblings('input').val(localStorage.getItem('1pm'))
        $('#2pm').siblings('input').val(localStorage.getItem('2pm'))
        $('#3pm').siblings('input').val(localStorage.getItem('3pm'))
        $('#4pm').siblings('input').val(localStorage.getItem('4pm'))
        $('#5pm').siblings('input').val(localStorage.getItem('5pm'))


// This portion modifies the styling of the elements depending on the time if it's current past or active

let currentHour = new Date().getHours();
console.log(currentHour)
// console.log('correct time ' + currentHour)
// if (currentHour > 12) {
//     currentHour += 'pm'
//     console.log('this is the first result ' + currentHour)
// }
// else if(currentHour < 12){

//     currentHour += 'am'
//     console.log('this is the other result ' + currentHour)
//    }



let timePm = ''

$('span').each(function () {

    console.log(currentHour)
    let testhour = parseInt($(this).text());

    console.log(testhour)

    if (parseInt($(this).text()) > currentHour) {
        $(this).css('background-color', 'green')
        console.log('green>>>>>>>>>>>>>>>>>>>>>>')

    } else if (parseInt($(this).text()) === currentHour) {
        console.log('orange')
        $(this).css('background-color', 'orange')
    }
    else if (parseInt($(this).text()) < currentHour) {
        $(this).css('background-color', 'red')
        console.log('red----------------------')
    }
})
