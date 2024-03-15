const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
event.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

console.log(`Username: ${username}, Password: ${password}`);
});