function getInputFeildValueById(inpuFeildId) {
    const inputFeild = document.getElementById(inpuFeildId);
    const inputFeildValueString = inputFeild.value;
    const inputFeildValue = parseFloat(inputFeildValueString);
    // if (typeof inputFeildValue == ! 'number') {
    //     alert('Please vailed number')
    // }
    inputFeild.value = '';
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
    elmentText.innerText = newValue

}

function upodatePlayerPrice(Total) {

}


document.getElementById('btn-players').addEventListener('click', function () {
    const NewPriceingPlayer = getInputFeildValueById('players-feild');

    const totalPlayersPrice = NewPriceingPlayer * 5;

    const previousPlayerPriceTotal = getElementValueById('playeres-total');
    let currentPlayersPriceToal = previousPlayerPriceTotal + totalPlayersPrice;
    setTextElementValueById('playeres-total', currentPlayersPriceToal);



})

document.getElementById('btn-total').addEventListener('click', function () {
    const previousPlayerPriceTotal = getElementValueById('playeres-total');
    const previousTotal = getElementValueById('total-feild');
    const currentTotal = previousTotal + previousPlayerPriceTotal + 2000 + 4000;
    setTextElementValueById('total-feild', currentTotal);
})

