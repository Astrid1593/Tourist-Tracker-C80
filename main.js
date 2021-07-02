var touristLog = [];
function logTourist(){
    touristLog.push(document.getElementById("addTouristInput").value);
    document.getElementById("touristNamesOnceLogged").innerHTML = touristLog;
    console.log(touristLog);
    console.log("User added a tourist to the array. Tourist's name is " + document.getElementById("addTouristInput").value);
}
function displayLog(){
    document.getElementById("displayTouristsH4").innerHTML = touristLog;
    console.log("User displayed log. This is what is displayed on screen:");
    console.log(touristLog);
}
function sortLog(){
    touristLog.sort();
    document.getElementById("displayTouristsH4").innerHTML = touristLog;
    console.log("User sorted the array displayed. What's on screen:");
    console.log(touristLog);
}
function searchLog(){
    var a = document.getElementById("searchLog").value;
    var timesFound = 0;
    var b;
    for(b = 0; b < touristLog.length; b++){
        if(a==touristLog[b]){
            timesFound = timesFound + 1;
        }
    }
    document.getElementById("timesFound").innerHTML = "Tourist found "+ timesFound + " time/s.";
    console.log("User searched for tourist named " + document.getElementById("timesFound") + ". This tourist was found " + timesFound + " time/s");
}