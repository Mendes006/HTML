/* Faça um algorotmo que some quantos números o usuário quiser, sempre pedindo seus valores a ele, e que ao fim mostre o resultado*/
function SomarNumeros() {
    let numero =0;
    let soma =0;
    let opcao = 'S';
    let cont = 0;
    alert("Soma de inteiros!");
    
    while (opcao == 'S'){
        //cont = cont + 1;
        cont ++;
        numero = prompt ("Informe o " + cont + " número a ser somado: ");
        soma += parseInt(numero);
        //soma= soma + numero;
        console.log("Numero:" + numero);
        console.log("Soma:" +soma);
        opcao = prompt("Deseja continuar? S[s] para prosseguir com o somatório.");
    }
    alert ("A soma total dos" +cont + "numeros é:" + soma);
    
    
    /*console.log();
    const apresentacao = "Hello, World!";
    console.log(apresentacao);
    var nome = "Maicon "; 
    let idade = "18";
    
    console.log(nome,idade);*/
    
    };