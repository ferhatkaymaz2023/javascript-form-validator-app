    class Control
    {
        constructor()
        {}

        static checkIsRequired(inputs)
        {
            inputs.forEach(input => input.value === '' ? UI.error(input,`${input.id} is required`) : UI.success(input));
        }

    }