function ConsoanteVogal () {
    let letra;
    let resposta;

    letra = prompt("inspira uma letra e diremos se é uma vogal ou consoante! ");
    Console.log(letra);

    switch (letra) {
    case "a": case "A":
    case "e": case "E":
    case "i": case "I":
    case "o": case "O":
    case "u": case "U":
    resposta = letra + " é uma vogal!"

    break;

    case 1: case 2:
        case 3: case 4:
        case 5: case 6:
        case 7: case 8:
        case 9: case 0:
            resposta = letra + "é um número!";

    break;

    default:
        resposta = letra + " é uma cosoante"

        }

    alert(resposta);
    
    }