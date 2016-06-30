$(document).ready(function(){
  console.log("Page Loaded!");
  $('button').click(function(){
    function updateTime(){
        var currentTime = new Date()
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        var seconds = currentTime.getSeconds()
        if (minutes < 10){
            minutes = "0" + minutes
        }
        if (seconds < 10){
          seconds = "0" + seconds
        }
        var t_str = (hours % 12) + ":" + minutes + ":" + seconds + " ";
        if(hours > 11){
            t_str += "PM";
        } else {
            t_str += "AM";
        }
        document.getElementById('time_div').innerHTML = t_str;
      }

      $('#intro-message').html("<h3 align='center'>I'm always happy to make time for you!</h3>")
      $('#intro-message').append('<div align="center" id="time_div"></div>')
      updateTime()
      setInterval(updateTime, 1000);
      $('#intro-message').append("<h3 align='center'>Happy Birthday, Dad!</h3>")



  })
})
