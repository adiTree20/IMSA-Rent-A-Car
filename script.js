// JavaScript Sheet

var i = 0;
var counter = 0;
var id = 0;

if(document.URL.includes("luxuryCars.html") || document.URL.includes("economyCars.html")) {
  counter = 1;
}

if(document.URL.includes("timeframe.html")) {
  counter = 2;
}

if(document.URL.includes("location.html")) {
  counter = 3;
}

if(document.URL.includes("checkout.html")) {
  counter = 4;
}

var width = (counter - 1) * 25;
var elem = document.getElementById("myProgress");

// Frame function which runs the progress bar
function startPos() {
  id = setInterval(frame,10);
}

function frame() {
  if (width >= (counter * 25)) {
    clearInterval(id);
    i = 0;
  }
  else {
    width++;
    document.getElementById("myProgress").style.width = width + "%";
  }
}


pauseplayNum = 0
carName = "";
carImage = "";

//LuxuryCars Pause/Play Function that is ran when the a car-image is clicked
function luxPausePlay(clicked_id, clicked_class) {
    x = document.getElementById("luxTable"); 
    carLabel = document.getElementById("currentLuxCar");
    sessionStorage.setItem("priceOfCar", "49.99");

    if (pauseplayNum % 2 == 0) {
        pause(clicked_class);
        pauseplayNum += 1;
        
        if (clicked_id == "lambo") {
            x.innerHTML = "<tr><th class='luxTh'>0-62 mph</th><th class='luxTh'>Top Speed</th><th class='luxTh'>Max Power</th><th class='luxTh'>Max Torque</th><th class='luxTh'>Steering Type</th><th class='luxTh'>Features</th><th class='luxTh'>Seating Capacity</th><th class='luxTh'>Weight-To-Power Ratio</th><th class='luxTh'>Rent per Day</th></tr><tr><td class='luxTd'>2.9 seconds</td><td class='luxTd'>221 mph</td><td class='luxTd'>552 kW @ 8.400 rpm</td><td class='luxTd'>507 lb.-ft. @ 5.500 rpm</td><td class='luxTd'>Hydraulic Assist</td><td class='luxTd'>Opening Roof, Heating Mirrors</td><td class='luxTd'>2 seats</td><td class='luxTd'>4.35 lb/CV</td><td class='luxTd'>$49.99</td></tr>";
            carLabel.innerHTML = "Lamborghini Veneno";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "tesla") {
            x.innerHTML = "<tr><th class='luxTh'>0-60 mph</th><th class='luxTh'>Top Speed</th><th class='luxTh'>Range</th><th class='luxTh'>Battery</th><th class='luxTh'>Power</th><th class='luxTh'>Cargo Space</th><th class='luxTh'>Seating Capacity</th><th class='luxTh'>Charging</th><th class='luxTh'>Rent per Day</th></tr><tr><td class='luxTd'>4.4 seconds</td><td class='luxTd'>155 mph</td><td class='luxTd'>351 miles</td><td class='luxTd'>100 kWh</td><td class='luxTd'>417 hP</td><td class='luxTd'>88 cu feet</td><td class='luxTd'>5 seats</td><td class='luxTd'>200 kW max</td><td class='luxTd'>$49.99</td></tr>";
            carLabel.innerHTML = "Tesla Model X";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "ferrari") {
            x.innerHTML = "<tr><th class='luxTh'>0-60 mph</th><th class='luxTh'>Top Speed</th><th class='luxTh'>Torque</th><th class='luxTh'>Horsepower</th><th class='luxTh'>Length/Width</th><th class='luxTh'>Weight</th><th class='luxTh'>Power</th><th class='luxTh'>Seating Capacity</th><th class='luxTh'>Rent per Day</th></tr><tr><td class='luxTd'>2.6 seconds</td><td class='luxTd'>217 mph</td><td class='luxTd'>664 lb-ft</td><td class='luxTd'>949 hp @ 9000 rpm</td><td class='luxTd'>4,702mm long<br>1,992mm wide</td><td class='luxTd'>1255kg</td><td class='luxTd'>950bhp</td><td class='luxTd'>2 seats</td><td class='luxTd'>$49.99</td></tr>";
            carLabel.innerHTML = "Ferrari LaFerrari";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "bugatti") {
            x.innerHTML = "<tr><th class='luxTh'>0-100 km/h</th><th class='luxTh'>Top Speed</th><th class='luxTh'>Torque</th><th class='luxTh'>Horsepower</th><th class='luxTh'>Length/Width</th><th class='luxTh'>Weight</th><th class='luxTh'>Power</th><th class='luxTh'>Seating Capacity</th><th class='luxTh'>Rent per Day</th></tr><tr><td class='luxTd'>2.4 seconds</td><td class='luxTd'>217 mph</td><td class='luxTd'>1,180 lb-ft @ 2,000-6,000 rpm</td><td class='luxTd'>1,480 hp</td><td class='luxTd'>4,641mm long<br>2,018mm wide</td><td class='luxTd'>1,960kg</td><td class='luxTd'>1,479 hp @ 6,900 rpm</td><td class='luxTd'>2 seats</td><td class='luxTd'>$49.99</td></tr>";
            carLabel.innerHTML = "Bugatti Divo";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "mercedesbenz") {
            x.innerHTML = "<tr><th class='luxTh'>0-60 mph</th><th class='luxTh'>Top Speed</th><th class='luxTh'>Torque</th><th class='luxTh'>Horsepower</th><th class='luxTh'>Length/Width</th><th class='luxTh'>Weight</th><th class='luxTh'>Power</th><th class='luxTh'>Seating Capacity</th><th class='luxTh'>Rent per Day</th></tr><tr><td class='luxTd'>6.6 seconds</td><td class='luxTd'>128 mph</td><td class='luxTd'>273 @ 1800rpm</td><td class='luxTd'>255 @ 5800rpm</td><td class='luxTd'>194.3in long<br>76.7in wide</td><td class='luxTd'>2155kg</td><td class='luxTd'>255 hp @ 6100 rpm</td><td class='luxTd'>5 seats</td><td class='luxTd'>$49.99</td></tr>";
            carLabel.innerHTML = "Mercedes-Benz GLE";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }

        x.style.opacity = "1";
        carLabel.style.opacity = "1";
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("luxTh")[i];
            y.style.opacity = "1";
        }
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("luxTd")[i];
            y.style.opacity = "1";
        }
    }
    else {
        play(clicked_class);
        pauseplayNum += 1;
        
        carLabel.style.opacity = "0";
        carLabel.innerHTML = "";

        x.style.opacity = "0";
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("luxTh")[i];
            y.style.opacity = "0";
        }
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("luxTd")[i];
            y.style.opacity = "0";
        }
        x.innerHTML = "";
    }
}

