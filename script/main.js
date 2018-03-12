(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var currentTime = document.getElementById('time'),
            currentDate = document.getElementById('date');
	
        setInterval(function () {
            var d = new Date();
	
            var hours = d.getHours(),
                minutes = d.getMinutes(),
                day = formatDay(d.getDay()),
                date = d.getDate(),
                month = formatMonth(d.getMonth()),
                ampm = 'AM';
			
            if (hours > 12) {
                hours -= 12;
                ampm = 'PM';
            } else if (hours === 0) {
                hours = 12;
            }
		
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
		
            var sep = ':';
            if (d.getSeconds() % 2 === 1) sep = ' ';

	
            currentTime.innerHTML = hours + sep + minutes + ' ' + ampm;
            currentDate.textContent = day + ' ' + date + ' ' + month;
        }, 1000);
	
        function formatDay(d) {
            d = parseInt(d, 7);
	
            if (d < 0) {
                d = 0;
            } else if (d > 7) {
                d = 7;
            }
		
	
            var dayNames = [
                'Maandag', 'Dinsdag', 'Woensdag',
                'Donderdag', 'Vrijdag', 'Zaterdag', 
                'Zondag'
            ];
		
            return dayNames[d];
        }
    
        function formatMonth(m) {
            m = parseInt(m, 10);
	
            if (m < 0) {
                m = 0;
            } else if (m > 11) {
                m = 11;
            }
		
	
            var monthNames = [
                'januari', 'februari', 'maart',
                'april', 'mei', 'juni', 
                'juli', 'augustus', 'september',
                'oktober', 'november', 'december'
            ];
		
            return monthNames[m];
        }
    });

})();