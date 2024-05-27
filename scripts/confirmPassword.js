const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

confirmPassword.addEventListener('focusout', checkSame);

function checkSame() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.backgroundColor = "#fff0f3";
    }
    else {
		confirmPassword.style.backgroundColor = "#fff";
		confirmPassword.style.color = "#000";
    }
}
