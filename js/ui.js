    class UI
    {
        constructor()
        {}

        static error(input,message)
        {
            input.className = 'form-control is-invalid';
            
            const div = input.nextElementSibling;
            div.textContent = message;
            div.className = 'invalid-feedback';

        }

        static success(input)
        {
            input.className = 'form-control is-valid';
        }

    }