// EconomyCars Pause/Play Function that is ran when the a car-image is clicked
function ecoPausePlay(clicked_id, clicked_class) {
    x = document.getElementById("ecoTable"); 
    carLabel = document.getElementById("currentEcoCar");
    sessionStorage.setItem("priceOfCar", "29.99");

    if (pauseplayNum % 2 == 0) {
        pause(clicked_class);
        pauseplayNum += 1;
        
        if (clicked_id == "toyota") {
            x.innerHTML = "<tr><th class='ecoTh'>0-60 mph</th><th class='ecoTh'>Top Speed</th><th class='ecoTh'>Torque</th><th class='ecoTh'>Horsepower</th><th class='ecoTh'>Length/Width</th><th class='ecoTh'>Weight</th><th class='ecoTh'>Displacement</th><th class='ecoTh'>Seating Capacity</th><th class='ecoTh'>Rent per Day</th></tr><tr><td class='ecoTd'>6.2 seconds</td><td class='ecoTd'>143 mph</td><td class='ecoTd'>103 @ 4000</td><td class='ecoTd'>106 @ 6000</td><td class='ecoTd'>171.2in long<br>66.7in wide</td><td class='ecoTd'>2482lb</td><td class='ecoTd'>1.5 L/91</td><td class='ecoTd'>5 seats</td><td class='ecoTd'>$29.99</td></tr>";
            carLabel.innerHTML = "Toyota Yaris";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "hyundai") {
            x.innerHTML = "<tr><th class='ecoTh'>0-60 mph</th><th class='ecoTh'>Top Speed</th><th class='ecoTh'>Torque</th><th class='ecoTh'>Horsepower</th><th class='ecoTh'>Length/Width</th><th class='ecoTh'>Weight</th><th class='ecoTh'>Displacement</th><th class='ecoTh'>Seating Capacity</th><th class='ecoTh'>Rent per Day</th></tr><tr><td class='ecoTd'>7.5 seconds</td><td class='ecoTd'>120 mph</td><td class='ecoTd'>113 lb-ft @ 4500 rpm</td><td class='ecoTd'>120 hp @ 6300 rpm</td><td class='ecoTd'>172.6in long<br>68.1in wide</td><td class='ecoTd'>2523lb</td><td class='ecoTd'>1.6 L/98</td><td class='ecoTd'>5 seats</td><td class='ecoTd'>$29.99</td></tr>";
            carLabel.innerHTML = "Hyundai Accent";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "nissan") {
            x.innerHTML = "<tr><th class='ecoTh'>0-60 mph</th><th class='ecoTh'>Top Speed</th><th class='ecoTh'>Torque</th><th class='ecoTh'>Horsepower</th><th class='ecoTh'>Length/Width</th><th class='ecoTh'>Weight</th><th class='ecoTh'>Displacement</th><th class='ecoTh'>Seating Capacity</th><th class='ecoTh'>Rent per Day</th></tr><tr><td class='ecoTd'>10.4 seconds</td><td class='ecoTd'>115 mph</td><td class='ecoTd'>114 @ 4000 rpm</td><td class='ecoTd'>122 @ 6000</td><td class='ecoTd'>177.0in long<br>68.5in wide</td><td class='ecoTd'>2697lb</td><td class='ecoTd'>1.6 L/98</td><td class='ecoTd'>5 seats</td><td class='ecoTd'>$29.99</td></tr>";
            carLabel.innerHTML = "Nissan Versa";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "honda") {
            x.innerHTML = "<tr><th class='ecoTh'>0-100 km/h</th><th class='ecoTh'>Top Speed</th><th class='ecoTh'>Torque</th><th class='ecoTh'>Horsepower</th><th class='ecoTh'>Length/Width</th><th class='ecoTh'>Weight</th><th class='ecoTh'>Displacement</th><th class='ecoTh'>Seating Capacity</th><th class='ecoTh'>Rent per Day</th></tr><tr><td class='ecoTd'>7.5 seconds</td><td class='ecoTd'>126 mph</td><td class='ecoTd'>138 @ 4200</td><td class='ecoTd'>158 @ 6500</td><td class='ecoTd'>184.0in long<br>70.9in wide</td><td class='ecoTd'>3054lb</td><td class='ecoTd'>2.0 L/122</td><td class='ecoTd'>5 seats</td><td class='ecoTd'>$29.99</td></tr>";
            carLabel.innerHTML = "Honda Civic";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }
        else if (clicked_id == "kia") {
            x.innerHTML = "<tr><th class='ecoTh'>0-60 mph</th><th class='ecoTh'>Top Speed</th><th class='ecoTh'>Torque</th><th class='ecoTh'>Horsepower</th><th class='ecoTh'>Length/Width</th><th class='ecoTh'>Weight</th><th class='ecoTh'>Displacement</th><th class='ecoTh'>Seating Capacity</th><th class='ecoTh'>Rent per Day</th></tr><tr><td class='ecoTd'>8.1 seconds</td><td class='ecoTd'>123 mph</td><td class='ecoTd'>132 @ 4500 rpm</td><td class='ecoTd'>147 @ 6200</td><td class='ecoTd'>182.7in long<br>70.9in wide</td><td class='ecoTd'>2897lb</td><td class='ecoTd'>2.0 L/122</td><td class='ecoTd'>5 seats</td><td class='ecoTd'>$29.99</td></tr>";
            carLabel.innerHTML = "Kia Forte";
            carName = carLabel.innerHTML;
            carImage = document.getElementById(clicked_id).src;
        }

        x.style.opacity = "1";
        carLabel.style.opacity = "1";
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("ecoTh")[i];
            y.style.opacity = "1";
        }
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("ecoTd")[i];
            y.style.opacity = "1";
        }
    }
    else {
        play(clicked_class);
        pauseplayNum += 1;
        
        carLabel.style.opacity = "0";
        carLabel.innerHTML = "";

        x.style.opacity = "0";
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("ecoTh")[i];
            y.style.opacity = "0";
        }
        for (i=0;i<9;i++) {
            y = document.getElementsByClassName("ecoTd")[i];
            y.style.opacity = "0";
        }
        x.innerHTML = "";
    }
}

