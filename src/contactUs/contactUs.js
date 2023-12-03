const formButton = document.getElementById('formbutton');
formButton.value = 'Send';

const form = document.getElementById('contactUsForm');
const formComplete = document.querySelector('.formComplete');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {

        formComplete.style.opacity = 1;

        setTimeout(function () {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
            document.querySelector('.nameSpan').textContent = '';
            document.querySelector('.emailSpan').textContent = '';
            document.querySelector('.subjectSpan').textContent = '';
            document.querySelector('.messageSpan').textContent = '';
        }, 500);

        setTimeout(function () {
            formComplete.style.opacity = 0;
        }, 5000);
    }
});

function validateName() {
    const name = document.getElementById('name').value;
    const nameSpan = document.querySelector('.nameSpan');

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
    const email = document.getElementById('email').value;
    const emailSpan = document.querySelector('.emailSpan');

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

function validateSubject() {
    const subject = document.getElementById('subject').value;
    const subjectSpan = document.querySelector('.subjectSpan');

    if(subject.length == 0){
        subjectSpan.textContent = 'Subject cannot be empty';
        return false
    }
    if(subject.length < 8){
        subjectSpan.textContent = 'Subject must be at least 8 characters.';
        return false;
    }
    subjectSpan.textContent = '';
    return true;
}

function validateMessage() {
    const message = document.getElementById('message').value;
    const messageSpan = document.querySelector('.messageSpan');

    if(message.length == 0){
        messageSpan.textContent = 'Message cannot be empty';
        return false;
    }
    if(message.length < 15){
        messageSpan.textContent = 'Message must be at least 15 characters.';
        return false;
    }
    messageSpan.textContent = '';
    return true;
}