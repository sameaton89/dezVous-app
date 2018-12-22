$("#submit").on("click", function(){
    event.preventDefault();
    var q1 = $("#q1").serializeArray()[0].value;
    var q2 = $("#q2").serializeArray()[0].value;
    var q3 = $("#q3").serializeArray()[0].value;    
    if        (q1 === "yes" && q2 === "no" && q3 === "no"){
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

// var fuckItUp = function() {
//     for (var i = 0; i < 5; i++) {
//         var resultsDiv = $("<div class='card-panel transbox center-align'>");
//         var p = $("<p class='fuck-my-shit-up-fam'>").html("Name: " + results[i].name + "<br>");
//         var q = $("<p class='this-is-the-shit-fam'>").html("Address: " + results[i].address + "<br>Phone Number: " + results[i].phone_number + "<br>Website: " + results[i].website);
//         resultsDiv.append(p);
//         resultsDiv.append(q);
// };

var pullVenue = function() {
   $.ajax ({
       method: "GET",
       url: "/api/venue"
   }).then(function(results) {
       console.log(results);
    for (var i = 0; i < 5; i++) {
        var resultsDiv = $("<div class='card-panel transbox center-align'>");
        var p = $("<p class='fuck-my-shit-up-fam'>").html(results[i].name + "<br>");
        var q = $("<p class='this-is-the-shit-fam'>").html("<strong>Address: </strong>" + results[i].address + "<br><strong>Phone Number:</strong> " + results[i].phone_number + "<br><strong>Website:</strong> " + results[i].website);
        resultsDiv.append(p);
        resultsDiv.append(q);
        $("#venue-results").append(resultsDiv);

    }
    var venues = $("<h2 class='center-align'>").html("Venues");
    $("#venue-title").html(venues);
   });
}

var pullFood = function() {
    $.ajax ({
        method: "GET",
        url: "/api/food"
    }).then(function(results) {
        console.log(results);
        for (var i = 0; i < 5; i++) {
            var resultsDiv = $("<div class='card-panel transbox center-align'>");
            var p = $("<p class='fuck-my-shit-up-fam'>").html("Name: " + results[i].name + "<br>");
            var q = $("<p class='this-is-the-shit-fam'>").html("Address: " + results[i].address + "<br>Phone Number: " + results[i].phone_number + "<br>Website: " + results[i].website);
            resultsDiv.append(p);
            resultsDiv.append(q);
            $("#food-results").append(resultsDiv);
    
        }    });
        var caterers = $("<h2 class='center-align'>").html("<strong>Caterers");
        $("#food-title").html(caterers);

 }
 var pullDecor = function() {
    $.ajax ({
        method: "GET",
        url: "/api/decor"
    }).then(function(results) {
        console.log(results);
        for (var i = 0; i < 5; i++) {
            var resultsDiv = $("<div class='card-panel transbox center-align'>");
            var p = $("<p class='fuck-my-shit-up-fam'>").html("Name: " + results[i].name + "<br>");
            var q = $("<p class='this-is-the-shit-fam'>").html("Address: " + results[i].address + "<br>Phone Number: " + results[i].phone_number + "<br>Website: " + results[i].website);
            resultsDiv.append(p);
            resultsDiv.append(q);
            $("#decor-results").append(resultsDiv);

        }    });
        var decorators = $("<h2 class='center-align'>").html("<strong>Decorating Services & Equipment Rental");
        $("#decor-title").html(decorators);
 }