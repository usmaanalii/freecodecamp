// Need to fix the 'undefined' names
/* FIX ... --> http://forum.freecodecamp.com/t/twitch-project-problem/35183/8
 */

$(document).ready(function() {

    var array = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

    for (var i = 0; i < array.length; i++) {
        var apiCall = "https://api.twitch.tv/kraken/channels/" + array[i] + "?client_id=k1i2e1f36x8noimivhcdazeguby6nv2&callback=?";

        /*FIX*/
        (function(channel) {

            $.getJSON(apiCall, function(data) {

                // Online Data
                var image = data.logo;
                var url = data.url;
                var imageLink = "<a target='_blank' href =" + url + ">" + "<img class='imageStyle' src='" + image + "' height='63' width='63'>" + "</a>";
                var name = data.display_name || array[i];
                var description = data.status;
                var onlineHtml = "<div class='single-user online row'>" +
                    "<div id='logo' class='col-xs-2'>" + imageLink + "</div>" + "<div id='user' class='col-xs-3'><strong>" + name + "</strong></div>" + "<div id='stream' class='col-xs-6'><em>" + description + "</em></div>" + "</div>";

                // Offline Data || Closed Data
                var dummyImage = "http://d24n3vvb35g16.cloudfront.net/assets/negative-space/user-placeholder-cff7112a024d96e32677ff61f0d435c1.png";
                var dummyImageLink = "<img class='imageStyle' src='" + dummyImage + "' height='63' width='63'>";
                var closedDescription = data.message;
                var offlineDescription = "Offline";
                var offlineHtml = "<div class='single-user offline row'>" +
                    "<div id='logo' class='col-xs-2'>" + imageLink + "</div>" + "<div id='user' class='col-xs-3'><strong>" + name + "</strong></div>" + "<div id='stream' class='col-xs-6'><em>" + offlineDescription + "</em></div>" + "</div>";

                var closedHtml = "<div class='single-user closed row'>" +
                    "<div id='logo' class='col-xs-2'>" + dummyImageLink + "</div>" + "<div id='user' class='col-xs-3'><strong>" + /*FIX*/ channel + "</strong></div>" + "<div id='stream' class='col-xs-6'><em>" + closedDescription + "</em></div>" + "</div>";
                if (description == 404 || description == 422) {

                    $("#userArea").append(closedHtml);

                } else if (description === null) {
                    $("#userArea").append(offlineHtml);

                } else {
                    $("#userArea").prepend(onlineHtml);

                }

            });
        }) /*FIX*/ (array[i]);
    }

    // Button clickers
    $("#online").on("click", function() {
        $(".online").show();
        $(".offline").hide();
        $(".closed").hide();

    });

    $("#all").on("click", function() {
        $(".online").show();
        $(".offline").show();
        $(".closed").show();

    });

    $("#offline").on("click", function() {
        $(".online").hide();
        $(".offline").show();
        $(".closed").hide();
    });

});
