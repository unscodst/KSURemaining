function showIndex() {
    "use strict";
    var crn = document.getElementById("c1").value,
        ksu = "https://keys.kent.edu/ePROD/bwckschd.p_disp_detail_sched?term_in=201580&crn_in=",
        index_url = ksu + crn;
    chrome.tabs.create({url: index_url});
}

document.getElementById('submit').addEventListener("click", showIndex);