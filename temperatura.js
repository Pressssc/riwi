const inquirer = require('inquirer');

async function consultarTemperatura() {
    try {
    
        const prompt = inquirer.default ? inquirer.default.prompt : inquirer.prompt;

        const answers = await prompt([
            {
                type: 'input',
                name: 'temperatura',
                message: 'Ingresa la temperatura:',
                validate: (value) => {
                    const valid = !isNaN(Number(value));
                    return valid || 'Por favor, ingresa un número válido';
                },
                filter: Number
            }
        ]);

        let temperatura = answers.temperatura;

        if (temperatura < 10) {
            console.log("Hace frío, lleva chaqueta");
        } else if (temperatura < 25) {
            console.log("Clima templado");
        } else {
            console.log("Hace calor, hidrátate");
        }

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

consultarTemperatura();