function joinClass() {
  document.getElementById('confirmation').style.display = 'block';
  startTimer();
}



function startTimer() {
  var countDownDate = new Date("Nov 20, 2023 00:00:00").getTime(); // Replace with your desired date

  var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = days + "day(s) " + hours + "hrs " + minutes + "min " + seconds + "secs ";

      if (distance < 0) {
          clearInterval(x);
          document.getElementById("timer").innerHTML = "EXPIRED";
      }
  }, 1000);
}
