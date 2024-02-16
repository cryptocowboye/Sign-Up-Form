

const validatePassword = (password) => {
    if (password.value === "" || password.value.length < 3) {
        password.style.borderColor = 'red';
        if (para.className !== "retypePassword") {
            para.classList.add('retypePassword')
            para.appendChild(paraContent)
            passwordParent.appendChild(para)
        }
    } else {
        password.style.borderColor = '#d5d5d5'
    }
    return password
}

const confirmPassword = (password) => {
    if (password.value !== passwordFields[0].value || password.value == '') {
        password.style.borderColor = 'red'
        if (para.className !== "retypePassword") {
            para.classList.add('retypePassword')
            para.appendChild(paraContent)
            passwordParent.appendChild(para)
        }
    } else {
        password.style.borderColor = "#d5d5d5"
        if (para.className === "retypePassword" && passwordFields[0].style.borderColor !== 'red') {
            passwordParent.removeChild(para)
        }
    }
    return password
}

const passwordFields = document.querySelectorAll('.error');
const confirmBtn = document.querySelector('#submitBtn');

const passwordParent = document.querySelector('.password-field');
let para = document.createElement('p');
let paraContent = document.createTextNode("*Password(s) do not meet requirements.")

const confirmation = () => {
    confirmBtn.addEventListener("click", function (event) {
        validatePassword(passwordFields[0]);
        confirmPassword(passwordFields[1]);
        event.preventDefault()
    });
}

confirmation()
