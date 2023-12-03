const applyBtn = document.getElementById('applyButton');
applyBtn.value = 'Apply';

const form = document.getElementById('applyForm');
const formComplete = document.querySelector('.formComplete');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isCarValid = validateCarMake();
    const isLocationValid = validateLocation();
    const isDateValid = validateDate();
    const isModsValid = validateMods();
    const isImageValid = validateImages();

    if (isNameValid && isEmailValid && isCarValid && isLocationValid && isDateValid && isModsValid && isImageValid) {

        formComplete.style.opacity = 1;

        setTimeout(function () {
            document.getElementById('applyName').value = '';
            document.getElementById('applyNameSpan').textContent = '';
            document.getElementById('applyMail').value = '';
            document.getElementById('applyEmailSpan').textContent = '';
            document.getElementById('applyCarMake').value = '';
            document.getElementById('applyCarSpan').textContent = '';
            document.getElementById('applyLocated').value = '';
            document.getElementById('applyLocationSpan').textContent = '';
            document.getElementById('applyBirth').value = '';
            document.getElementById('applyDateSpan').textContent = '';
            document.getElementById('applyMods').value = '';
            document.getElementById('applyModsSpan').textContent = '';
            document.getElementById('fileInput').value = '';
            document.getElementById('applyImgSpan').textContent = '';
        }, 500);

        setTimeout(function () {
            formComplete.style.opacity = 0;
        }, 5000);
    }
});

function validateName() {
    const name = document.getElementById('applyName').value;
    const nameSpan = document.getElementById('applyNameSpan');

    if(name.length == 0){
        nameSpan.textContent = 'Name cannot be empty.';
        return false;
    }
    if(name.length < 5){
        nameSpan.textContent = 'Name must be at least 5 characters.';
        return false;
    }
    nameSpan.textContent = '';
    return true;
}

function validateEmail() {
    const email = document.getElementById('applyMail').value;
    const emailSpan = document.getElementById('applyEmailSpan');

    if(email.length == 0){
        emailSpan.textContent = 'E-mail cannot be empty.';
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailSpan.textContent = 'E-mail format is wrong. Example: "email@domain.com"';
        return false;
    }
    emailSpan.textContent = '';
    return true;
}

function validateCarMake() {
    const car = document.getElementById('applyCarMake').value;
    const carSpan = document.getElementById('applyCarSpan');

    if(car.length == 0){
        carSpan.textContent = 'Car Make and Model cannot be empty.';
        return false;
    }
    carSpan.textContent = '';
    return true;
}

function validateLocation() {
    const location = document.getElementById('applyLocated').value;
    const locationSpan = document.getElementById('applyLocationSpan');

    if(location.length == 0){
        locationSpan.textContent = 'Location cannot be empty.';
        return false;
    }
    locationSpan.textContent = '';
    return true;
}

function validateDate() {
    const date = document.getElementById('applyBirth').value;
    const dateSpan = document.getElementById('applyDateSpan');

    if(date.length == 0){
        dateSpan.textContent = 'Birth Date cannot be empty.';
        return false;
    }
    dateSpan.textContent = '';
    return true;
}

function validateMods() {
    const mods = document.getElementById('applyMods').value;
    const modsSpan = document.getElementById('applyModsSpan');

    if(mods.length == 0){
        modsSpan.textContent = 'This cannot be empty.';
        return false;
    }
    if(mods.length < 50){
        modsSpan.textContent = 'This has to be at least 50 characters.';
        return false;
    }
    modsSpan.textContent = '';
    return true;
}

function validateImages() {
    const image = document.getElementById('fileInput').value;
    const imageSpan = document.getElementById('applyImgSpan');

    if(image.length == 0){
        imageSpan.textContent = 'Please upload at least one image.';
        return false;
    }
    imageSpan.textContent = '';
    return true;
}