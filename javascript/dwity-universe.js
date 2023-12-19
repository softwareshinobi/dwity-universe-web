$(document).ready(function () {

    updateDivAreaWithText("");
	
    executeContentUpdate();

    window.setInterval(function () {
		
        executeContentUpdate();
		
    }, 8 * 1000);

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

        url: "http://192.168.1.3:8888/dwity-universe/active",

        //#dataType: "json",

        success: function (data) {

            console.debug("Rest service data: ");

            console.debug(data);

            updateDivAreaWithText("nothing scheduled. be great");           

            updateDivAreaWithText(data[0].summary.value);

        },

        error: function (data) {

            updateDivAreaWithText("there was an error / " + data);           

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
