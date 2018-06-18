(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var currentTime = document.getElementById('time'),
		currentDate = document.getElementById('date');
	
	setInterval(function() {
		var d = new Date();
	
		var hours = d.getHours(),
			minutes = d.getMinutes(),
            seconds = d.getSeconds(),
            weekday = formatDay(d.getDay()),
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
        
        if (seconds < 10) {
			seconds = '0' + seconds;
		}
		
		var sepClass = '';
		if (d.getSeconds() % 2 === 1) sepClass = 'trans';
		
		var sep = '<span class="' + sepClass + '">:</span>';
	
		currentTime.innerHTML = hours + sep + minutes + sep + seconds + ' ' + ampm;
		currentDate.textContent = weekday + ' ' + date + ' ' + month;
	}, 1000);
	
	function formatMonth(m) {
		m = parseInt(m, 10);
	
		if (m < 0) {
			m = 0;
		} else if (m > 11) {
			m = 11;
		}
	
		var monthNames = [
			'January', 'February', 'March',
			'April', 'May', 'June', 
			'July', 'August', 'September',
			'October', 'November', 'December'
		];
		
		return monthNames[m];
	}
    
    function formatDay(m) {
		m = parseInt(m, 10);
	
		if (m < 0) {
			m = 0;
		} else if (m > 6) {
			m = 6;
		}
	
		var dayNames = [
			'Sunday', 'Monday', 'Tuesday',
			'Wednesday', 'Thursday', 'Friday', 
			'Saturday'
		];
		
		return dayNames[m];
	}
});


})();


document.addEventListener('DOMContentLoaded', function () {
    
    updateTime () 

        function updateTime () {
            var now = new Date();
            var hours = now.getHours();

        
            //7-18 dag
            if (hours > 17 || hours < 7) {
                document.getElementById("body").style.backgroundImage = "url('images/night.png')"; 
                document.getElementById("body").style.backgroundColor = "#28314b";
                document.getElementById("greet").innerHTML = "Have a good night.";
                document.getElementById("greet").style.color = "#FFED00";
                document.getElementById("time").style.color = "#FFED00";
                document.getElementById("date").style.color = "#FFED00";
                document.getElementById("sun").style.display = "none";
                document.getElementById("moon").style.display = "initial";
                var moonOpacity = document.getElementById("moon");
                TweenMax.to (moon, 1, {
                    opacity: 0.3,
                    repeat: -1,
                    ease: Linear.easeInOut,
                    yoyo: true,

                });  
            }
        
        
            //19-6 night
            else if (hours > 6 && hours < 18) {
                document.getElementById("body").style.backgroundImage = "url('images/day.png')"; // laat de day2.jpg background zien
                document.getElementById("body").style.backgroundColor = "#97caef";
                document.getElementById("greet").innerHTML = "Have a good day.";
                document.getElementById("greet").style.color = "#F39200";
                document.getElementById("time").style.color = "#F39200";
                document.getElementById("date").style.color = "#F39200";
                document.getElementById("sun").style.display = "initial";
                document.getElementById("moon").style.display = "none";
                var sunOpacity = document.getElementById("sun");
                TweenMax.to (sun, 1, {
                    opacity: 0.3,
                    repeat: -1,
                    ease: Linear.easeInOut,
                    yoyo: true,

                });
            }
        
            else 
                document.getElementById("body").style.backgroundColor = "#000000";
            
            }
       
});




//tweenmax moon opacity animatie
