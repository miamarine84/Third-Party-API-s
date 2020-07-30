// Putting the date on top of the page

let dayOfWeek = moment().format('dddd');
let dateMonth = moment().format('MMMM Do');

let dayOnTop = dayOfWeek + ", " + dateMonth;

$('#currentDay').text(dayOnTop);
//End of date on top of the page

// Hours of work from 8am - 5pm
var scheduleHours = [
    "9am", "10am", "11am", "12am", "1pm", "2pm",
    "3pm", "4pm", "5pm",'11pm'
]



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
for (const property in localStorage) {
  
        $('#9am').siblings('input').val(localStorage.getItem('9am'))
        $('#10am').siblings('input').val(localStorage.getItem('10am'))
        $('#11am').siblings('input').val(localStorage.getItem('11am'))
        $('#12am').siblings('input').val(localStorage.getItem('12am'))
        $('#1pm').siblings('input').val(localStorage.getItem('1pm'))
        $('#2pm').siblings('input').val(localStorage.getItem('2pm'))
        $('#3pm').siblings('input').val(localStorage.getItem('3pm'))
        $('#4pm').siblings('input').val(localStorage.getItem('4pm'))
        $('#5pm').siblings('input').val(localStorage.getItem('5pm'))
}



let amPm = new Date().getHours();
console.log('correct time ' + amPm)
// if (amPm > 12) {
//     amPm -= 12
//     console.log('this is the first result ' + amPm)
// }
// } else if(amPm > 16){
//     amPm -= 11
//     console.log('this is the other result ' + amPm)
//    }
console.log(amPm)



$('span').each(function () {

    console.log(amPm)
    let testhour = parseInt($(this).text());
    console.log(testhour)

    if (parseInt($(this).text()) > amPm) {
        $(this).css('background-color', 'green')
        console.log('green>>>>>>>>>>>>>>>>>>>>>>')

    } else if (parseInt($(this).text()) === amPm) {
        console.log('orange')
        $(this).css('background-color', 'orange')
    }
    else if (parseInt($(this).text()) < amPm) {
        $(this).css('background-color', 'red')
        console.log('red----------------------')
    }
})
