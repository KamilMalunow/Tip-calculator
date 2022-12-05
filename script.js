const billPrize = document.querySelector('.billPrize');
const billPeople = document.querySelector('.billPeople');
const serviceQuality = document.querySelector('.serviceQuality');
const wynik = document.querySelector('.wynik');
const form = document.querySelector('.form');
const submitButton = document.querySelector('.submitButton');

let result;



form.addEventListener("submit", (event) => {
    event.preventDefault();





    const people = Number(billPeople.value);
    const prize = Number(billPrize.value);
    const service = Number(serviceQuality.value);


    let prizePerPerson = prize / people;

    switch (service) {
        case 2:
            result = (prize / 100) * 2;
            break;

        case 10:
            result = (prize / 100) * 10;
            break;

        case 20:
            result = (prize / 100) * 20;
            break;
    }

    if (people <= 0 || prize <= 0 || service === 0) {
        alert("You have to fill all fileds");
    }
    else {
        submitButton.innerHTML = "<div class='loader'></div>"
        submitButton.style.backgroundColor = "white"
        wynik.innerHTML = '';
        setTimeout(() => {
            wynik.innerHTML =
                `
            The price of the whole dish = ${(prize + result).toFixed(2)} $<br>
            Food price per person  = ${prizePerPerson.toFixed(2)} $<br>
            The value of the tip = ${result.toFixed(2)} $
        `
            submitButton.innerHTML = 'Calculate';
            submitButton.style.backgroundColor = "#336699"
        }, 2000);


    }
})

