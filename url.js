function OpenPage() {
    "use strict";
    var crn = document.getElementById("c1").value,
        ksu = "https://keys.kent.edu/ePROD/bwckschd.p_disp_detail_sched?term_in=201580&crn_in=",
        url = ksu + crn;
    window.open(url, '_blank');

}
