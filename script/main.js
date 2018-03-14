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
    
    document.addEventListener('DOMContentLoaded', function () {
        var now = new Date();
        var hours = now.getHours();


        //18-20 night
        if (hours > 17 && hours < 21){
            document.getElementById("body").style.backgroundColor = "orange";
            document.getElementById("body").style.backgroundSize = "cover";
        }
        
        
        //21-5 night
        else if (hours > 20 || hours < 6){
            document.getElementById("body").style.backgroundColor= "darkblue";
            document.getElementById("body").style.backgroundSize = "cover";
        }

        //9-17 day
        else if (hours > 8 && hours < 18){
            document.getElementById("body").style.backgroundImage = "url('../images/day.jpg')";
            document.getElementById("body").style.backgroundSize = "cover";
        }

        //6-8 day
        else if (hours > 5 && hours < 9){
            document.getElementById("body").style.backgroundColor= "lightblue";
            document.getElementById("body").style.backgroundSize = "cover";
        }
        else {
            document.write ('<body style="background-color: white">');
            document.getElementById("body").style.backgroundSize = "cover";
        }
        
    });
                              
    
})();