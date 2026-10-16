const inquirer = require('inquirer');

async function validarContrasena() {
    try {
        
        const prompt = inquirer.default ? inquirer.default.prompt : inquirer.prompt;

        const answers = await prompt([
            {
                type: 'password',
                name: 'password',
                message: 'Ingresa una contraseña:',
                mask: '*',
                validate: (value) => {
                    return value.length > 0 || 'La contraseña no puede estar vacía';
                }
            }
        ]);

        let password = answers.password;
        let numMayusculas = 0;
        let numNumeros = 0;

        
        for (let i = 0; i < password.length; i++) {
            let char = password[i];

            
            if (char >= 'A' && char <= 'Z') {
                numMayusculas++;
            }

            
            if (char >= '0' && char <= '9') {
                numNumeros++;
            }
        }

        
        let cumpleLongitud = password.length >= 8;
        let cumpleMayuscula = numMayusculas >= 1;
        let cumpleNumero = numNumeros >= 1;

        if (cumpleLongitud && cumpleMayuscula && cumpleNumero) {
            console.log("\n¡Contraseña segura!");
        } else {
            console.log("\nContraseña no segura. Incumple con las siguientes reglas:");
            if (!cumpleLongitud) {
                console.log(`- Debe tener mínimo 8 caracteres (actualmente tiene ${password.length}).`);
            }
            if (!cumpleMayuscula) {
                console.log("- Debe tener al menos una letra mayúscula.");
            }
            if (!cumpleNumero) {
                console.log("- Debe tener al menos un número.");
            }
        }

    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

validarContrasena();