$(document).ready(function() {
  $.get(
    "http://api.openweathermap.org/data/2.5/weather",
    {
      "id": "524894",
      "appid": "f616afccbe8d4877daef3e9161357d4a",
    },
    function(data) {
      console.log(data);
    }
  )
})