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
        alert("Added Max 5 player")
    } else {
        // console.log(playerName);
        cartArray.push(playerName);
        // console.log(cartArray.length);
    }
    document.getElementById("added-total").innerText = cartArray.length;
    display(cartArray);
}
