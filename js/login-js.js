document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.login-show input[type="button"]');
    const registerBtn = document.querySelector('.register-show input[type="button"]');
    const loginEmailInput = document.querySelector('.login-show input[type="text"]');
    const loginPasswordInput = document.querySelector('.login-show input[type="password"]');
    const registerEmailInput = document.querySelector('.register-show input[type="text"]');
    const registerPasswordInput = document.querySelector('.register-show input[type="password"]');
    const confirmPasswordInput = document.querySelector('.register-show input[type="password"]:nth-of-type(3)');

    loginBtn.addEventListener('click', function () {
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;
        // Add your login logic here
        console.log('Login clicked. Email:', email, 'Password:', password);
        // Reset the form
        loginEmailInput.value = '';
        loginPasswordInput.value = '';
    });

    registerBtn.addEventListener('click', function () {
        const email = registerEmailInput.value;
        const password = registerPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        // Add your registration logic here
        console.log('Register clicked. Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
        // Reset the form
        registerEmailInput.value = '';
        registerPasswordInput.value = '';
        confirmPasswordInput.value = '';
    });
});
