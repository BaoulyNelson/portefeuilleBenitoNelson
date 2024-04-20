function updateWordCount() {
    var message = document.getElementById("message").value;
    var wordCount = message.trim().split(/\s+/).length;
    if (message.trim() === "") {
        document.getElementById("wordCount").textContent = "0/100 words";
    } else {
        document.getElementById("wordCount").textContent = wordCount + "/100 words";
    }
}

function validateForm() {
    var message = document.getElementById("message").value;
    var wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 100) {
        alert("Please limit your message to 100 words.");
        return false;
    }
    return true;
}
const passwordInput = document.getElementById('password');
const minLength = document.getElementById('minLength');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const number = document.getElementById('number');
const specialChar = document.getElementById('specialChar');

const minLengthIcon = document.getElementById('minLengthIcon');
const lowercaseIcon = document.getElementById('lowercaseIcon');
const uppercaseIcon = document.getElementById('uppercaseIcon');
const numberIcon = document.getElementById('numberIcon');
const specialCharIcon = document.getElementById('specialCharIcon');

passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;

    minLength.style.display = password.length >= 8 ? 'none' : 'block';
    lowercase.style.display = /[a-z]/.test(password) ? 'none' : 'block';
    uppercase.style.display = /[A-Z]/.test(password) ? 'none' : 'block';
    number.style.display = /\d/.test(password) ? 'none' : 'block';
    specialChar.style.display = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'none' : 'block';

    minLengthIcon.classList.toggle('show', password.length >= 8);
    lowercaseIcon.classList.toggle('show', /[a-z]/.test(password));
    uppercaseIcon.classList.toggle('show', /[A-Z]/.test(password));
    numberIcon.classList.toggle('show', /\d/.test(password));
    specialCharIcon.classList.toggle('show', /[!@#$%^&*(),.?":{}|<>]/.test(password));
});
