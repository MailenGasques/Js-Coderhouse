

    function signo () {
        let nombre = (prompt('Ingrese su nombre')) .toLocaleUpperCase()
        let mes = parseInt(prompt('Ingrese el numero de mes correspondiente a su nacimiento'))
        let dia = parseInt(prompt('Ingrese el numero del dia de su nacimiento'))
        let signoZodiacal = (mes,dia)
        
        if (isNaN(mes)|| isNaN(dia)|| dia<1 || dia>31){
            alert('Al introducir el mes y dia de su nacimiento, ingrese unicamente valores numericos validos')
        } 
        
        else{
                switch (mes) {
                    case 1:
                        if (dia >= 20) {
                            signoZodiacal = 'Acuario';
                        } else {
                            signoZodiacal = 'Capricornio';
                        }
                        break;
                    case 2:
                        if (dia >= 19) {
                            signoZodiacal = 'Piscis';
                        } else {
                            signoZodiacal = 'Acuario';
                        }
                        break;
                    case 3:
                        if (dia >= 21) {
                            signoZodiacal = 'Aries';
                        } else {
                            signoZodiacal = 'Piscis';
                        }
                        break;
                    case 4:
                        if (dia >= 20) {
                            signoZodiacal = 'Tauro';
                        } else {
                            signoZodiacal = 'Aries';
                        }
                        break;
                    case 5:
                        if (dia >= 21) {
                            signoZodiacal = 'Géminis';
                        } else {
                            signoZodiacal = 'Tauro';
                        }
                        break;
                    case 6:
                        if (dia >= 21) {
                            signoZodiacal = 'Cáncer';
                        } else {
                            signoZodiacal = 'Géminis';
                        }
                        break;
                    case 7:
                        if (dia >= 23) {
                            signoZodiacal = 'Leo';
                        } else {
                            signoZodiacal = 'Cancer';
                        }
                        break;
                    case 8:
                        if (dia >= 23) {
                            signoZodiacal = 'Virgo';
                        } else {
                            signoZodiacal = 'Leo';
                        }
                        break;
                    case 9:
                        if (dia >= 23) {
                            signoZodiacal = 'Libra';
                        } else {
                            signoZodiacal = 'Virgo';
                        }
                        break;
                    case 10:
                        if (dia >= 23) {
                            signoZodiacal = 'Escorpio';
                        } else {
                            signoZodiacal = 'Libra';
                        }
                        break;
                    case 11:
                        if (dia >= 22) {
                            signoZodiacal = 'Sagitario';
                        } else {
                            signoZodiacal = 'Escorpio';
                        }
                        break;
                    case 12:
                        if (dia >= 22) {
                            signoZodiacal = 'Capricornio';
                        } else {
                            signoZodiacal = 'Sagitario';
                        }
                        break;
                    default: 
                        signoZodiacal= 'Signo Zodiacal no encontrado, por favor, ingrese una fecha valida';
                        break;
                    }
                    console.log(`Hola ${nombre}, tu signo zodiacal es: ${signoZodiacal}`)
        }
    }

signo();
