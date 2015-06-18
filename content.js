$("tr:nth-child(1)").each(function (index) {
    var str = $(this).html();
    var clean = str.replace(/(<th[^>]*>|<\/th>|<br>)/g, "");
    
    if (index == 2) alert('Class : ' + clean);
});

$("td:nth-child(n)").each(function (index) {
    var str = $(this).html();
    var clean = str.replace(/(<th[^>]*>|<\/th>|<br>)/g, "");
    
    if (index == 10) alert('Seats : ' + str);
});
