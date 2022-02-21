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

    }