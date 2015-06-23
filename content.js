/*function className() {
    "use strict";

    $("tr:nth-child(1)").each(function (index) {
        var str = $(this).html(),
            clean = str.replace(/(<th[^>]*>|<\/th>|<br>)/g, "");
        if (index === 2) {
            console.log('Class : ' + clean);
        }
    });


    $("td:nth-child(n)").each(function (index) {
        var str = $(this).html();
        if (index === 10) {

            console.log('Seats : ' + str);
        }

    });

}*/

/*addButton("Test Message", function() {
  chrome.runtime.sendMessage({testResponse: true}, function(whatdo) {
    log("Will this work: " + whatdo);
  });
});*/

console.log("I am popup.js");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == "hello")
        console.log("hello recieved");
      sendResponse({ msg: "goodbye!"});
  });

/* I tried to condense things but it didn't work.
function classAlso() {
    "use strict";
    var classTitle = $("th:nth-child(1)").html(),
        cleanTitle = classTitle.replace(/(<th[^>]*>|<\/th>|<br>)/g, ""),
        classSeats = $("td:nth-child(11)").html();
    console.log("Whats this? : " + cleanTitle + " Seats: " + classSeats);
}
*/




/*$(function () {
    "use strict";
    refreshPage();

});

function refreshPage() {
    setTimeout(refreshPage, 1000);
    $.get(location.href, function(data) {
        $("tr:nth-child(1)").each(function (index) {
            var str = $(this).html(),
                clean = str.replace(/(<th[^>]*>|<\/th>|<br>)/g, "");
            if (index === 2) {
                console.log('Does it work : ' + clean);
            }
        });
        console.log("refresh test").


    });
}*/
/*
console.log(className());*/


