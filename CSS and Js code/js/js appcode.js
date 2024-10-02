function timeShow(){
    var timeDate = new Date();
    var h=timeDate.getHours();
    var m=timeDate.getMinutes();
    var s=timeDate.getSeconds();
    var d=timeDate.getDay();
    if(h<10){
        h="0"+h;
    }

    if(m<10){
        m="0"+m;
    }

    if(s<10){
        s="0"+s;
    }
    var mounth = timeDate.getMonth();
    var month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var convert1=month_name[mounth];
    var names_of_days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var convert2=names_of_days[d];
    document.getElementById("mounths").textContent = convert1;
    document.getElementById("hours").textContent = h;
    document.getElementById("minuts").textContent = m;
    document.getElementById("seconds").textContent = s;
    document.getElementById("weak-day").textContent = convert2;
    document.getElementById("days").textContent = timeDate.getDate();
    document.getElementById("years").textContent = timeDate.getFullYear();
}
setInterval(timeShow,1000)
timeShow();