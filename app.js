const name = document.querySelector('.name');
const heightVal = document.querySelector('.height');
const weightVal = document.querySelector('.weight');
const button = document.querySelector('.natija');
const natija = document.querySelector('.result1');

button.addEventListener('click', function () {
    const height = parseFloat(heightVal.value);
    const weight = parseFloat(weightVal.value);

    if (name.value != '' && heightVal.value != '' && weightVal.value != '') {

        let bmi = (weight / (height * height)).toFixed(2);

        if (bmi < 14.99) {
            natija.textContent = `Hurmatli ${name.value} siz juda ham ozg\'insiz!`;  
        } else if (bmi >= 14.99 && bmi < 24.99) {
            natija.textContent = `Hurmatli ${name.value} sizning qomatingiz ajoyib!`;
        } else {
            natija.textContent = `Hurmatli ${name.value} sizda ortiqcha vazn bor!`;
        }
    } else if (name.value != '') {
        natija.textContent = `Hurmatli ${name.value} ma\'lumotlarni to\'liq kiritishingizni so\'raymiz!`
    } else {
        natija.textContent = 'Hurmatli foydalanuvchi ma\'lumotlarni to\'liq kiritishingizni so\'raymiz!'
    }
});