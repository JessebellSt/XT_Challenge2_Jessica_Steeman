(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function updateClock () {
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
                'Zondag', 'Maandag', 'Dinsdag', 'Woensdag',
                'Donderdag', 'Vrijdag', 'Zaterdag'
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
        
        timeline.call(updateClock)
			.from('#time', 0.7, { opacity: 0})
			.to('#time', 0.3, { opacity: 100});
        
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        var now = new Date();
        var hours = now.getHours();

        
        //19-6 night
        if (hours > 18 && hours < 7){
            document.getElementById("body").style.backgroundImage = "url('../images/londonnight.jpg')";
            document.getElementById("body").style.backgroundSize = "1500px 900px";
            document.getElementById("body").style.backgroundColor = "darkblue";
        }
        
        
        //7-18 dag
        else if (hours > 6|| hours < 19){
            document.getElementById("body").style.backgroundImage = "url('../images/londonday.jpg')";
            document.getElementById("body").style.backgroundSize = "1500px 900px";
            document.getElementById("body").style.backgroundColor = "lightblue";
        }
       
       
    });
                              
    
})();
