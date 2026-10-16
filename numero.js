const inquirer = require('inquirer');

async function adivinaElNumero() {
    try {
        
        const prompt = inquirer.default ? inquirer.default.prompt : inquirer.prompt;

        
        const numeroSecreto = Math.floor(Math.random() * 20) + 1; 
        const maxIntentos = 5;
        let ganado = false;

        console.log("¡Bienvenido a Adivina el número!");
        console.log("Tienes 5 intentos para adivinar un número entre 1 y 20.\n");

        for (let intento = 1; intento <= maxIntentos; intento++) {
            const answers = await prompt([
                {
                    type: 'input',
                    name: 'intentoUsuario',
                    message: `Intento ${intento} de ${maxIntentos} - Ingresa tu número:`,
                    validate: (value) => {
                        const num = Number(value);
                        const valid = !isNaN(num) && num >= 1 && num <= 20;
                        return valid || 'Por favor, ingresa un número válido entre 1 y 20';
                    },
                    filter: Number
                }
            ]);

            let intentoUsuario = answers.intentoUsuario;

            if (intentoUsuario === numeroSecreto) {
                console.log(`¡Ganaste en ${intento} ${intento === 1 ? 'intento' : 'intentos'}!`);
                ganado = true;
                break;
            } else if (intentoUsuario < numeroSecreto) {
                console.log("El número secreto es mayor.\n");
            } else {
                console.log("El número secreto es menor.\n");
            }
        }

        if (!ganado) {
            console.log(`Perdiste, el número era ${numeroSecreto}`);
        }

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

adivinaElNumero();