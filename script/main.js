var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

<<<<<<< HEAD
var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime () {
    var now = new Date
  
    var lastHours = last.getHours().toString()
    var nowHours = now.getHours().toString()
    if (lastHours !== nowHours) {
        updateContainer(hoursContainer, nowHours)
    }
  
    var lastMinutes = last.getMinutes().toString()
    var nowMinutes = now.getMinutes().toString()
    if (lastMinutes !== nowMinutes) {
        updateContainer(minutesContainer, nowMinutes)
    }
  
    var lastSeconds = last.getSeconds().toString()
    var nowSeconds = now.getSeconds().toString()
    if (lastSeconds !== nowSeconds) {
        //tick()
        updateContainer(secondsContainer, nowSeconds)
    }
  
    last = now
}

function tick () {
    tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
    var time = newTime.split('')
  
    if (time.length === 1) {
        time.unshift('0')
    }
  
  
    var first = container.firstElementChild
    if (first.lastElementChild.textContent !== time[0]) {
        updateNumber(first, time[0])
    }
  
    var last = container.lastElementChild
    if (last.lastElementChild.textContent !== time[1]) {
        updateNumber(last, time[1])
    }
}

function updateNumber (element, number) {
    //element.lastElementChild.textContent = number
    var second = element.lastElementChild.cloneNode(true)
    second.textContent = number
  
    element.appendChild(second)
    element.classList.add('move')

    setTimeout(function () {
        element.classList.remove('move')
    }, 990)
    setTimeout(function () {
        element.removeChild(element.firstElementChild)
    }, 990)
}

setInterval(updateTime, 100)

document.addEventListener('DOMContentLoaded', function () {
=======
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
>>>>>>> parent of ab83da7... Changed content
    
    updateTime () 

        function updateTime () {
            var now = new Date();
            var hours = now.getHours();

<<<<<<< HEAD
        
            //7-18 dag
            if (hours > 17 || hours < 7) {
                document.getElementById("body").style.backgroundColor = "#28314b";
            }
        
        
            //19-6 night
            else if (hours > 6 && hours < 18) {
                document.getElementById("body").style.backgroundColor = "#97caef";
            }
        
            else 
                document.getElementById("body").style.backgroundColor = "#000000";
            
            }
       
});
=======

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
>>>>>>> parent of ab83da7... Changed content
