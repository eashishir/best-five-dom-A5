const cartArray = [];
function display(cartProduct) {
    console.log(cartProduct);

    const listBody = document.getElementById("players-cart");
    listBody.innerHTML = "";
    for (let i = 0; i < cartProduct.length; i++) {
        // console.log(cartArray[i]);
        const name = cartArray[i];

        const li = document.createElement("li");
        li.innerHTML = `
       
        <h5>${i + 1}.${name}</h5>`;
        listBody.appendChild(li);
    }
}

function addToTheCart(element) {
    // console.log(element.parentNode.children)
    // console.log(element.parentNode.children[0].innerText)

    const playerName = element.parentNode.children[0].innerText;
    console.log(element);
    element.setAttribute("disabled", true);

    if (cartArray.length > 4) {
        // document.getElementById("msg").innerText = "Added Max 5 player";
        alert("Added Max 5 Player")
    } else {
        // console.log(playerName);
        cartArray.push(playerName);
        // console.log(cartArray.length);
    }
    document.getElementById("added-total").innerText = cartArray.length;
    display(cartArray);
}

// calculation Part




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

    totalPlayersPrice = NewPriceingPlayer * cartArray.length;

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
    else if (coachPrice < 0 && managerPrice < 0) {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";

    } else {
        errorMsgNull.style.display = "none";
        errorMsgNegative.style.display = "block";
    }

});
