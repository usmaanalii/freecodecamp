$(document).ready(function() {

    $("#clearButton").on("click", function() {
        $("#searchBar").val("");
        $("#searchResults").html("");

    }); // End Clear Button

    $("#randomButton").on("click", function() {
        window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");

    }); // End Random Button

    $("#wikiButton").on("click", function() {

        var searchVal = document.getElementById("searchBar").value;

        $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + encodeURIComponent(searchVal) + "&callback=?", function(data) {

            if (searchVal.length < 1) {
                $("#searchResults").html("");
            }

            // Adding the search results to the results area

            var resultNames = data[1];
            var resultNamesList = [];

            for (var i = 0; i < resultNames.length; i++) {
                resultNamesList.push("<a target='_blank' href=" + data[3][i] + ">" + "<div id='textBox'>" + "<u><b style='font-size: 110%'>" + data[1][i] + "</b></u>" + "<br>" + data[2][i] + "</div>" + "</a>" + "<br><br>");
            } // End for loop

            $("#searchResults").html(resultNamesList);

        }); // End Wiki API
    }); // End Wiki Search button

}); // End document.ready
