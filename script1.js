// Putting the date on top of the page

let dayOfWeek = moment().format('dddd');
let dateMonth = moment().format('MMMM Do');

let dayOnTop = dayOfWeek + ", " + dateMonth;

$('#currentDay').text(dayOnTop);
//End of date on top of the page
