const infoForm = document.querySelector('form');
const inputDistance = document.getElementById('kilometres');
const inputAge = document.getElementById('myAge');



infoForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const kmAmount = parseFloat(inputDistance.value);
    console.log('Chilometri da percorrere', kmAmount);
    
    const userAge = parseInt(inputAge.value);
    console.log('Età utente', userAge);

    console.log(fullTicketPrice(kmAmount, userAge));

    const ticketPrice = fullTicketPrice(kmAmount, userAge);

    const newDiv = document.createElement('div');
    newDiv.innerHTML = fullTicketPrice(kmAmount, userAge)
    const divElement = document.querySelector('.totalPrice');
    divElement.appendChild(newDiv);

})






function fullTicketPrice (km, age) {

    const standardPrice = 0.21;

    //calcolo del prezzo base
    let finalPrice = standardPrice * km;
    //calcolo della percentuale
    let discountPercentage = 0;
    
    if (age < 18) {

    discountPercentage = 20;} 
    
    else if (age > 65) {

    discountPercentage = 40;
    }

    console.log('Percentuale di sconto', discountPercentage);
    
    let discount = (finalPrice * discountPercentage) / 100;
    console.log('Sconto', discount);
    
    // calcolare la cifra scontata
    finalPrice = finalPrice - discount;
    
    // ridurre la cifra ottenuta ad un valore con massimo due decimali
    finalPrice.toFixed(2);
    console.log( `Il prezzo finale è di ${finalPrice.toFixed(2)} €`);

    return finalPrice;
} 