// Pause Animation function
function pause(clicked_class) {
    boxOne = document.getElementsByClassName(clicked_class)[0];
    boxOne.style.animationPlayState = "paused";
}

// Play Animation function
function play(clicked_class) {
    boxOne = document.getElementsByClassName(clicked_class)[0];
    boxOne.style.animationPlayState = "running";
}

// LuxuryCars/EconomyCars-Button that is ran when the choose-car button is clicked
function luxandecoButton() {
    if (pauseplayNum % 2 == 1) {
        window.location.href='timeframe.html';
        sessionStorage.setItem("carName", carName);
        sessionStorage.setItem("carImage", carImage);
    }
    else {
        window.alert("Please select a car before you proceed to the next step");
    }
}

// Timeframe-Button function that is ran when the submit button is clicked
function timeframeButton() {
    var rentDate = document.getElementById('timeframeDate').value;
    sessionStorage.setItem("rentDate", rentDate);

    var rentTime = document.getElementById('pickupTime').value;
    timeString12hr = new Date('1970-01-01T' + rentTime + 'Z').toLocaleTimeString({},
    {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
    sessionStorage.setItem("rentTime", timeString12hr);

    var timeLength = document.getElementsByName('timeLength');
    for (var i = 0, length = timeLength.length; i < length; i++) {
        if (timeLength[i].checked) {
            rentYears = timeLength[i].value;

            sessionStorage.setItem("rentYears", rentYears);

            break;
        }
    }
}

// Timeframe-Canvas function that is ran when page is loaded to put image on canvas
function timeframeCanvas() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    var timeframeImg = new Image();
    timeframeImg.onload = onload;
    timeframeImg.src = 'assets/Calendar.png';

    ctx.drawImage(timeframeImg, 0,0, canvas.width, canvas.height);
}

// Location-Button function that is ran when the submit button is clicked
function locationButton() {
    var location = document.getElementsByName('location');
    for (var i = 0, length = location.length; i < length; i++) {
        if (location[i].checked) {
            locationValue = location[i].value;

            sessionStorage.setItem("locationValue", locationValue);

            break;
        }
    }

    var homeAddressValue = document.getElementById('homeAddress').value;
    sessionStorage.setItem("homeAddressValue", homeAddressValue);

    var outsideState = document.getElementsByName('outsideState');
    for (var i = 0, length = outsideState.length; i < length; i++) {
        if (outsideState[i].checked) {
            outsideStateValue = outsideState[i].value;

            sessionStorage.setItem("outsideStateValue", outsideStateValue);

            break;
        }
    }

    var outsideCountry = document.getElementsByName('outsideCountry');
    for (var i = 0, length = outsideCountry.length; i < length; i++) {
        if (outsideCountry[i].checked) {
            outsideCountryValue = outsideCountry[i].value;

            sessionStorage.setItem("outsideCountryValue", outsideCountryValue);

            break;
        }
    }
}

// Checkout function that is ran when checkout page is loaded
function checkout() {
    carName = sessionStorage.getItem("carName");
    document.getElementById("carName").innerHTML = carName;

    carImage = sessionStorage.getItem("carImage");
    document.getElementById("carImage").src = carImage;

    rentDate = sessionStorage.getItem("rentDate");
    document.getElementById("rentDate").innerHTML += rentDate;

    rentTime = sessionStorage.getItem("rentTime");
    document.getElementById("rentTime").innerHTML += rentTime;

    rentYears = sessionStorage.getItem("rentYears");
    document.getElementById("rentYears").innerHTML += rentYears;

    locationValue = sessionStorage.getItem("locationValue");
    document.getElementById("locationValue").innerHTML += locationValue;

    homeAddressValue = sessionStorage.getItem("homeAddressValue");
    document.getElementById("checkoutHomeAddress").innerHTML += homeAddressValue;

    outsideStateValue = sessionStorage.getItem("outsideStateValue");
    document.getElementById("outsideState").innerHTML += outsideStateValue;

    outsideCountryValue = sessionStorage.getItem("outsideCountryValue");
    document.getElementById("outsideCountry").innerHTML += outsideCountryValue;
}

// Checkout-Button function that is ran when the button is clicked to get the invoice
function checkoutButtonValue() {
    contactName = document.getElementById("contactName").value;
    sessionStorage.setItem("contactName", contactName);
    
    contactEmail = document.getElementById("contactEmail").value;
    sessionStorage.setItem("contactEmail", contactEmail);

    contactPhoneNumber = document.getElementById("contactPhoneNumber").value;
    sessionStorage.setItem("contactPhoneNumber", contactPhoneNumber);

    creditCardNumber = document.getElementById("creditCardNumber").value;
    sessionStorage.setItem("creditCardNumber", creditCardNumber);

    creditCardExpirationDate = document.getElementById("creditCardExpirationDate").value;
    sessionStorage.setItem("creditCardExpirationDate", creditCardExpirationDate);
    
    creditCardSecurityCode = document.getElementById("creditCardSecurityCode").value;
    sessionStorage.setItem("creditCardSecurityCode", creditCardSecurityCode);

    sessionStorage.setItem("invoiceCarName", carName);
    window.open("invoice.html", "_blank");
}

// Invoice function that is ran when invoice page is loaded
function invoice() {
    invoiceNum = Math.floor(Math.random()*100);
    d = new Date();
    month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    todayMonth = month[d.getMonth()];
    todayDate = d.getDate();
    todayYear = d.getFullYear();
    today = todayMonth + " " + todayDate + ", " + todayYear;

    document.getElementById("invoiceDate").innerHTML = "Invoice #: " + invoiceNum + "<br>Created: " + today;

    homeAddressValue = sessionStorage.getItem("homeAddressValue");
    document.getElementById("invoiceHomeAddress").innerHTML = homeAddressValue;

    invoiceName = sessionStorage.getItem("contactName");
    invoiceEmail = sessionStorage.getItem("contactEmail");
    invoicePhoneNumber = sessionStorage.getItem("contactPhoneNumber");
    document.getElementById("invoicePersonalInfo").innerHTML = invoiceName + "<br>" + invoiceEmail + "<br>" + invoicePhoneNumber;

    invoiceCardNumber = sessionStorage.getItem("creditCardNumber");
    invoiceLastFour = invoiceCardNumber[invoiceCardNumber.length-4] + invoiceCardNumber[invoiceCardNumber.length-3] + invoiceCardNumber[invoiceCardNumber.length-2] + invoiceCardNumber[invoiceCardNumber.length-1]
    document.getElementById("invoiceLastFour").innerHTML += invoiceLastFour;

    invoiceCarName = sessionStorage.getItem("carName");
    document.getElementById("invoiceCarName").innerHTML = invoiceCarName;

    invoicePPD = sessionStorage.getItem("priceOfCar");
    document.getElementById("invoicePPD").innerHTML += invoicePPD;

    invoiceRentYears = sessionStorage.getItem("rentYears");
    document.getElementById("invoiceRentYears").innerHTML += invoiceRentYears;
    
    invoiceTotalPrice =  (invoiceRentYears[0] * 365 * invoicePPD).toFixed(2);
    document.getElementById("invoiceTotalPrice").innerHTML += invoiceTotalPrice;
}

// Remove Luxury Car
function removeLuxCar() {
    luxCar = sessionStorage.getItem("invoiceCarName");
    luxCarArray = ["Lamborghini Veneno", "Tesla Model X", "Ferrari LaFerrari", "Bugatti Divo", "Mercedes-Benz GLE"];
    carIndex = luxCarArray.indexOf(luxCar);
    document.getElementsByClassName("luxCarSpan")[carIndex].remove();
}

// Remove Economy Car
function removeEcoCar() {
    ecoCar = sessionStorage.getItem("invoiceCarName");
    ecoCarArray = ["Toyota Yaris", "Hyundai Accent", "Nissan Versa", "Honda Civic", "Kia Forte"];
    carIndex = ecoCarArray.indexOf(ecoCar);
    document.getElementsByClassName("ecoCarSpan")[carIndex].remove();
}