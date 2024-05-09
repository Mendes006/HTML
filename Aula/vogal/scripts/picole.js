alert("Escolha seu sabor:\n")

let opcao = paraInt(promp("Dite qual opção você escolhe:"))

switch(opcao)   {
    case 1:
        alert("o preço fica R$1,50")
        break
    case 2:
        alert("o preço fica R$2,50")
        break
    case 3:
        alert("o preço fica R$2,50")
        break
    case 4:
        alert("o preço fica R$3,20")
        break
    case 5:
        alert("o preço fica R$3,40")
        break
    case 6:
        alert("o preço fica R$3,00")
        break
    case 7:
        alert("o preço fica R$3,60")
        break
    case 8:
        alert("o preço fica R$4,00")
        break
    case 9:
        alert("o preço fica R$5,00")
        break
    default:
        alert("OPÇÃO INVÁLIDA")
}