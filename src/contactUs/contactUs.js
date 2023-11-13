const formButton = document.getElementById('formbutton');
formButton.value = 'Send';

const form = document.getElementById('contactUsForm');
const formComplete = document.querySelector('.formComplete');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    formComplete.style.opacity = 1;

    setTimeout(function () {
        formComplete.style.opacity = 0;
    }, 5000);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log(`Form successfully sent`)
    console.log('Name: ' + name);
    console.log('E-Mail: ' + email);
    console.log('Subject: ' + subject);
    console.log('Message: ' + message);
});