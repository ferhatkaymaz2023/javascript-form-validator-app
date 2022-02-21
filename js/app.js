    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repasssword = document.getElementById('repassword');


    form.addEventListener('submit',(event) => {

        Control.checkIsRequired([username,email,password,repasssword]);
        Control.chekIsEmail(email);
        Control.checkIsLength(username,4,21);
        Control.checkIsLength(password,8,21);
        Control.checkIsLength(repasssword,8,21);
        Control.checkIsPassword(password,repasssword);

        event.preventDefault();
    });