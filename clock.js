const month = [ 
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const wek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];


function betterMinutes(d) {
    return (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
};

function betterSeconds(d) {
    return (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
};

function betterMilliseconds(d) {
    return String("00"+d.getMilliseconds()).slice(-3) 
};

var dhour12
function clocc(){
    var d = new Date()
    var m = month[d.getMonth()];
    var dHour24 = d.getHours();
    var dHour12 = dHour24;
    var dMeridiem = "AM";
    var w = wek[d.getDay()]

    if(dHour24 >= 13) {
        dHour12 = dHour24 -12;
        dMeridiem = "PM";
    };

    if(dHour24 = 12){
        dMeridiem = "PM"
    }
    
    document.querySelector("#dt").innerHTML = m + " " +d.getDate()+" "+(d.getFullYear());
    document.querySelector("#dis").innerHTML = `${dHour12}:${betterMinutes(d)} ${dMeridiem}`;
    document.querySelector("#sec").innerHTML = `${betterSeconds(d)}.${betterMilliseconds(d)}`;
    document.querySelector("#wek").innerHTML = w
};

function button() {
      if(document.querySelector("#container").style.borderColor === "white") { 
        document.querySelector("#container").style.borderColor = "#00FF01";
        document.querySelector("#container").style.color = "#00FF01";
        document.querySelector("#yeet").style.color = "#00FF01";
        document.querySelector("#yeet2").style.color= "#00FF01";
      }
      else {
        document.querySelector("#container").style.borderColor = "white";
        document.querySelector("#container").style.color = "white";
        document.querySelector("#yeet").style.color = "white";
        document.querySelector("#yeet2").style.color= "white"
      }
};   

    var interval = setInterval(function(){clocc()}, 17);

