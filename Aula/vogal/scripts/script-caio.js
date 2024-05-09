function vogalOuConsoante() {
    let letra = promp("Insira uma letra:")

    let consoante = /[bcdfghjklmnpqrstvwxyz]/
    let vogais = /[aeiou]/

    alert(consoante.test(letra) ? "consoante" : vogais.test(letra) ? "vogal" : "nenhum")
}

// OPERADOR TERNANÁRIO
// condição ? ValorSeVerdadeiro : ValorSeFalso

// if(consoantes.test(letra)){
//     alert("consoante");
// }   else if (vogais.test(letra)) {
//     alert ("Vogal");
// }   else    {
//     alert("Nenhum");
// }