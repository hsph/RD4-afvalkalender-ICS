const ical = require('ical-generator');
const cal = ical().timezone('Europe/Amsterdam');
  
var months = {
    'januari' : '01',
    'februari' : '02',
    'maart' : '03',
    'april' : '04',
    'mei' : '05',
    'juni' : '06',
    'juli' : '07',
    'augustus' : '08',
    'september' : '09',
    'oktober' : '10',
    'november' : '11',
    'december' : '12'
}

'use strict';

const fs = require('fs');
const moment = require('moment');

let rawdata = fs.readFileSync('calendar-items.json');  
let items = JSON.parse(rawdata);  

function parseDate(input) {
    var parts = input.split(' ');
    var year = parts[3];
    var month = months[parts[2]];
    var day = parts[1];
    return moment(year + '-' + month + '-' + day, 'YYYY-MM-DD')
  }

items.forEach(function(key, index){
    var d = parseDate(key.FIELD1);
    
    const event = cal.createEvent({
        start: d,
        allDay: true,
        summary: key.FIELD2
    });

    const alarm = event.createAlarm({type: 'display', trigger: 21600});
});

cal.saveSync('calendar-items.ics');
