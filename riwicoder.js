const inquirer = require('inquirer');

async function riwiCoder() {
    try {
        
        const prompt = inquirer.default ? inquirer.default.prompt : inquirer.prompt;

        const answers = await prompt([
            {
                type: 'input',
                name: 'N',
                message: 'Ingresa el número N:',
                validate: (value) => {
                    const valid = !isNaN(Number(value)) && Number(value) > 0;
                    return valid || 'Por favor, ingresa un número mayor a 0';
                },
                filter: Number
            }
        ]);

        let N = answers.N;

        
        for (let i = 1; i <= N; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("RiwiCoder");
            } else if (i % 3 === 0) {
                console.log("Riwi");
            } else if (i % 5 === 0) {
                console.log("Coder");
            } else {
                console.log(i);
            }
        }

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

riwiCoder();