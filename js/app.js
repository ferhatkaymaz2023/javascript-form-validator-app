    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repasssword = document.getElementById('repassword');


    form.addEventListener('submit',(event) => {

        Control.checkIsRequired([username,email,password,repasssword]);

        event.preventDefault();
    });