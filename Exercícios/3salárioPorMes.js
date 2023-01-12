//Desenvolva uma funcao que recebe dois paramentros, um é a quantidade de horas trabalhadas por um funcionario num mes
//e o quanto ele recebe por hora. O retorno da funcao deve ser a string "Salario igual a R$ X", em que X é o quanto o
//funcionario ganhou em um mes

//meu codigo

function ganhouNoMes (horasTrabalhadas, salarioPorHora) {
    let salarioTotal = horasTrabalhadas * salarioPorHora
    return `Salário igual a R$${salarioTotal}`
}

console.log(ganhouNoMes(150, 40.5))