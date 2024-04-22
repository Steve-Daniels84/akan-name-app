const data = (function () {
    const names = [
    {day: 'monday',
    female: 'Adwoa',
    male: 'Kwadwo'},
    {day: 'tuesday',
    female: 'Abenaa',
    male: 'Kwabena'},
    {day: 'wednesday',
    female: 'Akua',
    male: 'Kwaku'},
    {day: 'thursday',
    female: 'Yaa',
    male: 'Yaw'},
    {day: 'friday',
    female: 'Afua',
    male: 'Kofi'},
    {day: 'saturday',
    female: 'Ama',
    male: 'Kwame'},
    {day: 'sunday',
    female: 'Akosua',
    male: 'Kwasi'},
]

function generateName (day) {
let item = names.filter((day) => names.day.includes(day))
console.log(item);
}

const dob = document.querySelector ('#dob');
const gender = document.querySelector ('#gender')
const generateButton = document.querySelector('#generate-button');

generateButton.addEventListener ('click', function () {
    const dateInput = document.querySelector('#dob');
    const gender = document.querySelector('#gender');

    if (day === null ) {
        console.log ('no date');
    } else {
        console.log ()
    }
    
});

dob.addEventListener ('change', function (event) {
   const selectedDate = new Date(event.target.value);
   const day = selectedDate.getDay();
    console.log(day);
})

gender.addEventListener('change', function (event) {
    let selectedGender = event.target.value;
     console.log(selectedGender);
 })

return {

generateName: generateName
}
})();


