$(document).ready(function () {

    updateDivAreaWithText("Be Great");
	
    executeContentUpdate();

    window.setInterval(function () {
		
        executeContentUpdate();
		
    }, 30 * 1000);

});

var isManual = false;
var textOnScreen;

function executeContentUpdate() {
    console.debug("enter :: executeContentUpdate()");

    if (isManual === false) {
        updateDivAreaFromRestCall();
    } else {
        console.log("in manual mode. not doing anything");
    }

    console.debug("exit :: executeContentUpdate()");
}

function updateDivAreaFromRestCall() {
    console.debug("enter :: updateDivAreaFromRestCall()");

    $.ajax({
        type: "GET",
        url: "http://desktop.softwareshinobi.online:8080/dwity/latest-known-event",
        //#dataType: "json",

        success: function (data) {

            console.debug("Rest service data: ");
            console.debug(data);

            updateDivAreaWithText(data);

        },
        error: function (data) {

            console.error("error occured loading rest data");
            console.error("data: ");
            console.error(data);

        }
    }
    );

    console.debug("exit :: updateDivAreaFromRestCall()");
}

function manuallyEditScreenText() {
    console.debug("enter :: manuallyEditScreenText()");

    var inputText = prompt("Enter on-screen text here", textOnScreen);

    console.debug("the entered text: " + inputText);

    if (inputText) {

        console.debug("input value was valid. updating DIV area");
        updateDivAreaWithText(inputText);

    }

    isManual = true;

    console.debug("exit :: manuallyEditScreenText()");
}

function updateDivAreaWithText(text) {
    console.debug("enter :: updateDivAreaWithText()");

    var innerContent = "";

    $("#intention-to-the-universe").html("");

    innerContent = innerContent + text;

    $("#intention-to-the-universe").append(innerContent);

    textOnScreen = text;

    console.debug("exit :: updateDivAreaWithText()");
}
