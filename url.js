function showIndex() {
    "use strict";
    var crn = document.getElementById("c1").value,
        ksu = "https://keys.kent.edu/ePROD/bwckschd.p_disp_detail_sched?term_in=201580&crn_in=",
        index_url = ksu + crn;
    chrome.tabs.create({url: index_url});
}
document.getElementById('submit').addEventListener("click", showIndex);

function tutorial() {
    "use strict";
    var tut = "https://youtu.be/b3utCM0zH5I";
    chrome.tabs.create({url: tut});
}
document.getElementById('tut').addEventListener("click", tutorial);





var options = {
    type: "basic",
    title: "KSU Remaining",
    message: "Class: " + "Seats Remaining: ",
    iconUrl: "icon.png"
};

chrome.notifications.create(options, callback);
function callback() {
    console.log('Notification test');
}

