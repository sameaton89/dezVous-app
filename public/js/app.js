$("#submit").on("click", function(){
    event.preventDefault();
    var q1 = $("#q1").serializeArray()[0].value;
    var q2 = $("#q2").serializeArray()[0].value;
    var q3 = $("#q3").serializeArray()[0].value;    
    if (q1 === "yes" && q2 === "no" && q3 === "no"){
        // console.log("yes no no");
        pullVenue();
    } else if (q1 === "no" && q2 === "yes" && q3 === "no"){
        // console.log("no yes no");
        pullFood();
    } else if (q1 === "no" && q2 === "no" && q3 === "yes"){
        // console.log("no no yes");
        pullDecor();
    } else if (q1 === "yes" && q2 === "yes" && q3 === "no"){
        // console.log("yes yes no");
        pullVenue();
        pullFood();
    } else if (q1 === "yes" && q2 === "no" && q3 === "yes"){
        // console.log("yes no yes");
        pullVenue();
        pullDecor();
    } else if (q1 === "no" && q2 === "yes" && q3 === "yes"){
        // console.log("no yes yes");
        pullFood();
        pullDecor();
    } else if (q1 === "yes" && q2 === "yes" && q3 === "yes"){
        // console.log("yes yes yes");
        pullFood();
        pullVenue();
        pullDecor();
    }
});

var pullVenue = function() {
   $.ajax ({
       method: "GET",
       url: "/api/venue"
   }).then(function(results) {
    //    console.log(results);
    //    console.log(results[0]);
    // var results = results.data;
    for (var i = 0; i < results.length; i++) {
        var resultsDiv = $("<div>");
        var p = $("<p>").html("Name: " + results[i].name + "<br>Address: " + results[i].address + "<br>Phone Number: " + results[i].phone_number + "<br>Website: " + results[i].website);
        resultsDiv.append(p);
        $("#venue-results").append(resultsDiv);

    }
    var venues = $("<p>").html("<strong>Venues");
    $("#venue-title").html(venues);
   });
}

var pullFood = function() {
    $.ajax ({
        method: "GET",
        url: "/api/food"
    }).then(function(results) {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var resultsDiv = $("<div>");
            var p = $("<p>").html("Name: " + results[i].name + "<br>Address: " + results[i].address + "<br>Phone Number: " + results[i].phone_number + "<br>Website: " + results[i].website);
            resultsDiv.append(p);
            $("#food-results").append(resultsDiv);
    
        }    });
        var caterers = $("<p>").html("<strong>Caterers");
        $("#food-title").html(caterers);

 }
 var pullDecor = function() {
    $.ajax ({
        method: "GET",
        url: "/api/decor"
    }).then(function(results) {
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var resultsDiv = $("<div>");
            var p = $("<p>").html("Name: " + results[i].name + "<br>Address: " + results[i].address + "<br>Phone Number: " + results[i].phone_number + "<br>Website: " + results[i].website);
            resultsDiv.append(p);
            $("#decor-results").append(resultsDiv);

        }    });
        var decorators = $("<p>").html("<strong>Decorating Services & Equipment Rental");
        $("#decor-title").html(decorators);
 }