document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

function generatePassword() {
    const length = document.getElementById('length').value;
    const lengthError = document.getElementById('lengthError');
    const lengthCorrect = document.getElementById('lengthCorrect');
    const passwordField = document.getElementById('password');

    lengthError.textContent = '';
    lengthCorrect.textContent = '';
    passwordField.value = '';

    if (length <= 0) {
        lengthError.textContent = 'Password length must be greater than zero';
        return;
    }

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordField.value = password;
    lengthCorrect.textContent = 'Your password has been generated!';
}

function copyToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);

    document.execCommand('copy');
    document.getElementById('message').textContent = 'Password copied to clipboard!';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('input').forEach(input => input.classList.toggle('dark-mode'));
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    
    // Toggle FontAwesome icons
    const themeToggleIcon = document.getElementById('themeToggle').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleIcon.classList.remove('fa-sun');
        themeToggleIcon.classList.add('fa-moon');
    } else {
        themeToggleIcon.classList.remove('fa-moon');
        themeToggleIcon.classList.add('fa-sun');
    }
}
