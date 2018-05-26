
function showPaymentDetails() {
    var a = document.getElementById("bookingInfo");
    var b = document.getElementById("paymentInfo");
   
    a.style.display = "none";
    b.style.display = "block";

}

function showBookingDetails() {
    var a = document.getElementById("bookingInfo");
    var b = document.getElementById("paymentInfo");
   
    a.style.display = "block";
    b.style.display = "none";

}

function showFinalConfimation() {
    var a = document.getElementById("paymentInfo");
   	var b = document.getElementById("finalConfirm");
    a.style.display = "none";
    b.style.display = "block";

}
