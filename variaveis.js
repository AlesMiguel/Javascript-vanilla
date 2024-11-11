// HTML - Estrutura do Site || CSS - Estilização do Site || JS - Interação com Usuário do Site do Site || MYSQL - Banco de Dados || API - Banco de Dados Mocado

var x = 100;
console.log('Valor de X é ' + x); // Esse + para concatenar

// Tipos
var letra = '100';

var numero = 100;

var verdadeiro = true; // TRUE sim(verdadeiro) FALSE não(falso)

var carros = [
    {id: "1",  nome: "Honda Civic", preco: 19000, marca: "Honda"},
    {id: "2",  nome: "Prisma", preco: 20000, marca: "Chevrolet"}
];

carros.map((carro) => {
    console.log("Nome do Carro: " + carro.nome)
})