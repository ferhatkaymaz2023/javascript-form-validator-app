    class Control
    {
        constructor()
        {}

        static checkIsRequired(inputs)
        {
            inputs.forEach(input => input.value === '' ? UI.error(input,`${input.id} is required`) : UI.success(input));
        }

        static chekIsEmail(email)
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
            {
                UI.success(email);
            }
            else 
            {
                UI.error(email,`${email.id} value is not email`);
            }
        }

        static checkIsLength(input,min,max)
        {
            input.value.length < min && UI.error(input,`${input.id} is min characters ${min}`);
            input.value.length > max && UI.error(input,`${input.id} is max characters ${max}`);
        }
        
        static checkIsPassword(password,repasssword)
        {
            password.value !== repasssword.value && UI.error(repasssword,`${repasssword.id} isn't correct `); 
        }

    

    }