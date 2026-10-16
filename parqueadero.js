const inquirer = require('inquirer');

async function calcularTarifa() {
    try {
        
        const prompt = inquirer.default ? inquirer.default.prompt : inquirer.prompt;

        const answers = await prompt([
            {
                type: 'input',
                name: 'horas',
                message: 'Horas:',
                validate: (value) => {
                    const valid = !isNaN(Number(value)) && Number(value) >= 0;
                    return valid || 'Por favor, ingresa un número de horas válido';
                },
                filter: Number
            },
            {
                type: 'input',
                name: 'coder',
                message: '¿Coder? (si/no):',
                validate: (value) => {
                    const val = value.trim().toLowerCase();
                    return val === 'si' || val === 'no' || 'Por favor ingresa "si" o "no"';
                },
                filter: (value) => value.trim().toLowerCase()
            }
        ]);

        let horas = answers.horas;
        let coderInput = answers.coder;
        
        
        let total = horas > 0 ? 3000 + (horas - 1) * 2000 : 0;

        
        if (total > 20000) total = 20000;

        
        if (coderInput === "si") {
            total = total * 0.85;
        }

        console.log(`Total a pagar: $${total}`);

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

calcularTarifa();