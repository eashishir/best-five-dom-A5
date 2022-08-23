// common function 

function getInputFeildValueById(inpuFeildId) {
    const inputFeild = document.getElementById(inpuFeildId);
    const inputFeildValueString = inputFeild.value;
    const inputFeildValue = parseFloat(inputFeildValueString);

    inputFeild.value = "";
    return inputFeildValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const ElementValueString = element.innerText;
    const ElementValue = parseFloat(ElementValueString);

    return ElementValue;
}

function setTextElementValueById(elementId, newValue) {
    elmentText = document.getElementById(elementId);
    elmentText.innerText = newValue;
}

// end the common part 

document.getElementById("btn-players").addEventListener("click", function () {
    // let totalPlayersPrice = 0;
    const NewPriceingPlayer = getInputFeildValueById("players-feild");

    totalPlayersPrice = NewPriceingPlayer * 5;

    const errorMsgNull = document.getElementById("error-msg-null");
    const errorMsgNegative = document.getElementById("error-msg-neg");
    if (NewPriceingPlayer >= 0) {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "none";
        setTextElementValueById("playeres-total", totalPlayersPrice);
    }
    else if (NewPriceingPlayer < 0) {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";

    } else {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";
    }
});

document.getElementById("btn-total").addEventListener("click", function () {
    const previousPlayerPriceTotal = getElementValueById("playeres-total");
    const managerPrice = getInputFeildValueById('manager-price');

    const coachPrice = getInputFeildValueById('Coach-price');
    // const previousTotal = getElementValueById('total-feild');
    // const currentTotal = previousTotal + previousPlayerPriceTotal + 2000 + 4000;
    const currentTotal = previousPlayerPriceTotal + managerPrice + coachPrice;
    const errorMsgNull = document.getElementById("error-msg-null");
    const errorMsgNegative = document.getElementById("error-msg-neg");
    if (coachPrice >= 0 && managerPrice >= 0) {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "none";
        setTextElementValueById("total-feild", currentTotal);
    }
    else if (coachPrice >= 0 && managerPrice >= 0) {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";

    } else {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";
    }

});
