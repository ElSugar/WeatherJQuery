$(document).ready(function() {
  $.getJSON('current.city.list.json', function(data) {
    $('select').on('change', function() {
      var out='';
      for (var key in data) {
        if (data[key].country==$('select option:selected').val()) {
          out += `<p value="${data[key].id}">${data[key].name}</p>`;
        }
      }
      $('#city').html(out);
      $('#city p').on('click', function(){
        $.get(
          "api.openweathermap.org/data/2.5/weather",
          {
            "id": $(this).attr('value'),
            "appid": "f616afccbe8d4877daef3e9161357d4a"
          },
            function(data) {
              let out='';
              out += 'Weather: <b>'+data.weather[0].main+'</b><br>';
              out += '<p style="text-align:center"><img src="openweathermap.org/img/w/'+data.weather[0].icon+'.png"></p>';
              out += 'Temprature: <b>'+Math.round(data.main.temp-273)+'&#176;C</b><br>';
              out += 'Humidity: <b>'+data.main.humidity+'%</b><br>';
              console.log(data.main);
              $('#weather').html(out);
            }
        );
      });
    });
  });
});