$("tr:nth-child(1)").each(function (index) {
    var str = $(this).html();
    var clean = str.replace(/(<th[^>]*>|<\/th>|<br>)/g, "");

    if (index == 2) console.log('Class : ' + clean);
});

$("td:nth-child(n)").each(function (index) {
    var str = $(this).html();
    if (index == 10) console.log('Seats : ' + str);

});



chrome.runtime.sendMessage({greeting: "hello"},
    function (response) {
    console.log(response.farewell);
});