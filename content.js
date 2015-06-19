function className() {
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

}



console.log(className());

var refreshClass = setInterval(className, 2000);