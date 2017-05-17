$(document).ready(function() {

    //Geolocation chrome workaround
    $.getJSON("http://ip-api.com/json", function(data) {

        var lat = data.lat;
        var lon = data.lon;
        var APIurl = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=67f8f3179d30d7cc1eb92409e2332204&units=metric";

        //openWeatherMapApi

        $.getJSON(APIurl, function(json) {

            $("#location").html(json.name + ", " + json.sys.country);
            $("#temperature").html(Math.round(json.main.temp) + "°C");
            $("#description").html(json.weather[0].main);
            $("img").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");

            // USER HELP: TOGGLE --> $().hasClass(b).addClass(a).removeClass(b) if $().hasClass(a).addClass(b).removeClass(a)

            $("#toggle").on("click", function() {

                var farTemp = Math.round(json.main.temp * (9 / 5) + 32);
                var celsTemp = Math.round(json.main.temp);

                if ($("#toggle").hasClass("tempC")) {
                    $("#temperature").html(farTemp + "°F");
                    $("#toggle").addClass("tempF").removeClass("tempC");
                } else if ($("#toggle").hasClass("tempF")) {
                    $("#temperature").html(celsTemp + "°C");
                    $("#toggle").addClass("tempC").removeClass("tempF");
                }

            }); // end toggle click

        }); // End WeatherJSON

    }); // End geolocation

}); // End document.ready
