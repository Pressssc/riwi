const inquirer = require('inquirer');

async function cuentaRegresiva() {
    try {
        
        const prompt = inquirer.default ? inquirer.default.prompt : inquirer.prompt;

        const answers = await prompt([
            {
                type: 'input',
                name: 'N',
                message: 'Ingresa el número N:',
                validate: (value) => {
                    const valid = !isNaN(Number(value));
                    return valid || 'Por favor, ingresa un número válido';
                },
                filter: Number
            }
        ]);

        let N = answers.N;

        if (N <= 0) {
            console.log("Número no válido");
        } else {
            for (let i = N; i >= 1; i--) {
                console.log(i);
            }
            console.log("¡Despegue!");
        }

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

cuentaRegresiva();