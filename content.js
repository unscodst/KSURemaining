/*
var className = $('th.ddlabel:nth-child(1)').text();
alert('Class: ' + className);
console.log(className);
*/

$("tr:nth-child(1)").each(function (index) {
    if (index == 2) alert('Class : ' + $(this).html());
});


/*$(document).on("click", ".btn", function (e) {    
    $('.content > table td').each(function(index){
        if(index == 4) alert($(this).text());
    });
});*/